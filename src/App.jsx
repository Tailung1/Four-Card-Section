import './index.css'
import Header from "./components/header/header";
import Supervisor from "./components/supervisor";
import TeamBuilder from './components/teamBuilder';
import Karma from './components/karma';
import Calculator from './components/calculator';

function App() {
    return <>
    <Header />
    <main>
    <Supervisor />
    <div className='boxes'>
        <TeamBuilder />
        <Karma />
    </div>
    <Calculator />
    </main>
    </>
}

export default App;

