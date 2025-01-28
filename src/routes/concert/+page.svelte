<script lang="ts">
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte'
  import { concerts } from './concerts';
  import type { PosterType } from './concerts';
  import { base } from '$app/paths';
  import { writable } from 'svelte/store';

  const activeConcert = writable(concerts[0]);

  const handleClick = (e: MouseEvent, concert: PosterType) => {
    const target = e.currentTarget as HTMLElement;
    const activeList = document.querySelector('li.active') as HTMLElement;
    if(target === activeList) {
      activeList.children[1].classList.toggle('!max-h-[100vh]');
      return;
    }
    activeList.classList.remove('active');
    activeList.children[1].classList.remove('!max-h-[100vh]');
    target.classList.toggle('active');
    
    (target.children[1] as HTMLElement).classList.toggle('!max-h-[100vh]');
    activeConcert.set(concert);
  }
</script>

<svelte:head>
  <title>Asayake Taiko | Concert</title>
  <meta name="description" content="Asayake Taiko | Concert" />
</svelte:head>

<Header page="concert" />
<section class='banner-wrapper'>
  <div class='banner'>
    <div>
      <h1>Concert</h1>
    </div>
  </div>
</section>
<section class='main-section'> 
  <nav class='left'>
    <ul class='concert-menu'>
      {#each concerts as concert, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li class='concert-menu-item' class:active={i===0} on:click={(e) => handleClick(e, concert)}>
        <div class='flex w-full h-full justify-between items-center'>
          <button class='title'>{concert.title}</button>
          <span class='year'>{concert.year}</span>
        </div>
        <div class='concert-poster max-h-0 overflow-hidden duration-500' class:!max-h-[100vh]={i===0}>
          <img src="{base}/concerts/webp/poster_{concert.year}.webp" alt="{concert.title}" />
        </div>
      </li>
      {/each}
    </ul>
  </nav>
  <div class='right'>
    <div class='concert-poster'>
      {#if $activeConcert}
        <img src="{base}/concerts/webp/poster_{$activeConcert.year}.webp" alt="{$activeConcert.title}" />
      {/if}
    </div>
  </div>
</section>
<Footer />

<style lang="scss">
  .banner-wrapper {
    padding-top: 5em;
  }
  .banner {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    overflow-x: hidden;
    position: relative;
    
    h1 {
      color: #791111;
      font-size: 50px;
      font-weight: bold;
    }
  }

  .main-section {
    display: flex;
    position: relative;
    margin: 100px 0;

    nav {
      width: 100%;
    }

    .right {
      div {
        width: 600px;
        max-height: 800px;
        margin-right: 250px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .concert-menu {
    &-item {
      display: flex;
      flex-direction: column;
      padding: 0;
      color: #999;
      width: 600px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: color 0.5s ease, border-bottom 0.5s ease, padding 0.5s ease;
      
      & > div:first-of-type {
        height: 50px;
      }

      & > div:last-of-type {
        img {
          margin: auto;
          width: 80%;
          margin-bottom: 16px;
        }
      }

      &:hover {
        color: black;
      }

      .title {
        font-size: 20px;
        font-weight: 500;
      }
      
      .year {
        font-size: 16px;
      }
      
      .link {
        font-size: 16px;
        right: -30px;
        top: 48%;
        transform: translateY(-48%);
        
        &:hover {
          top: 40%;
          right: -33px;
        }
      }

      &.active {
        color: #000;
        border-bottom: 1px solid #791111;
      }
    }
  }

  @keyframes slide {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: 699px) {
    .concert-menu {
      &-item {
        width: 90%;
        margin: auto;

        &.active {
          background-color: #791111;
          color: #eee;
          border-radius: 5px;
          padding: 0 12px;
          transition: all 0.3s ease;
          border-bottom: none;
        }
      }
    }
    .right {
      display: none;
    }
  }
  
  @media screen and (min-width: 700px) {
    .concert-menu {
      &-item {
        width: 600px;
        margin: auto;

        &.active {
          background-color: #791111;
          color: #fff;
          border-radius: 5px;
          padding: 0 12px;
          transition: all 0.3s ease;
          border-bottom: none;
        }
      }
    }

    .right {
      display: none;
    }
  }

  @media screen and (min-width: 999px) {
    .left {
      margin-left: 133px;
    }
    .concert-menu {
      &-item {
        width: 70%;
        margin: 0;

        & > div:first-of-type {
          height: 50px;
        }

        .concert-poster {
          display: none;
        }

        .title {
          font-size: 20px;
        }
        
        .year {
          font-size: 16px;
        }
      }
    }

    .right {
      display: block;

      .concert-poster {
        position: sticky;
        top: 200px;
      }
    }
  }

</style>
