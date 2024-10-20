export const SpinnerLoading = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <div className='spinner-border text-primary' role='status'>
                <span className='visually-hidden'>
                    Loading...
                </span>
            </div>
        </div>
    );
}