import './Recommendations.css';

export const Recommendations = () => {

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
                <div className='row'>

                </div>
            </div>
        </div>
    );
}