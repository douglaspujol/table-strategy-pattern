import { 
  BrazilData, 
  SpainData, 
  SouthKoreaData, 
  AmericanData, 
  Country 
} from './types';

export const brazilData: BrazilData[] = [
  {
    number: '135',
    name: 'Lucas Silva',
    phone: '+34 612345678',
    profession: 'Engenheiro',
    weight: 70,
    height: 175,
    status: 'PAGO',
  },
  {
    number: '190',
    name: 'Ana Costa',
    phone: '+34 698765432',
    profession: 'Professora',
    weight: 60,
    height: 160,
    status: 'AGUARDANDO',
  },
  {
    number: '205',
    name: 'Pedro Gomes',
    phone: '+34 634567890',
    profession: 'Designer',
    weight: 75,
    height: 180,
    status: 'CANCELADO',
  },
  {
    number: '278',
    name: 'Maria Oliveira',
    phone: '+34 612987654',
    profession: 'Médica',
    weight: 65,
    height: 165,
    status: 'ATRASADO',
  },
  {
    number: '314',
    name: 'Fernanda Pereira',
    phone: '+34 698543210',
    profession: 'Arquiteta',
    weight: 68,
    height: 170,
    status: 'PAGO',
  },
  {
    number: '431',
    name: 'Carlos Santos',
    phone: '+34 634123456',
    profession: 'Programador',
    weight: 80,
    height: 182,
    status: 'AGUARDANDO',
  },
  {
    number: '512',
    name: 'Patrícia Almeida',
    phone: '+34 612345789',
    profession: 'Jornalista',
    weight: 55,
    height: 158,
    status: 'CANCELADO',
  },
  {
    number: '628',
    name: 'Rafael Mendes',
    phone: '+34 698765321',
    profession: 'Chef',
    weight: 82,
    height: 177,
    status: 'ATRASADO',
  },
  {
    number: '753',
    name: 'Juliana Ferreira',
    phone: '+34 634567123',
    profession: 'Psicóloga',
    weight: 64,
    height: 162,
    status: 'PAGO',
  },
  {
    number: '864',
    name: 'Tiago Martins',
    phone: '+34 612789456',
    profession: 'Vendedor',
    weight: 70,
    height: 172,
    status: 'AGUARDANDO',
  },
];

export const spainData: SpainData[] = [
  {
    shirtNumber: '7',
    name: 'Fernando Torres',
    nationality: 'Espanhol',
    team: 'Atlético de Madrid',
  },
  {
    shirtNumber: '10',
    name: 'Lionel Messi',
    nationality: 'Argentino',
    team: 'Barcelona',
  },
  {
    shirtNumber: '11',
    name: 'Neymar Jr.',
    nationality: 'Brasileiro',
    team: 'Paris Saint-Germain',
  },
  {
    shirtNumber: '4',
    name: 'Sergio Ramos',
    nationality: 'Espanhol',
    team: 'Real Madrid',
  },
  {
    shirtNumber: '8',
    name: 'Andrés Iniesta',
    nationality: 'Espanhol',
    team: 'Barcelona',
  },
  {
    shirtNumber: '9',
    name: 'David Villa',
    nationality: 'Espanhol',
    team: 'Valência',
  },
  {
    shirtNumber: '21',
    name: 'Cesc Fàbregas',
    nationality: 'Espanhol',
    team: 'Chelsea',
  },
  {
    shirtNumber: '16',
    name: 'Javi Martínez',
    nationality: 'Espanhol',
    team: 'Bayern de Munique',
  },
  {
    shirtNumber: '3',
    name: 'Gerard Piqué',
    nationality: 'Espanhol',
    team: 'Barcelona',
  },
  {
    shirtNumber: '6',
    name: 'Xavi Hernández',
    nationality: 'Espanhol',
    team: 'Barcelona',
  },
];

