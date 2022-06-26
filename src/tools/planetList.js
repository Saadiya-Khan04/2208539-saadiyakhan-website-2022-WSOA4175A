import {Link} from 'react-router-dom';
import sun from '../assets/Images/Sun.png';
import mercury from '../assets/Images/Mercury.png';
import venus from '../assets/Images/Venus.png';
import earth from '../assets/Images/Earth.png';
import mars from '../assets/Images/Mars.png'
import jupiter from '../assets/Images/Jupiter.png'
import saturn from '../assets/Images/Saturn.png';
import uranus from '../assets/Images/Uranus.png';
import neptune from '../assets/Images/Neptune.png';


export const planetList = [
    {
        name: "The Sun",
        image: sun,
        link: <Link to='/Sun'>The Sun</Link>
    },

    {
        name: "Mercury",
        image: mercury,
        link: <Link to='/Mercury'>Mercury</Link>
    },

    {
        name: "Venus",
        image: venus,
        link: <Link to='/Venus'>Venus</Link>
    },

    {
        name: "Earth",
        image: earth,
        link: <Link to='/Earth'>Earth</Link>
    },

    {
        name: "Mars",
        image: mars,
        link: <Link to='/Mars'>Mars</Link>
    },

    {
        name: "Jupiter",
        image: jupiter,
        link: <Link to='/Jupiter'>Jupiter</Link>
    },

    {
        name: "Saturn",
        image: saturn,
        link: <Link to='/Saturn'>Saturn</Link>
    },

    {
        name: "Uranus",
        image: uranus,
        link: <Link to='/Uranus'>Uranus</Link>
    },

    {
        name: "Neptune",
        image: neptune,
        link: <Link to='/Neptune'>Neptune</Link>
    }
]
