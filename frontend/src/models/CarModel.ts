class CarModel {
    id: number;
    make: string;
    model: string;
    condition: string;
    price: number;
    style: string;
    //date: date;
    mileage: number;
    fuelType: string;
    gearBox: string;
    color: string;
    doors: number;
    displacement: number;
    horsePower: number;
    //user: user;

    constructor (id: number, make: string, model: string, condition: string, price: number, style: string, mileage: number, 
        fuelType: string, gearBox: string, color: string, doors: number, displacement: number, horsePower: number) 
    {
        this.id = id;
        this.make = make;
        this.model = model;
        this.condition = condition;
        this.price = price;
        this.style = style;
        this.mileage = mileage;
        this.fuelType = fuelType;
        this.gearBox = gearBox;
        this.color = color;
        this.doors = doors;
        this.displacement = displacement;
        this.horsePower = horsePower;
    }
}

export default CarModel;