import CSGOImage from '../../../assets/images/csgo-banner.jpg';
import LOLImage from '../../../assets/images/lol-banner.jpg';
import ApexImage from '../../../assets/images/apex-banner.jpg';
import RLImage from '../../../assets/images/rl-banner.jpg';
import TF2Image from '../../../assets/images/tf2-banner.jpg';

const GameListData = [
  {
    id: '1',
    state: 'finished',
    title: 'Counter-Strike: Global Offensive',
    mode: 'Gun Game',
    startsAt: 'Friday 19:00',
    url: CSGOImage,
    players: [
      {
        playerId: 1,
        playerName: 'Amazing Derek',
      },
      {
        playerId: 2,
        playerName: 'Amazing Brian',
      },
      {
        playerId: 3,
        playerName: 'Amazing John',
      },
      {
        playerId: 4,
        playerName: 'Amazing Antony',
      },
      {
        playerId: 5,
        playerName: 'Amazing Tom',
      },
      {
        playerId: 6,
        playerName: 'Amazing Ron',
      },
      {
        playerId: 7,
        playerName: 'Amazing Stom',
      },
      {
        playerId: 8,
        playerName: 'Amazing Gamer',
      },
      {
        playerId: 9,
        playerName: 'Amazing Mahom',
      },
      {
        playerId: 10,
        playerName: 'Amazing Brian',
      },
      {
        playerId: 11,
        playerName: 'Amazing Ruan',
      },
      {
        playerId: 12,
        playerName: 'Amazing IKAjsdfopias',
      },
    ],
    teams: [
      {
        teamId: 1,
        teamName: 'Amazing Team',
      },
      {
        teamId: 2,
        teamName: 'Team Something',
      },
      {
        teamId: 3,
        teamName: 'Amazing Shooters',
      },
      {
        teamId: 4,
        teamName: 'I hold the gun with my feet',
      },
    ],
  },
  {
    id: '2',
    state: 'inProgress',
    title: 'League of Legends',
    mode: '1 vs 1',
    startsAt: 'Friday 21:00',
    url: LOLImage,
    players: [
      {
        playerId: 1,
        playerName: 'Amazing Derek',
      },
      {
        playerId: 2,
        playerName: 'Amazing Brian',
      },
      {
        playerId: 3,
        playerName: 'Amazing John',
      },
    ],
    teams: [
      {
        teamId: 1,
        teamName: 'Amazing Team',
      },
      {
        teamId: 2,
        teamName: 'Team Something',
      },
    ],
  },
  {
    id: '3',
    title: 'Apex Legends',
    state: 'upNext',
    mode: 'trios',
    startsAt: 'Saturday 14:00',
    url: ApexImage,
    players: [
      {
        playerId: 1,
        playerName: 'Amazing Derek',
      },
      {
        playerId: 2,
        playerName: 'Amazing Brian',
      },
      {
        playerId: 3,
        playerName: 'Amazing John',
      },
      {
        playerId: 4,
        playerName: 'Amazing Antony',
      },
      {
        playerId: 5,
        playerName: 'Amazing Tom',
      },
      {
        playerId: 6,
        playerName: 'Amazing Ron',
      },
      {
        playerId: 7,
        playerName: 'Amazing Bob',
      },
      {
        playerId: 8,
        playerName: 'Amazing Robson',
      },
    ],
    teams: [
      {
        teamId: 1,
        teamName: 'Amazing Team',
      },
      {
        teamId: 2,
        teamName: 'Team Something',
      },
      {
        teamId: 3,
        teamName: 'Amazing Shooters',
      },
      {
        teamId: 4,
        teamName: 'I hold the gun with my feet',
      },
    ],
  },
  {
    id: '4',
    state: 'inQueue',
    title: 'Rocket League',
    mode: '2 vs 2',
    startsAt: 'Saturday 14:00',
    url: RLImage,
    players: [
      {
        playerId: 1,
        playerName: 'Amazing Derek',
      },
      {
        playerId: 2,
        playerName: 'Amazing Brian',
      },
      {
        playerId: 3,
        playerName: 'Amazing John',
      },
      {
        playerId: 4,
        playerName: 'Amazing Antony',
      },
    ],
    teams: [
      {
        teamId: 1,
        teamName: 'Amazing Team',
      },
      {
        teamId: 2,
        teamName: 'Team Something',
      },
      {
        teamId: 3,
        teamName: 'Amazing Shooters',
      },
      {
        teamId: 4,
        teamName: 'I hold the gun with my feet',
      },
    ],
  },
  {
    id: '5',
    state: 'inQueue',
    title: 'Team Fortress 2',
    mode: 'Payload Race',
    startsAt: 'Saturday 14:00',
    url: TF2Image,
    players: [
      {
        playerId: 1,
        playerName: 'Amazing Derek',
      },
      {
        playerId: 2,
        playerName: 'Amazing Brian',
      },
      {
        playerId: 3,
        playerName: 'Amazing John',
      },
      {
        playerId: 4,
        playerName: 'Amazing Antony',
      },
      {
        playerId: 5,
        playerName: 'Amazing Tom',
      },
      {
        playerId: 6,
        playerName: 'Amazing Sam',
      },
    ],
    teams: [
      {
        teamId: 1,
        teamName: 'Amazing Team',
      },
      {
        teamId: 2,
        teamName: 'Team Something',
      },
      {
        teamId: 3,
        teamName: 'Amazing Shooters',
      },
    ],
  },
];

export default GameListData;