export const southKoreaData: SouthKoreaData[] = [
  {
    name: 'BTS',
    memberCount: 7,
    debutYear: 2013,
    genre: 'K-Pop',
    label: '빅히트 엔터테인먼트',
    hitSong: 'Dynamite',
  },
  {
    name: 'BLACKPINK',
    memberCount: 4,
    debutYear: 2016,
    genre: 'K-Pop',
    label: 'YG 엔터테인먼트',
    hitSong: '뚜두뚜두 (DDU-DU DDU-DU)',
  },
  {
    name: 'EXO',
    memberCount: 9,
    debutYear: 2012,
    genre: 'K-Pop',
    label: 'SM 엔터테인먼트',
    hitSong: 'Love Shot',
  },
  {
    name: 'TWICE',
    memberCount: 9,
    debutYear: 2015,
    genre: 'K-Pop',
    label: 'JYP 엔터테인먼트',
    hitSong: 'Fancy',
  },
  {
    name: 'GOT7',
    memberCount: 7,
    debutYear: 2014,
    genre: 'K-Pop',
    label: 'JYP 엔터테인먼트',
    hitSong: 'Just Right',
  },
  {
    name: 'Red Velvet',
    memberCount: 5,
    debutYear: 2014,
    genre: 'K-Pop',
    label: 'SM 엔터테인먼트',
    hitSong: 'Psycho',
  },
  {
    name: 'SEVENTEEN',
    memberCount: 13,
    debutYear: 2015,
    genre: 'K-Pop',
    label: '플레디스 엔터테인먼트',
    hitSong: 'Left & Right',
  },
  {
    name: 'ITZY',
    memberCount: 5,
    debutYear: 2019,
    genre: 'K-Pop',
    label: 'JYP 엔터테인먼트',
    hitSong: 'Wannabe',
  },
  {
    name: 'MAMAMOO',
    memberCount: 4,
    debutYear: 2014,
    genre: 'K-Pop',
    label: 'RBW',
    hitSong: 'HIP',
  },
  {
    name: 'Stray Kids',
    memberCount: 8,
    debutYear: 2018,
    genre: 'K-Pop',
    label: 'JYP 엔터테인먼트',
    hitSong: 'God’s Menu',
  },
  {
    name: 'ATEEZ',
    memberCount: 8,
    debutYear: 2018,
    genre: 'K-Pop',
    label: 'KQ 엔터테인먼트',
    hitSong: 'Inception',
  },
  {
    name: 'TXT',
    memberCount: 5,
    debutYear: 2019,
    genre: 'K-Pop',
    label: '빅히트 엔터테인먼트',
    hitSong: 'Crown',
  },
];

