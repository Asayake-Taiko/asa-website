type AlumniType = {
  year: string,
  image: boolean,
  members: string[]
}

type Member = {
  name: string,
  gen: string,
  major: string,
  question: string,
  answer: string,
  imgs: {
    main: string,
    alt: string
  }
}

type Generation = {
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

export const gen24: Generation = {
  gen: "Gen 24",
  members: [
    {
      name: "Alison Yi-Li",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "alison_li_main",
        alt: "alison_li_alt"
      }
    },
    {
      name: "Angus Yick",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "angus_yick_main",
        alt: "angus_yick_alt"
      }
    },
    {
      name: "chris Truong",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "chris_truong_main",
        alt: "chris_truong_alt"
      }
    },
    {
      name: "Jacob Ivan Camino",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "jacob_camino_main",
        alt: "jacob_camino_alt"
      }
    },
    {
      name: "Lauren Bryan",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "lauren_bryan_main",
        alt: "lauren_bryan_alt",
      }
    },
    {
      name: "Maira Mendez",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "maira_mendez_main",
        alt: "maira_mendez_alt"
      }
    },
    {
      name: "Matthew Lam",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "matthew_lam_main",
        alt: "matthew_lam_alt"
      }
    },
    {
      name: "Zoe Nguyen",
      gen: "gen24",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "zoe_nguyen_main",
        alt: "zoe_nguyen_alt"
      }
    }
  ]
}

export const gen23: Generation = {
  gen: "Gen 23",
  members: [
    {
      name: "Aidan Beaver",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "aidan_beaver_main",
        alt: "aidan_beaver_alt"
      }
    },
    {
      name: "Aiden Ortega",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "aiden_ortega_main",
        alt: "aiden_ortega_alt"
      }
    },
    {
      name: "Jackson Nagata",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "jackson_nagata_main",
        alt: "jackson_nagata_alt"
      }
    },
    {
      name: "Karl Gorski",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "karl_gorski_main",
        alt: "karl_gorski_alt"
      }
    },
    {
      name: "Maiya Kuida-Osumi",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "maiya_kuida-osumi_main",
        alt: "maiya_kuida-osumi_alt",
      }
    },
    {
      name: "Megumi Leung",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "megumi_leung_main",
        alt: "megumi_leung_alt"
      }
    },
    {
      name: "Neela Kolte",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "neela_kolte_main",
        alt: "neela_kolte_alt"
      }
    },
    {
      name: "Sebastian Ryo-Willis Sugiyama",
      gen: "gen23",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "sebastian_sugiyama_main",
        alt: "sebastian_sugiyama_alt"
      }
    }
  ]
}

export const gen22: Generation = {
  gen: "Gen 22",
  members: [
    {
      name: "Jamie Shou",
      gen: "gen22",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "jamie_shou_main",
        alt: "jamie_shou_alt"
      }
    },
    {
      name: "Kristina Diep",
      gen: "gen22",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "kristina_diep_main",
        alt: "kristina_diep_alt"
      }
    },
    {
      name: "Kane Li",
      gen: "gen22",
      major: "Computer Science",
      question: "Taifuu",
      answer: "Nice to see you here! My name is Kane Li and I am a freshman at UC San Diego majoring in Computer Science. While I had no prior musical nor taiko experience prior to joining Asayake Taiko, I fell in love with the style and personality of the Taiko community ever since attending my first workshop. It has been a great opportunity to bond, get in touch with my musical side, and even get some exercise! Outside of Taiko, I enjoy playing games such as Brawl Stars and Minecraft, watching shows/films, exercise, and reading manga. Fun fact: I have a missing tooth, it just never grew.",
      imgs: {
        main: "kane_li_main",
        alt: "kane_li_alt"
      }
    },
    {
      name: "Katelyn Miyasaki",
      gen: "gen22",
      major: "Bioengineering",
      question: "No Answer",
      answer: "Katelyn is a grad student studying bioengineering. She often saw taiko performances growing up and is excited to be performing herself! She wanted to put her questionorite Asa song in this bio, but couldn’t pick just one. Besides taiko, Katelyn likes sports anime, making playlists, and typography.",
      imgs: {
        main: "katelyn_miyasaki_main",
        alt: "katelyn_miyasaki_alt"
      }
    },
    {
      name: "Kylie Yanagi",
      gen: "gen22",
      major: "No Answer",
      question: "",
      answer: "",
      imgs: {
        main: "kylie_yanagi_main",
        alt: "kylie_yanagi_alt"
      }
    },
    {
      name: "Matthew Alegrado",
      gen: "gen22",
      major: "Electrical Engineering",
      question: "No Answer",
      answer: "Hello, I'm Matthew and I'm a 2nd year Electrical Engineering major. I was born in Chula Vista, CA. This is my first year in Asa and my first year playing taiko.I joined Asa because I liked doing percussion in high school and I found out about Asa after a friend of mine joined a similar group. I liked the environment during tryouts with the way everyone helps each other and had fun together.",
      imgs: {
        main: "matthew_alegrado_main",
        alt: "matthew_alegrado_alt"
      }
    },
    {
      name: "Micah Esmino",
      gen: "gen22",
      major: "Cognitive and Behavorial Neuroscience",
      question: "No Answer",
      answer: "Hi! I'm Micah Esmino, a first-year at Revelle college at UC San Diego. I'm currently studying cognitive and behavioral neuroscience. I've had previous experience in music--I was in choir for my entire life--but this is the first time I've ever done taiko! Outside of Asa, I enjoy singing, journaling, scrapbooking, and playing video games! Asa has a very welcoming energy with everyone in it; I love being around every member because of their fun and loving energy for what they do and those around them!!",
      imgs: {
        main: "micah_esmino_main",
        alt: "micah_esmino_alt"
      }
    },
    {
      name: "Timothy Hsiao",
      gen: "gen22",
      major: "Bioinformatics",
      question: "No Answer",
      answer: "HI! I am Timothy Hsiao, and I am a first year Bioinformatics major at UC San Diego. This is my first year playing taiko, and I am having a great time so far! In addition to taiko, I also play piano, cello, and guitar, and I am learning violin and fue!",
      imgs: {
        main: "timothy_hsiao_main",
        alt: "timothy_hsiao_alt"
      }
    }
  ]
}

export const gen21: Generation = {
  gen: "Gen 21",
  members: [
    {
      name: "Kade Kaneshiro",
      gen: "gen21",
      major: "Structural Engineering",
      question: "Ishi",
      answer: "It reminds me of retreat!",
      imgs: {
        main: "kade_kaneshiro_main",
        alt: "kade_kaneshiro_alt"
      }
    },
    {
      name: "Saam Hamidi",
      gen: "gen21",
      major: "Physics",
      question: "Ishi",
      answer: "Ishi means rock in Japanese. Ishi sounds a lot like ushi (ushi means cow in Japanese); I like ushi.",
      imgs: {
        main: "saam_hamidi_main",
        alt: "saam_hamidi_alt"
      }
    },
    {
      name: "Eric Leung",
      gen: "gen21",
      major: "Mechanical Engineering",
      question: "Kamaitachi",
      answer: "Bachi go spin spin, looks cool.",
      imgs: {
        main: "eric_leung_main",
        alt: "eric_leung_alt"
      }
    },
    {
      name: "Erika Munekata",
      gen: "gen21",
      major: "Undecided",
      question: "Kodomo/Awakening",
      answer: "I love songs where you interact with fellow members and coordinate something together. Very fun.",
      imgs: {
        main: "erika_munekata_main",
        alt: "erika_munekata_alt"
      }
    },
  ]
}