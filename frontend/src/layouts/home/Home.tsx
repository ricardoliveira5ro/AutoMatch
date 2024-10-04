import './Home.css';
import { NavBar } from "./components/NavBar/NavBar";

export const Home = () => {

    return (
        <>
            <NavBar/>
            <div className="background-wrapper position-relative">
                <div className="background"></div>
                <div className="container card-container position-absolute start-50 translate-middle">
                    <div className="card shadow p-4">
                        <div className='row'>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span>Make</span>
                                <select className="form-select form-select-sm make-select shadow-none border text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}