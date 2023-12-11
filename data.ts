// export const character = {
//   id: 1,
//   name: "Rick Sanchez",
//   status: "Dead",
//   species: "Human",
//   type: "",
//   gender: "Male",
//   origin: {
//     name: "Earth (C-137)",
//     url: "https://rickandmortyapi.com/api/location/1",
//   },
//   location: {
//     name: "Citadel of Ricks",
//     url: "https://rickandmortyapi.com/api/location/3",
//   },
//   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//   created: "2017-11-04T18:48:46.250Z",
// };
// export const allCharacters = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Dead",
//     species: "Human",
//     type: "",
//     gender: "Male",
//     origin: {
//       name: "Earth (C-137)",
//       url: "https://rickandmortyapi.com/api/location/1",
//     },
//     location: {
//       name: "Citadel of Ricks",
//       url: "https://rickandmortyapi.com/api/location/3",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     created: "2017-11-04T18:48:46.250Z",
//   },
//   {
//     id: 2,
//     name: "Summer Smith",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Female",
//     origin: {
//       name: "Earth (Replacement Dimension)",
//       url: "https://rickandmortyapi.com/api/location/20",
//     },
//     location: {
//       name: "Earth (Replacement Dimension)",
//       url: "https://rickandmortyapi.com/api/location/20",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
//     created: "2017-11-04T19:09:56.428Z",
//   },
// ];

export const episodes = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
  {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z",
  },
];

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: any[];
  url: string;
  created: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  episode: string[];
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  created: string;
};

export type EpisedeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
