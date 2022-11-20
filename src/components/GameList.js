import CSGOImage from '../images/csgo-banner.jpg';
import LOLImage from '../images/lol-banner.jpg';
import ApexImage from '../images/apex-banner.jpg';
import RLImage from '../images/rl-banner.jpg';
import TF2Image from '../images/tf2-banner.jpg';

const GameListData = [
    {
        "id":"1",
        "title":"Counter-Strike: Global Offensive",
        "mode":"Gun Game",
        "startsAt":"Friday 19:00",
        "url":CSGOImage,
        "players":"20"
    },
    {
        "id":"2",
        "title":"League of Legends",
        "mode":"1 vs 1",
        "startsAt":"Friday 21:00",
        "url":LOLImage,
        "players":"7"
    },
    {
        "id":"3",
        "title":"Apex Legends",
        "mode":"trios",
        "startsAt":"Saturday 14:00",
        "url":ApexImage,
        "players":"17"
    },
    {
        "id":"4",
        "title":"Rocket League",
        "mode":"2 vs 2",
        "startsAt":"Saturday 14:00",
        "url":RLImage,
        "players":"11"
    },
    {
        "id":"5",
        "title":"Team Fortress 2",
        "mode":"Payload Race",
        "startsAt":"Saturday 14:00",
        "url":TF2Image,
        "players":"18"
    },
]

export default GameListData;