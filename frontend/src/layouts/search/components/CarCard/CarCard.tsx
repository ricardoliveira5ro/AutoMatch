import './CarCard.css'

export const CardCard = () => {

    return (
        <div className="card w-100" style={{backgroundColor: 'var(--color-background-dark-contrast)'}}>
            <div className="row g-0">
                <div className="col-md-3 card-image">
                    <img src={require('../../../../images/cars/recommendation-mercedes-E220.jpg')} className="img-fluid rounded-start" alt="Car" />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title text-white">Mercedes-Benz E 220 d AMG Line</h5>
                        <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}