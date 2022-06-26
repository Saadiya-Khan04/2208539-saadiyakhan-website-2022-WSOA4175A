import BlogOne from "../assets/Images/galaxy.jpg";
import BlogTwo from "../assets/Images/galaxy2.jpg";
import BlogThree from "../assets/Images/stars.jpg";
import BlogFour from "../assets/Images/nebula.jpg";
import BlogFive from "../assets/Images/nebula2.jpg";
import BlogSix from '../assets/Images/nebula3.jpg';
import BlogSeven from '../assets/Images/nebula4.jpg';
import BlogEight from '../assets/Images/bnebula.jpg';
import BlogNine from '../assets/Images/nebula5.jpg';
import BlogTen from '../assets/Images/cloud.jpg';
import {Link} from 'react-router-dom';

export const blogList = [
    {
        name: "Blog 1: Rhizome Artbase",
        image: BlogOne, 
        link: <Link to='/Netart'> NetArt ^</Link>
    },

    {
        name: "Blog 2: Design and Aesthetics",
        image: BlogTwo, 
        link: <Link to='/DesignAesth'> Design/Aesthetics ^ </Link>
    },

    {
        name: "Blog 3: Internet, Society and Design Justice",
        image: BlogThree, 
        link: <Link to='/DesignJustice'> Design Justice ^ </Link>
    },

    {
        name: "Blog 4: Reflection 1",
        image: BlogFour, 
        link: <Link to='/Reflection'> Reflection ^ </Link>
    },

    {
        name: "Blog 5: Internet Artwork Prep",
        image: BlogFive, 
        link: <Link to='/NetArtPrep'> NetArt Prep ^ </Link>
    },
   
    {
        name: "Blog 6: Internet Art Prototype",
        image: BlogSix, 
        link: <Link to='/NetArtPro'> NetArt Prototype ^ </Link>
    },

    {
        name: "Blog 7: Reflection 2",
        image: BlogSeven, 
        link: <Link to='/Reflection2'> Reflection 2 ^ </Link>
    },
    
    {
        name: "Blog 8: Design Reflection - Exam",
        image: BlogEight, 
        link: <Link to='/DesignRef'> Design Reflection ^ </Link>
    },

    {
        name: "Blog 9: Technical Reflection - Exam",
        image: BlogNine, 
        link: <Link to='/TechRef'> Technical Reflection ^ </Link>
    },

    {
        name: "Blog 10: Final NetArt Rationale - Exam",
        image: BlogTen, 
        link: <Link to='/FRef'> Final Reflection ^ </Link>
    }
]