export const americanData: AmericanData[] = [
  {
      party: "Democratic",
      name: "Joe Biden",
      stateOfOrigin: "Delaware",
      positionHeld: "President of the United States",
      yearAssumedOffice: 2021,
      age: 81,
      politicalIdeology: "Moderate liberal policies, focus on unity and infrastructure."
  },
  {
      party: "Republican",
      name: "Donald Trump",
      stateOfOrigin: "New York",
      positionHeld: "Former President of the United States",
      yearAssumedOffice: 2017,
      age: 77,
      politicalIdeology: "Populist policies, America First agenda."
  },
  {
      party: "Conservative",
      name: "Rishi Sunak",
      stateOfOrigin: "Yorkshire",
      positionHeld: "Prime Minister of the United Kingdom",
      yearAssumedOffice: 2022,
      age: 43,
      politicalIdeology: "Centre-right policies, fiscal responsibility."
  },
  {
      party: "Republican",
      name: "Ron DeSantis",
      stateOfOrigin: "Florida",
      positionHeld: "Governor of Florida",
      yearAssumedOffice: 2019,
      age: 45,
      politicalIdeology: "Conservative policies, focus on education and business."
  },
  {
      party: "Democratic",
      name: "Kamala Harris",
      stateOfOrigin: "California",
      positionHeld: "Vice President of the United States",
      yearAssumedOffice: 2021,
      age: 59,
      politicalIdeology: "Progressive policies, advocate for social justice."
  },
  {
      party: "Independent",
      name: "Bernie Sanders",
      stateOfOrigin: "Vermont",
      positionHeld: "U.S. Senator from Vermont",
      yearAssumedOffice: 2007,
      age: 83,
      politicalIdeology: "Democratic socialism, universal healthcare, income inequality."
  },
  {
      party: "Liberal",
      name: "Justin Trudeau",
      stateOfOrigin: "Quebec",
      positionHeld: "Prime Minister of Canada",
      yearAssumedOffice: 2015,
      age: 52,
      politicalIdeology: "Progressive policies, focus on diversity and environmental issues."
  },
  {
      party: "Democratic",
      name: "Gavin Newsom",
      stateOfOrigin: "California",
      positionHeld: "Governor of California",
      yearAssumedOffice: 2019,
      age: 56,
      politicalIdeology: "Progressive policies, healthcare and climate change focus."
  },
  {
      party: "Socialist",
      name: "Alexandria Ocasio-Cortez",
      stateOfOrigin: "New York",
      positionHeld: "U.S. Representative from New York",
      yearAssumedOffice: 2019,
      age: 34,
      politicalIdeology: "Democratic socialism, green new deal advocacy."
  },
  {
      party: "Democratic",
      name: "Stacey Abrams",
      stateOfOrigin: "Georgia",
      positionHeld: "Politician and Activist",
      yearAssumedOffice: "N/A",
      age: 50,
      politicalIdeology: "Voting rights advocacy, progressive policies."
  },
  {
      party: "Republican",
      name: "Nikki Haley",
      stateOfOrigin: "South Carolina",
      positionHeld: "Former U.S. Ambassador to the United Nations",
      yearAssumedOffice: 2017,
      age: 52,
      politicalIdeology: "Conservative policies, focus on foreign relations."
  },
  {
      party: "Democratic",
      name: "Andrew Cuomo",
      stateOfOrigin: "New York",
      positionHeld: "Former Governor of New York",
      yearAssumedOffice: 2011,
      age: 66,
      politicalIdeology: "Progressive policies, focus on public health."
  },
  {
      party: "Liberal",
      name: "Jacinda Ardern",
      stateOfOrigin: "New Zealand",
      positionHeld: "Former Prime Minister of New Zealand",
      yearAssumedOffice: 2017,
      age: 44,
      politicalIdeology: "Progressive policies, focus on mental health and climate change."
  },
  {
      party: "Social Democratic",
      name: "Olaf Scholz",
      stateOfOrigin: "Germany",
      positionHeld: "Chancellor of Germany",
      yearAssumedOffice: 2021,
      age: 65,
      politicalIdeology: "Social democracy, focus on economic stability and social justice."
  }
];

export const countriesTab: Country[] = [
  { label: 'Brazil', value: 'BR', lengthData: brazilData.length },
  { label: 'United States', value: 'US', lengthData: americanData.length  },
  { label: 'South Korea', value: 'KR', lengthData: southKoreaData.length },
  { label: 'Spain', value: 'ES', lengthData: spainData.length },
];

export const textCountriesTab = {
  'BR': 'A tabela contém informações sobre cidadãos brasileiros, incluindo nome, profissão, peso, altura e status de pagamento. Esses dados ajudam a entender o perfil demográfico e profissional da população.',
  'ES': 'La tabla incluye datos sobre jugadores de fútbol españoles, destacando su número de camiseta, nombre, nacionalidad y equipo. Estos datos son útiles para analizar la trayectoria y el rendimiento de los jugadores en sus respectivos clubes.',
  'KR': '이 표에는 K-Pop 그룹의 정보가 포함되어 있으며, 그룹 이름, 멤버 수, 데뷔 연도, 장르 및 히트 송이 나열되어 있습니다. 이 데이터는 K-Pop의 인기와 그룹의 영향력을 이해하는 데 도움을 줍니다.',
  'US': 'The table provides information about American political figures, including their party affiliation, name, state of origin, position held, and political ideology. This data helps to analyze the political landscape and the diversity of leadership in the U.S.'
};
