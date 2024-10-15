import './CarDescription.css'

export const CarDescription = () => {

    const description = `
        Vehicle in pristine condition with a complete service history from the manufacturer. It is equipped with a wide range of features.\n
        At our dealership, you will find highly professional staff who offer detailed and thorough assistance throughout the process of purchasing your vehicle.\n
        We ensure that all our vehicles are in excellent condition, accompanied by their full maintenance history. Additionally, they undergo a rigorous and specialized inspection at our workshop.\n
        Advantages of purchasing a vehicle with us:\n
        - Delivery with a full inspection, paint reconditioning (if necessary), and cleaning.
        - Warranty of up to 3 years, including roadside assistance and a replacement vehicle in the event of a breakdown.
        - Trade-ins accepted.
        - Nationwide delivery, including islands (by mutual agreement).
        - Financing available for up to 120 months, with or without a down payment, quickly and without hassle.\n
        Visit our official website at www.standexample.com to see all the vehicles we have available.\n
        Our dealership is open every day, with Sunday visits by appointment.\n
        This advertisement was published through an automated system; all details must be confirmed with management.
    `;

    return (
        <div className='car-description-container my-3'>
            <p className='text-white m-0' style={{ whiteSpace: 'pre-line' }}>{description}</p>
        </div>
    );
}