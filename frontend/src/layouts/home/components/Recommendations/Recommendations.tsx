import './Recommendations.css';

export const Recommendations = () => {

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
        })
        .format(price)
        .replace(/,/g, ' ');
    };

    return (
        <div className='container'>
            <div className='card p-4 recommendations-container'>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <h2 className='text-white'>Recommendations</h2>
                    <a href="#">
                        <i className="bi bi-info-circle me-2" style={{color: 'var(--color-main-orange)'}}></i>
                        <span className='text-white'>View all</span>
                    </a>
                </div>
                <div className='d-flex flex-row justify-content-center mt-4' style={{columnGap: '30px'}}>
                    <div className="card card-recommendation">
                        <img src={require('../../../../images/cars/recommendation-mercedes-E220.jpg')} className="card-img-top img-fluid" alt="Car Image"/>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title text-white">Mercedes-Benz E 220 d AMG Line</h5>
                                    <p className="card-text text-white">2019 • {formatPrice(189998)} km • Diesel • 194 hp</p>
                                </div>
                                <span className='card-price'>{formatPrice(37500)} <span>EUR</span></span>
                            </div>
                    </div>
                    <div className="card card-recommendation">
                        <img src={require('../../../../images/cars/recommendation-porsche-taycan-4S.jpg')} className="card-img-top img-fluid" alt="Car Image"/>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title text-white">Porsche Taycan 4S</h5>
                                    <p className="card-text text-white">2020 • {formatPrice(49000)} km • Electric • 530 hp</p>
                                </div>
                                <span className='card-price'>{formatPrice(73950)} <span>EUR</span></span>
                            </div>
                    </div>
                    <div className="card card-recommendation">
                        <img src={require('../../../../images/cars/recommendation-audi-rs4.jpg')} className="card-img-top img-fluid" alt="Car Image"/>
                            <div className="card-body d-flex flex-column justify-content-between" style={{rowGap: '20px'}}>
                                <div>
                                    <h5 className="card-title text-white">Audi RS4 Avant 2.9 TSI quattro Tiptronic</h5>
                                    <p className="card-text text-white">2018 • {formatPrice(113076)} km • Gasoline • 450 hp</p>
                                </div>
                                <span className='card-price'>{formatPrice(85000)} <span>EUR</span></span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}