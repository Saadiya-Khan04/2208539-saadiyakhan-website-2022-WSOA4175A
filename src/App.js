import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'; 
import Home from './pages/Home'; 
import Blogs from './pages/Blogs';
import Netart from './pages/NetArt';
import Footer from './components/Footer';
import DesignAesth from './pages/DesignAesth';
import About from './pages/About';
import DesignJustice from './pages/DesignJustice';
import Reflection from './pages/Reflection';
import SpaceArt from './pages/SpaceArt'; 
import Sun from './planetInfo/sun'; 
import Mercury from './planetInfo/mercury'; 
import Venus from './planetInfo/venus';
import Earth from './planetInfo/earth';
import Mars from './planetInfo/mars'; 
import Jupiter from './planetInfo/jupiter'; 
import Saturn from './planetInfo/saturn'; 
import Uranus from './planetInfo/uranus'; 
import Neptune from './planetInfo/neptune';
import NetArtPrep from './pages/netArtPrep';
import NetArtPro from './pages/netArtPro';
import Reflection2 from './pages/Reflection2';
import DesRef from './pages/DesRef';
import TechRef from './pages/TechRef';
import FinalRef from './pages/FinalRef';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/Netart' element={<Netart/>}/>
        <Route path='/DesignAesth' element={<DesignAesth/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/DesignJustice' element={<DesignJustice/>}/>
        <Route path='/Reflection' element={<Reflection/>}/>
        <Route path= '/SpaceArt' element={<SpaceArt/>}/>
        <Route path='/Sun' element={<Sun/>}/>
        <Route path='/Mercury' element={<Mercury/>}/>
        <Route path='/Venus' element={<Venus/>}/>
        <Route path='/Earth' element={<Earth/>}/>
        <Route path='/Mars' element={<Mars/>}/>
        <Route path='/Jupiter' element={<Jupiter/>}/>
        <Route path='/Saturn' element={<Saturn/>}/>
        <Route path='/Uranus' element={<Uranus/>}/>
        <Route path='/Neptune' element={<Neptune/>}/>
        <Route path='/NetArtPrep' element={<NetArtPrep/>}/>
        <Route path='/NetArtPro' element={<NetArtPro/>}/>
        <Route path='/Reflection2' element={<Reflection2/>}/>
        <Route path='/DesignRef' element={<DesRef/>}/>
        <Route path='/TechRef' element={<TechRef/>}/>
        <Route path='/FRef' element={<FinalRef/>}/>
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
