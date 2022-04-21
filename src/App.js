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
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
