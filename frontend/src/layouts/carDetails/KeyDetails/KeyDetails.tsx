import './KeyDetails.css'

export const KeyDetails = () => {

    const formatValueSpaces = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
        })
            .format(value)
            .replace(/,/g, ' ');
    };

    return (
        <div className='col-5 px-4'>
            <div className='car-key-details-container d-flex flex-column justify-content-between p-3' style={{ height: '55vh' }}>
                <div>
                    <span className='fs-5'>Mercedes-Benz E 220 d AMG Line</span>
                    <p className='fs-6'>Class E 220</p>
                    <span className='fs-4' style={{ color: 'var(--color-main-orange)' }}>{formatValueSpaces(37500)} €</span>
                    <hr className='text-white'></hr>
                    <span>Ricardo Oliveira</span>
                    <p>Lisbon</p>
                </div>
                <div>
                    <div className='d-flex flex-row mb-4'>
                        <i className="bi bi-telephone-fill me-2" style={{ color: 'var(--color-main-orange)' }}></i>
                        <span>918171610</span>
                    </div>
                    <button className='btn btn-primary mb-2 w-100'>
                        <i className="bi bi-envelope me-2"></i>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}