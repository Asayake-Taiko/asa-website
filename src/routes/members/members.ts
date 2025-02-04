type AlumniType = {
  year: string,
  image: boolean,
  members: string[]
}

type Member = {
  name: string,
  gen: string,
  major: string,
  fav: string,
  quote: string,
  imgs: {
    main: string,
    alt: string
  }
}

type MemberType = {
  gen: string,
  members: Member[]
}

export const alumni: AlumniType[] = [
    {
      year: '2003-2004',
      image: true,
      members: ['Reid Matsuoka', 'Ronald Melencio', 'Ryan Okada', 'Erin Takahashi', 'Carrie Nishimura', 'Marissa Miyao', 'Chris Huynh', 'Conrad Ohashi', 'Mitch Masuda', 'Bobby Koga']
    },
    {
      year: '2004-2005',
      image: true,
      members: ['Chris Huynh', 'Alex Khalil', 'Michael Hirota', 'Kim Nakashima', 'Mieko McCue', 'Diana Nguyen', 'Ronald Melencio', 'Mitch Masuda', 'Carrie Nishimura', 'Conrad Ohashi', 'Marissa Miyao', 'Ryan Okada', 'Peter Chang'],
    },
    {
      year: '2005-2006',
      image: true,
      members:['Alex Khalil', 'Chris Huynh', 'James Price', 'Diana Nguyen', 'Michael Hirota', 'Albert Chu', 'Scott Baba', 'Mitch Masuda', 'Michi Yamazaki', 'Ayano Ogura', 'Nora Au', 'Terresa Kim', 'Mieko McCue', 'Katy Alexander', 'Anton Palma', 'Peter Chang', 'Kim Nakashima', 'Ryan Okada', 'Erin Takahashi', 'Zane Ho']
    },
    {
      image: true,
      year: '2006-2007',
      members: ['Chris Huynh', 'Diana Nguyen', 'Peter Chang', 'Anton Palma', 'Michael Hirota', 'Albert Chu', 'James Price', 'Miki Kelley', 'Scott Baba', 'Michelle Zimmermann', 'Mitch Masuda', 'Atsushi Ohoka', 'Rob Omoto', 'Ayano Ogura', 'Kim Nakashima', 'Jenna Gaw', 'Kelli Wing', 'Terresa Kim']
    },
    {
      year: '2007-2008',
      image: true,
      members: ['Rosaleen Ly', 'Cory Wakamatsu', 'Atsushi Ohoka', 'Diana Nguyen', 'Gabriel Elmaleh', 'Michael Hirota', 'James Price', 'Miki Kelley', 'Michelle Zimmermann', 'Winny Wen', 'Terresa Kim', 'Susan Pai', 'Kim Nakashima', 'Kelli Wing', 'Yuki Horikawa', 'Ayano Ogura', 'Rica Guidangen', 'Jenna Gaw']
    },
    {
      year: '2008-2009',
      image: true,
      members: ['Rosaleen Ly', 'Susan Pai', 'Katherine Wong', 'Atsushi Ohoka', 'Albert Chu', 'Gabriel Elmaleh', 'James Price', 'Chase Cho', 'Cory Wakamatsu', 'Michelle Zimmermann', 'Kelli Wing', 'Yuki Horikawa', 'Sarah Arakaki', 'Taffy Tom', 'Susan Park', 'Vicky Phan', 'Ayano Ogura', 'Terresa Kim', 'Rica Guidangen', 'Winny Wen', 'Jenna Gaw']
    },
    {
      year: '2009-2010',
      image: true,
      members: ['Krista Steuben', 'Albert Chu', 'Megan Matsumoto', 'Chris Cooke', 'Justin Chang', 'Elaire Andrade', 'Karen Wang', 'Katherine Wong', 'Atsushi Ohoka', 'Gabriel Elmaleh', 'Rosaleen Ly', 'Chase Cho', 'Rica Guidangen', 'Taffy Tom', 'Mark Takesuye', 'Susan Park', 'Yuki Horikawa', 'Vicky Phan', 'Sarah Arakaki', 'Winny Wen', 'Kelli Wing (not shown)']
    },
    {
      year: '2010-2011',
      image: true,
      members: ['Jonathan Hoang', 'Gabriel Elmaleh', 'Eamon Marchant', 'Atsushi Ohoka', 'Melvin Gualberto', 'Albert Chu', 'Kathering Wong', 'Elaire Andrade', 'Christian Castillo', 'Rosie Ly', 'Cory Wakamatsu', 'Patrick Huynh', 'Krista Steuben', 'Jimmy Nguyen', 'Nicholas Vu', 'Jinjoo Lee', 'Jenny Ng', 'Vicky Phan', 'Yuki Horikawa', 'Susan Pai', 'Jessica Endo', 'Karen Wang', 'Megan Matsumoto', 'Helen Park', 'Susan Park', 'Rica Guidangen', 'Taffy Tom', 'Winny Wen', 'Jordan Tani', 'Thais Takei']
    },
    {
      year: '2011-2012',
      image: true,
      members: ['Matthew Sasaki', 'Erin Foley-Okumura', 'Joseph Caluza', 'Briana Zimmers', 'Chelsea Abang', 'Laura Lee', 'Mark Christopher Oteyza', 'Anna Ogata', 'Helen Park', 'Elaire Andrade', 'Megan Matsumoto', 'Christian Castillo', 'Jordan Tani', 'Jimmy Nguyen', 'Krista Steuben', 'Nicholas Vu', 'Eamon Marchant', 'Jinjoo Lee', 'Jonathan Hoang', 'Melvin Gualberto', 'Thais Takei', 'Karen Wang', 'Jenny Ng', 'Susan Park', 'Katherine Wong', 'Patrick Huynh']
    },
    {
      year: '2012-2013',
      image: true,
      members: ['Eamon Marchant', 'Mark Christopher Oteyza', 'Brent Palmer', 'Nicholas Vu', 'Helen Park', 'Matthew Sasaki', 'Matti Siltanen', 'Dean Tan', 'Chelsea Abang', 'Christian Castillo', 'Katherine Wong', 'Laura Lee', 'Jinjoo Lee', 'Jimmy Nguyen', 'Erin Foley-Okumura', 'Hitomi Heap-Baldwin', 'Briana Zimmers', 'Megan Matsumoto', 'Elaire Andrade', 'Aubrey Lyons', 'Joseph Caluza', 'Vinh Tran', 'Jordan Tani', 'Beth Matter', 'Thais Takei', 'Krista Steuben', 'Anna Ogata', 'Theresa Mari-Davis']
    },
    {
      year: '2013-2014',
      image: false,
      members: ['Justin Brookshier', 'Joseph Caluza', 'Chelsea Abang', 'Kyle Torremocha', 'Dean Tan', 'Erin Foley-Okumura', 'Michael Hidayat', 'Vinh Ha', 'Vinh Tran', 'Briana Zimmers', 'Mark Oteyza', 'Marina McGough', 'Christian Masia', 'Beth Matter', 'Elaire Andrade', 'Aubrey Lyons', 'Coco Waiyee Chan', 'Heather Zook', 'Matthew Sasaki', 'Jimmy Nguyen', 'Jordan Tani', 'Anna Ogata', 'Helen Park', 'Jinjoo Lee', 'Eamon Marchant']
    },
    {
      year: '2014-2015',
      image: false,
      members: ['David Lee', 'Dinithy Nayuki Isoda', 'Cameron Panlasigui', 'Kyle Torremocha', 'Heather Zook', 'Kinsey Chikuma', 'Aubrey Lyons', 'Anthony Quach', 'Danny Gibo', 'Michael Hidayat', 'Matthew Sasaki', 'Jennifer Burgoyne', 'Lauren Dimalanta', 'Josaleen Ta', 'Alanis Nokham', 'Marina McGough', 'Beth Matter', 'Stephanie Lee', 'Athena Ibe-Ibanez', 'Mark Oteyza', 'Vinh Tran', 'Justin Brookshier', 'Erin Foley-Okumura', 'Chelsea Abang', 'Briana Zimmers', 'Joseph Caluza', 'Vinh Ha', 'Anna Ogata', 'Laura Lee', 'Coco Waiyee Chan']
    },
    {
      year: '2015-2016',
      image: true,
      members: ['Danny Gibo', 'Ryan Okazaki', 'Dinithy Nayuki Isoda', 'Athena Ibe-Ibanez', 'Kinsey Chikuma', 'Catie Sakurai', 'Dae Han', 'Marina McGough', 'Stephanie Lee', 'Fabian Lim', 'Josaleen Ta', 'Jennifer Burgoyne', 'Katherine Santos',' Lauren Dimalanta', 'Alanis Nokham', 'Anthony Quach', 'Beth Matter', 'Kyle Torremocha', 'Samm Iwamasa', 'Cameron Panlasigui', 'David Lee', 'Michael Hidayat', 'Austin Pukasamsombut', 'Heather Zook', 'Ivy Hang', 'Aubrey Lyons', 'Jessy Nguyen']
    },
    {
      year: '2016-2017',
      image: false,
      members: ['Dae Han', 'Justin Jio', 'Ryan Okazaki', 'Hiroto Kakitani', 'Dylan Power', 'Yufei Wang', 'Joshua Van Gogh', 'Samm Iwamasa', 'Kyle Torremocha', 'Catie Sakurai', 'Jennifer Le', 'Denise Rivera-Medina', 'Katherine Liang', 'Josaleen Ta', 'Jennifer-Yuumi Burgoyne', 'Alanis Nokham', 'Fabian Lim', 'Jolene Lei', 'Lauren Dimalanta', 'Kana Okafuji', 'Michael Hidayat', 'Anthony Quach', 'Kinsey Chikuma', 'David Lee', 'Cameron Panlasigui', 'Austin Pukasamsombut', 'Katherine Santos', 'Athena Ibe-Ibanez', 'Stephanie Lee', 'Dinithy Nayuki Isoda', 'Danny Gibo']
    },
    {
      year: '2017-2018',
      image: true,
      members: ['Alison Liu', 'Geoffrey Hand', 'Keita Kadokura', 'Jeff Onuma', 'Jii Eu', 'Nick Alan Wong', 'Miguel Alvendia', 'Yatavee Vj', 'Nayuki Isoda', 'Jolene Lei', 'Justin Jio', 'Katherine Liang', 'Dylan Power', 'Jennifer Le', 'Hiroto Kakitani', 'Denise Lucia', 'Joshua Van Gogh', 'Kana Okafuji', 'Danny Gibo', 'Fabian Lim', 'Samm Iwamasa', 'Catie Sakurai', 'Jennifer-Yuumi Burgoyne', 'Lauren Dimalanta', 'Kinsey Chikuma', 'Anthony Quach']
    },
    {
      year: '2018-2019',
      image: true,
      members: ['Makoa Bryson', 'Jeremy Aban', 'Andrew Fujita', 'David Song', 'Kazuha Miyoshi', 'Reika Shimizu', 'Eric Igarashi', 'Austin Ma', 'Henry Narabe', 'Henry Helmuth', 'Yatavee Vj', 'Alison Liu', 'Jeff Onuma', 'Denise Lucia', 'Kana Okafuji', 'Miguel Alvendia', 'Geoffrey Hand', 'Jolene Lei', 'Justin Jio', 'Samm Iwamasa', 'Hiroto Kakitani', 'Fabian Lim', 'Jennifer Le']
    },
    {
      year: '2019-2020',
      image: true,
      members: ['Henry Helmuth', 'Makoa Bryson', 'Gene Goldberg', 'Matheus Gorski', 'Sophia Gutleben', 'Masanori Monguchi', 'Andrew Fujita', 'David Song', 'Laurence Kuo', 'Jeff Onuma', 'Geoffrey Hand', 'Miku Okada', 'Saki Matsumura', 'Ayumi Bindley', 'Eric Igarashi', 'Nikki Saito', 'Aunice Louper Valdez', 'Reika Shimizu', 'Kazuha Miyoshi', 'Yatavee Vj', 'Denise Lucia', 'Jolene Lei', 'Justin Jio', 'Kana Okafuji', 'Jeremy Aban', 'Jennifer Le', 'Miguel Alvendia', 'Alison Liu']
    },
    {
      year: '2020-2021',
      image: false,
      members: ['Alison Liu', 'Jeff Onuma', 'Andrew Fujita', 'Austin Ma', 'Eric Igarashi', 'Henry Helmuth', 'Kazuha Miyoshi', 'Makoa Bryson', 'Reika Shimizu', 'Aunice Louper Valdez', 'Ayumi Bindley', 'Gene Goldberg', 'Masanori Monguchi', 'Matheus Gorski', 'Nikki Saito', 'Sophia Gutleben', 'Christa Cheng', 'Jenna Heskin', 'Julia Dohner', 'Katelyn Chu', 'Maya Wong', 'William Chu']
    },
    {
      year: '2021-2022',
      image: true,
      members: ['Makoa Bryson', 'Keiko Dickens', 'Darryl Tayag', 'Andrew Meckert', 'Truman Koh', 'William Chu', 'Kai Morita', 'Ethan Satoda', 'Henry Helmuth', 'Nikki Saito', 'Saam Hamidi', 'Kade Kaneshiro', 'Erika Munekata', 'Christa Cheng', 'Maya Wong', 'Katelyn Chu', 'Aleck Adriano', 'Eric Leung', 'Jenna Heskin', 'Reika Shimizu', 'Ronan Konishi', 'Masanori Monguchi', 'Eric Igarashi', 'Austin Ma', 'Aunice Valdez', 'Ayumi Bindley', 'Kazuha Miyoshi', 'Julia Dohner']
    },
    {
      year: '2022-2023',
      image: true,
      members: ['William Chu', 'Kateleen Villadelgado', 'Aleck Adriano', 'Kane Li', 'Timothy Hsiao', 'Truman Koh', 'Andrew Meckert', 'Matthew Alegrado', 'Jamie Shou', 'Micah Esmino', 'Kylie Yanagi', 'Nikki Saito', 'Kristina “Kat” Diep', 'Ashley Omiya', 'Katelyn Chu', 'Keiko Dickens', 'Ethan Satoda', 'Eric Leung', 'Katelyn Miyasaki', 'Erika Munekata', 'Christa Cheng', 'Maya Wong', 'Kade Kaneshiro', 'Jenna Heskin', 'Darryl Tayag', 'Henry Narabe', 'Aunice Valdez', 'Kai Morita', 'Saam Hamidi']
    },
    {
      year: '2023-2024',
      image: true,
      members: ['Karl Gorski', 'Megumi Leung', 'Neela Kolte', 'Sebastian Willis Sugiyama', 'Jackson Nagata', 'Aiden Ortega', 'Maiya Kuida-Osumi', 'Aidan Beaver', 'William Chu', 'Kane Li', 'Timothy Hsiao', 'Truman Koh', 'Andrew Meckert', 'Matthew Alegrado', 'Jamie Shou', 'Micah Esmino', 'Kylie Yanagi', 'Kristina “Kat” Diep', 'Katelyn Chu', 'Ethan Satoda', 'Eric Leung', 'Katelyn Miyasaki', 'Erika Munekata', 'Christa Cheng', 'Maya Wong', 'Kade Kaneshiro', 'Jenna Heskin', 'Saam Hamidi']
    },
    {
      year: '2024-2025',
      image: true,
      members: ['Zoe Nguyen', 'Lauren Bryan', 'Jacob Ivan Camino', 'Matthew Lam', 'Angus Yick', 'Alison Yi Li', 'Chris Truong', 'Maira Mendez', 'Karl Gorski', 'Megumi Leung', 'Neela Kolte', 'Sebastian Willis Sugiyama', 'Jackson Nagata', 'Aiden Ortega', 'Maiya Kuida-Osumi', 'Aidan Beaver', 'Kane Li', 'Timothy Hsiao', 'Matthew Alegrado', 'Jamie Shou', 'Micah Esmino', 'Kylie Yanagi', 'Kristina “Kat” Diep', 'Eric Leung', 'Katelyn Miyasaki', 'Erika Munekata', 'Kade Kaneshiro', 'Saam Hamidi']
    }
  ];

