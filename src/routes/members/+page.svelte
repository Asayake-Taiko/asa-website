<script lang="ts">
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte'
  import { base } from '$app/paths';
  import { gen24, gen23, gen22, gen21, alumni } from './members';

  let displayMembers = [gen24, gen23, gen22, gen21];

  const handleMouseOver = (e: MouseEvent) => {
    const target = (e.currentTarget as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
    const pparent = target[0].children as HTMLCollectionOf<HTMLElement>;
    const parent = pparent[0].children as HTMLCollectionOf<HTMLElement>;
    parent[1].classList.remove('!hidden');
  }
  const handleMouseLeave = (e: MouseEvent) => {
    const target = (e.currentTarget as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
    const pparent = target[0].children as HTMLCollectionOf<HTMLElement>;
    const parent = pparent[0].children as HTMLCollectionOf<HTMLElement>;
    parent[1].classList.add('!hidden');
  }

  const handleFocusIn = (e: FocusEvent) => {
    const target = (e.target as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
    const pparent = target[0].children as HTMLCollectionOf<HTMLElement>;
    pparent[1].classList.remove('!hidden');
  }

  const handleFocusOut = (e: FocusEvent) => {
    const target = (e.target as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
    const pparent = target[0].children as HTMLCollectionOf<HTMLElement>;
    pparent[1].classList.add('!hidden');
  }

  const handleClick = (e: MouseEvent) => {  
    const target = e.currentTarget as HTMLElement;

    const selectedGen = target.dataset.gen;
    document.querySelector('li.active')?.classList.remove('active');
    target.classList.toggle('active');

    if(selectedGen === 'alumni') {
      document.querySelector('.gen-members')?.classList.add('!hidden');
      document.querySelector('.alumni')?.classList.remove('!hidden');
      return;
    }

    document.querySelector('.gen-members')?.classList.remove('!hidden');
    document.querySelector('.alumni')?.classList.add('!hidden');

    if(selectedGen === 'all') {
      displayMembers = [gen24, gen23, gen22, gen21];
    }else if (selectedGen === '24') {
      displayMembers = [gen24];
    } else if (selectedGen === '23') {
      displayMembers = [gen23];
    } else if (selectedGen === '22') {
      displayMembers = [gen22];
    } else if (selectedGen === '21') {
      displayMembers = [gen21];
    }
  }

  const handleMemberClick = (e: MouseEvent) => {  
    const target = (e.currentTarget as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
    const pparent = target[0].children as HTMLCollectionOf<HTMLElement>;
    const parent = pparent[0].children as HTMLCollectionOf<HTMLElement>;
    parent[2].classList.remove('!opacity-0');
    if(parent[2].className.includes('backdrop-brightness-[0.6] !top-0 !rounded-none')){
      parent[2].classList.remove('backdrop-brightness-[0.6]', '!top-0', '!rounded-none');
    }
    else {
      parent[2].classList.add('backdrop-brightness-[0.6]', '!top-0', '!rounded-none');
    }
  }

</script>

<Header page="members" />
<section class='banner-wrapper'>
  <div class='banner'>
    <h1>Members</h1>
    <h2>Academic Year 21-22</h2>
  </div>
</section>
<section class='main'>
  <nav class="gen-menu-wrapper">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <ul class='gen-menu'>
      <li data-gen="all" on:click={handleClick} class='active'>
        <button>All</button>
      </li>
      <li data-gen="24" on:click={handleClick} >
        <button>Generation 24</button>
      </li>
      <li data-gen="23" on:click={handleClick} >
        <button>Generation 23</button>
      </li>
      <li data-gen="22" on:click={handleClick} >
        <button>Generation 22</button>
      </li>
      <li data-gen="21" on:click={handleClick} >
        <button>Generation 21</button>
      </li>
      <li data-gen="alumni" on:click={handleClick} >
        <button>Alumni</button>
      </li>
    </ul>
  </nav>
  <!-- <div class="gen-members grid grid-cols-3"> -->
  <div class="gen-members">
    {#each displayMembers as m}
      {#each m.members.sort((a, b) => {
        if(a.name < b.name) return -1;
        else return 1;
      }) as member}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class='gen-member relative' on:mouseover={handleMouseOver} on:mouseleave={handleMouseLeave} on:click={handleMemberClick}>
        <button class='relative overflow-y-auto' on:focusin={handleFocusIn} on:focusout={handleFocusOut}>
          <div class='h-full'>
            <img class='member-image' src="{base}/members/{member.gen}/{member.imgs.main}.jpg" alt="{member.name}" />
            <img class='member-image member-image-alt !hidden' src="{base}/members/{member.gen}/{member.imgs.alt}.jpg" alt="{member.name} alt" />
            <div class='member-quote h-full overflow-y-auto !opacity-0 top-[-100%] duration-500 ease'>
                <p>{member.question}</p>
                <p style="margin-top: 1em;">{member.answer}</p>
            </div>
          </div>
        </button>
        <div class='member-info'>
          <span class='name'>{member.name}</span>
          <span class='major'>{member.major}</span>
        </div>
      </div>
      {/each}
    {/each}
  </div>
  <div class='!hidden alumni'>
    {#each alumni as alum} 
      <div class='alum'>
        <div class='alum-title'>
          {alum.year}
        </div>
        <!--
        {#if alum.image}
          <img src="members/alumni/{alum.year}.jpg" alt="{alum.year}" />
        {/if}
        -->
        <!-- <div class='grid grid-cols-3'> -->
        <div class='alum-names'>
          {#each alum.members.sort() as member} 
          <div class='alum-name'>{member}</div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
<Footer />

<svelte:head>
  <title>Asayake Taiko | Members</title>
  <meta name="description" content="Asayake Taiko | Members" />
</svelte:head>

<style lang="scss">
  .banner-wrapper {
    padding-top: 5em;
  }
  .banner {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
    
    h1 {
      color: #791111;
      font-size: 4em;
      font-weight: bold;
    }

    h2 {
      margin-top: 5px;
      font-size: 1.125em;
      font-weight: 600;
      color: #791111de;
    }
  }

  .main {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 4em 0;
    height: 100%;
  }

  .gen-menu-wrapper {
    border-bottom: 1px solid #eee;
    padding-bottom: 2em;
    margin-bottom: 4em;

    .gen-menu {
      li {
        height: 2.125em;
        font-size: 1.25rem;
        color: #777;
        font-weight: 600;
        position: relative;
        display: flex;
        align-items: center;
        transition: color 0.5s ease;

        &:hover {
          cursor: pointer;
          color: #000;
        }

        &.active {
          color: #000;

          &::before {
            content: "";
            position: absolute;
            left: -15px;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            border-radius: 999px;
            background-color: #791111;
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .gen-members {
    .gen-member {
      overflow: hidden;
      position: relative;
      margin-bottom: 2em;

      &:hover {
          cursor: pointer;
        }
    }

    .member-image {
      border-radius: 5px;

      &-alt {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .member-quote {
      border-radius: 5px;
      position: absolute;
      left: 0;
      width: 100%;
      overflow-y: auto;
      font-size: 1rem;
      padding: 0.625em 1em;
      border-radius: 0 0 300px 300px;
      line-height: 1.5;
      color: white;
    }

    .member-info {
      display: flex;
      flex-direction: column;
      line-height: 1;
      
      .name {
        margin-top: 5px;
        font-size: 1.25rem;
        font-weight: bold;
      }
      
      .major {
        margin-top: 5px;
        font-size: 0.75rem;
        color: #777;
      }
    }
  }

  .alumni {
    .alum {
      margin-bottom: 76px;
    }
    .alum-title {
      line-height: 1;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .alum-name {
      width: 100%;
      font-size: 1rem;
      border-bottom: 1px solid #eee;
      margin-bottom: 0.625em;
    }
  }

@media screen and (max-width: 699px) {
  .main {
    flex-direction: column;
    margin: auto 3em;
  }
}
  
@media screen and (min-width: 700px) {
  .main {
    max-width: 1920px;
    margin: 6.25em auto;
    padding: 0 1.375em 0 2em;
  }
  .gen-menu-wrapper {
    width: 50%;
    border-bottom: none;

    .gen-menu {
      position: sticky;
      top: 11.25em;
      width: 18.75em;
    }
  }

  .gen-members {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;

    .gen-member {
      margin-right: 0.625em;
    }

    .member-quote {
      font-size: 0.875rem;
      line-height: 1.25;
    }
  }
  .alumni {
    width: 80%;

    .alum-names {
      display: grid;
      grid-template-columns: 0.3fr 0.3fr;

      .alum-name {
        width: 12.5em;
        margin-right: 1.25em;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .gen-menu-wrapper {
    width: 30%;
  }
  .gen-members {
    grid-template-columns: 0.45fr 0.45fr 0.45fr;
  }

  .alumni {
    width: 90%;

    .alum-names {
      display: grid;
      grid-template-columns: 0.3fr 0.3fr 0.3fr;

      .alum-name {
        width: 12.5em;
      }
    }
  }
}
</style>
