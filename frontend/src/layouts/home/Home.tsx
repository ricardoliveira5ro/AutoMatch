import './Home.css';
import { Banner } from './components/Banner/Banner';
import { NavBar } from "./components/NavBar/NavBar";

export const Home = () => {

    return (
        <>
            <NavBar/>
            <Banner/>
        </>
    );
}