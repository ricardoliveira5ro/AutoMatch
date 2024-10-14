import './CarCard.css'

export const CardCard = () => {

    const formatValueSpaces = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
        })
            .format(value)
            .replace(/,/g, ' ');
    };

    return (
        <div className="card w-100" style={{ backgroundColor: 'var(--color-background-dark-contrast)' }}>
            <div className="row g-0">
                <div className="col-md-3 card-image">
                    <img src={require('../../../../images/cars/recommendation-mercedes-E220.jpg')} className="img-fluid rounded-start" alt="Car" />
                </div>
                <div className="col-md-9">
                    <div className="car-card-body card-body d-flex flex-row justify-content-between align-items-center h-100" style={{rowGap: '20px'}}>
                        <div className='h-100'>
                            <h5 className="card-title text-white">Mercedes-Benz E 220 d AMG Line</h5>
                            <p className="card-text text-white">{formatValueSpaces(1950)} cm3 • 194 hp</p>
                            <div className='d-flex flex-row flex-wrap' style={{ columnGap: '20px', rowGap: '5px' }}>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-speedometer2" style={{ color: 'white' }}></i>
                                    <p className='text-white'>{formatValueSpaces(189998)} KM</p>
                                </div>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-fuel-pump" style={{ color: 'white' }}></i>
                                    <p className='text-white'>Diesel</p>
                                </div>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-car-front" style={{ color: 'white' }}></i>
                                    <p className='text-white'>Automatic</p>
                                </div>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-calendar-event" style={{ color: 'white' }}></i>
                                    <p className='text-white'>2019</p>
                                </div>
                            </div>
                        </div>
                        <span className='card-text fs-4' style={{ color: 'var(--color-main-orange)' }}>{formatValueSpaces(37500)} €</span>
                    </div>
                </div>
            </div>
        </div>
    );
}