export const currentMembers: MemberType[] = [
    {
      gen: "Gen 22",
      members: [
        {
          name: "Ashley Omiya",
          gen: "gen22",
          major: "No Answer",
          fav: "No Answer",
          quote: "No Answer",
          imgs: {
            main: "ashley_omiya_main",
            alt: "ashley_omiya_alt",
          }
        },
        {
          name: "Jamie Shou",
          gen: "gen22",
          major: "No Answer",
          fav: "No Answer",
          quote: "No Answer",
          imgs: {
            main: "jamie_shou_main",
            alt: "jamie_shou_alt"
          }
        },
        {
          name: "Kristina Diep",
          gen: "gen22",
          major: "No Answer",
          fav: "No Answer",
          quote: "No Answer",
          imgs: {
            main: "kristina_diep_main",
            alt: "kristina_diep_alt"
          }
        },
        {
          name: "Kane Li",
          gen: "gen22",
          major: "Computer Science",
          fav: "Taifuu",
          quote: "Nice to see you here! My name is Kane Li and I am a freshman at UC San Diego majoring in Computer Science. While I had no prior musical nor taiko experience prior to joining Asayake Taiko, I fell in love with the style and personality of the Taiko community ever since attending my first workshop. It has been a great opportunity to bond, get in touch with my musical side, and even get some exercise! Outside of Taiko, I enjoy playing games such as Brawl Stars and Minecraft, watching shows/films, exercise, and reading manga. Fun fact: I have a missing tooth, it just never grew.",
          imgs: {
            main: "kane_li_main",
            alt: "kane_li_alt"
          }
        },
        {
          name: "Katelyn Miyasaki",
          gen: "gen22",
          major: "Bioengineering",
          fav: "No Answer",
          quote: "Katelyn is a grad student studying bioengineering. She often saw taiko performances growing up and is excited to be performing herself! She wanted to put her favorite Asa song in this bio, but couldn’t pick just one. Besides taiko, Katelyn likes sports anime, making playlists, and typography.",
          imgs: {
            main: "katelyn_miyasaki_main",
            alt: "katelyn_miyasaki_alt"
          }
        },
        {
          name: "Kate Villadelgado",
          gen: "gen22",
          major: "Japanese Studies",
          fav: "No Answer",
          quote: "YO! My name is Kateleen (Kate) Villadelgado. I’m a freshman at UCSD and my major is Japanese Studies. I've always loved the energy of taiko but this is my first time actually playing taiko! It's been really fun learning new songs and especially hanging out with the Asa Fam. Even though it's my first year here in Asayake Taiko, I already feel like I belong. Other than taiko, I really enjoy drawing fictional characters, trying (and failing) to 100% complete all Yakuza games, and singing badly. Also, my favorite food is curry (Coco Ichibanya go crazy). All in all, I’m here to live a good life, not a long one. We gamin’ frfr",
          imgs: {
            main: "kateleen_villadelgado_main",
            alt: "kateleen_villadelgado_alt"
          }
        },
        {
          name: "Kylie Yanagi",
          gen: "gen22",
          major: "No Answer",
          fav: "No Answer",
          quote: "No Answer",
          imgs: {
            main: "kylie_yanagi_main",
            alt: "kylie_yanagi_alt"
          }
        },
        {
          name: "Matthew Alegrado",
          gen: "gen22",
          major: "Electrical Engineering",
          fav: "No Answer",
          quote: "Hello, I'm Matthew and I'm a 2nd year Electrical Engineering major. I was born in Chula Vista, CA. This is my first year in Asa and my first year playing taiko.I joined Asa because I liked doing percussion in high school and I found out about Asa after a friend of mine joined a similar group. I liked the environment during tryouts with the way everyone helps each other and had fun together.",
          imgs: {
            main: "matthew_alegrado_main",
            alt: "matthew_alegrado_alt"
          }
        },
        {
          name: "Micah Esmino",
          gen: "gen22",
          major: "Cognitive and Behavorial Neuroscience",
          fav: "No Answer",
          quote: "Hi! I'm Micah Esmino, a first-year at Revelle college at UC San Diego. I'm currently studying cognitive and behavioral neuroscience. I've had previous experience in music--I was in choir for my entire life--but this is the first time I've ever done taiko! Outside of Asa, I enjoy singing, journaling, scrapbooking, and playing video games! Asa has a very welcoming energy with everyone in it; I love being around every member because of their fun and loving energy for what they do and those around them!!",
          imgs: {
            main: "micah_esmino_main",
            alt: "micah_esmino_alt"
          }
        },
        {
          name: "Timothy Hsiao",
          gen: "gen22",
          major: "Bioinformatics",
          fav: "No Answer",
          quote: "HI! I am Timothy Hsiao, and I am a first year Bioinformatics major at UC San Diego. This is my first year playing taiko, and I am having a great time so far! In addition to taiko, I also play piano, cello, and guitar, and I am learning violin and fue!",
          imgs: {
            main: "timothy_hsiao_main",
            alt: "timothy_hsiao_alt"
          }
        }
      ]
    },
    {
      gen: "Gen 21",
      members: [
        {
          name: "Kade Kaneshiro",
          gen: "gen21",
          major: "Structural Engineering",
          fav: "Ishi",
          quote: "It reminds me of retreat!",
          imgs: {
            main: "kade_kaneshiro_main",
            alt: "kade_kaneshiro_alt"
          }
        },
        {
          name: "Aleck Adriano",
          gen: "gen21",
          major: "ICAM Music",
          fav: "Jikan",
          quote: "I like Jikan because of it is dense with notes, it has cool rhythms, and it is very fun to play.",
          imgs: {
            main: "aleck_adriano_main",
            alt: "aleck_adriano_alt"
          }
        },
        {
          name: "Saam Hamidi",
          gen: "gen21",
          major: "Physics",
          fav: "Ishi",
          quote: "Ishi means rock in Japanese. Ishi sounds a lot like ushi (ushi means cow in Japanese); I like ushi.",
          imgs: {
            main: "saam_hamidi_main",
            alt: "saam_hamidi_alt"
          }
        },
        {
          name: "Keiko Dickens",
          gen: "gen21",
          major: "International Business and Linguistics",
          fav: "Ishi",
          quote: "Ishi means rock.",
          imgs: {
            main: "keiko_dickens_main",
            alt: "keiko_dickens_alt"
          }
        },
        {
          name: "Kai Morita",
          gen: "gen21",
          major: "Data Science",
          fav: "Kamaitachi",
          quote: "maya + helicopter",
          imgs: {
            main: "kai_morita_main",
            alt: "kai_morita_alt"
          }
        },
        {
          name: "Eric Leung",
          gen: "gen21",
          major: "Mechanical Engineering",
          fav: "Kamaitachi",
          quote: "Bachi go spin spin, looks cool.",
          imgs: {
            main: "eric_leung_main",
            alt: "eric_leung_alt"
          }
        },
        {
          name: "Darryl Tayag",
          gen: "gen21",
          major: "Computer Science",
          fav: "Ishi",
          quote: "The song has a ROCK solid composition with different phrases and fun movements. It also serves as a great sobriety test. Rocks totally rock!",
          imgs: {
            main: "darryl_tayag_main",
            alt: "darryl_tayag_alt"
          }
        },
        {
          name: "Ethan Satoda",
          gen: "gen21",
          major: "Neurobiology",
          fav: "Jack Bazaar",
          quote: "It has a lot of dynamic movements and requires a lot of technical skill so you feel like a god when you play it correctly.",
          imgs: {
            main: "ethan_satoda_main",
            alt: "ethan_satoda_alt"
          }
        },
        {
          name: "Truman Koh",
          gen: "gen21",
          major: "General Biology",
          fav: "Awakening",
          quote: "This song is full of opportunities to make your cohort laugh through one's silly expressions.",
          imgs: {
            main: "truman_koh_main",
            alt: "truman_koh_alt"
          }
        },
        {
          name: "Erika Munekata",
          gen: "gen21",
          major: "Undecided",
          fav: "Kodomo/Awakening",
          quote: "I love songs where you interact with fellow members and coordinate something together. Very fun.",
          imgs: {
            main: "erika_munekata_main",
            alt: "erika_munekata_alt"
          }
        },
        {
          name: "Andrew Meckert",
          gen: "gen21",
          major: "Chemical Engineering",
          fav: "Jikan-Gire",
          quote: "I love how it uses switching time signatures to make it's signature 'running out of time' feel. I also love it's choreography.",
          imgs: {
            main: "andrew_meckert_main",
            alt: "andrew_meckert_alt"
          }
        }
      ]
    },
    {
      gen: "Gen 20",
      members: [
        {
          name: "Maya Wong",
          gen: "gen20",
          major: "International Studies - History",
          fav: "Tanoshii / Kamaitachi",
          quote: "Tanoshii is always fun to both play and watch because it just exerts lots of positive bright energy that makes me very happy! For Kamaitachi, I like it because just feel a lot cooler than I am in real life when I'm playing the song (lol) because of its complexity and serious ominous vibes.",
          imgs: {
            main: "maya_wong_main",
            alt: "maya_wong_alt"
          }
        },
        {
          name: "Katelyn Chu",
          gen: "gen20",
          major: "Environmental Systems",
          fav: "Tanoshii",
          quote: "It has such an infectious energy; the first time I watched it being performed I smiled the whole way through. Getting to perform it on stage was thrilling!",
          imgs: {
            main: "katelyn_chu_main",
            alt: "katelyn_chu_alt"
          }
        },
        {
          name: "Jenna Heskin",
          gen: "gen20",
          major: "Anthropology",
          fav: "Kamaitachi",
          quote: "It's really fun and energetic and I really like hearing all the separate pieces come together when it's played.",
          imgs: {
            main: "jenna_heskin_main",
            alt: "jenna_heskin_alt"
          }
        },
        {
          name: "William Chu",
          gen: "gen20",
          major: "Bioinformatics",
          fav: "Taifuu",
          quote: "Hit drum fast and hard. It's very cool.",
          imgs: {
            main: "william_chu_main",
            alt: "william_chu_alt"
          }
        },
        {
          name: "Christa Cheng",
          gen: "gen20",
          major: "Political Science: International Relations",
          fav: "Tanoshii",
          quote: "I actually used to strongly dislike this song, but it's grown on me. I really enjoy seeing the happiness it brings to both the audience and players, and it's fun to watch and play.",
          imgs: {
            main: "christa_cheng_main",
            alt: "christa_cheng_alt"
          }
        }
      ]
    },
    {
      gen: "Gen 19",
      members: [
        {
          name: "Nikki Saito",
          gen: "gen19",
          major: "Neurobiology",
          fav: "Tanoshii",
          quote: "I love the happy, fun energy of the song!",
          imgs: {
            main: "nikki_saito_main",
            alt: "nikki_saito_alt"
          }
        },
        {
          name: "Aunice Valdez",
          gen: "gen19",
          major: "Psychology w/ Spec. Developmental Psychology",
          fav: "Kodomo",
          quote: "I love being silly with other asa members while playing. I genuinely laugh every time we do the movements!",
          imgs: {
            main: "aunice_valdez_main",
            alt: "aunice_valdez_alt"
          }
        }
      ]
    }
  ]