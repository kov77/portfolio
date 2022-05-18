import './App.css';
import {Header} from "./components/Header/Header";
import {MainSection} from "./components/MainSection/MainSection";
import {About} from "./components/About/About";
import {Technologies} from "./components/Technologies/Technologies";
import {MySkills} from "./components/MySkills/MySkills";
import {Resume} from "./components/Resume/Resume";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Contact} from "./components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <About/>
            <Technologies />
            <MySkills />
            <Resume />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
