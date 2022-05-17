import './App.css';
import {Header} from "./components/Header/Header";
import {MainSection} from "./components/MainSection/MainSection";
import {About} from "./components/About/About";
import {Technologies} from "./components/Technologies/Technologies";
import {MySkills} from "./components/MySkills/MySkills";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainSection/>
            <About/>
            <Technologies />
            <MySkills />
        </div>
    );
}

export default App;
