import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
// import Button from './Components/Button/Button';
// import Text from './Components/Texts/Text';
import Home from './Pages/Home/Home';
import Skill from './Pages/Skills/Skill';
import Contact from './Pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Skill/> */}
      {/* <About /> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Skill' element={<Skill/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
