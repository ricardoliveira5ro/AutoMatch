import './Home.css';
import { Banner } from './components/Banner/Banner';
import { NavBar } from "./components/NavBar/NavBar";
import { Recommendations } from './components/Recommendations/Recommendations';

export const Home = () => {

    return (
        <div style={{backgroundColor: 'var(--color-background-dark)'}}>
            <NavBar/>
            <Banner/>
            <Recommendations/>
        </div>
    );
}