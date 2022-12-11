import "./App.css";
import "./swipper.css";
import "./player.css";
import Navbar from "./components/Navbar";
import Newsslides from "./components/Newsslides";
import Partner from "./components/Partner";
import JournalSection from "./components/JournalSection";
import Program from "./components/program";
import Players from "./components/players";
import More from "./components/more";
import Uefa from "./components/uefa";
import Title from "./components/titlesandthropies";
import Socialmedia from "./components/socialmedia";
import Footer from "./components/footer";
import Firstteam from "./pages/Firstteam";
import Club from "./pages/club";
import Gsstore from "./pages/GsStore";
import GStv from "./pages/GSTV";
import NefStadium from "./pages/Nefstadium";
import Branches from "./pages/branches";
import Notfound from "./pages/notfound"
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <div className="App bg-gs-red ">
 
        <Navbar />
        <Routes>
      

        <Route path="/" element={
          
          <>
          App
          <Newsslides />
        <Partner />
        <JournalSection />
        <Program />
        <Players />
        <More />
        <Uefa/>
        <Title/>
        <Socialmedia/>
          </>
        
        
        
        }/>
        <Route path="/firstteam" element={
          <Firstteam/>

        }/>
        <Route path="*" element={
          <Notfound/>
        }/>
            <Route path="/branches" element={
          <Branches/>
        }/>    <Route path="/gsstore" element={
          <Gsstore/>
        }/>
            <Route path="/gstv" element={
          <GStv/>
        }/>
            <Route path="/club" element={
          <Club/>
        }/>
            <Route path="/neftstadium" element={
          <NefStadium/>
        }/>

        </Routes>
        
  

        {/* <Newsslides />
        <Partner />
        <JournalSection />
        <Program />
        <Players />
        <More />
        <Uefa/>
        <Title/>
        <Socialmedia/> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
