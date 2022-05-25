import './App.css';
import {Header} from "./components/Header/Header";
import {MainSection} from "./components/MainSection/MainSection";
import {About} from "./components/About/About";
import {Technologies} from "./components/Technologies/Technologies";
import {MySkills} from "./components/MySkills/MySkills";
import {Resume} from "./components/Resume/Resume";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Contact} from "./components/Contact/Contact";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <MainSection/>
                <About/>
                <Technologies />
                <MySkills />
                <Resume />
                <Portfolio />
                <Contact />
            </BrowserRouter>
        </div>
    );
}

export default App;
