import UserModel from "./UserModel";

class CarModel {
    id: number;
    make: string;
    model: string;
    condition: string;
    price: number;
    style: string;
    date: string;
    mileage: number;
    fuelType: string;
    gearBox: string;
    color: string;
    doors: number;
    displacement: number;
    horsePower: number;
    user: UserModel;

    constructor (id: number, make: string, model: string, condition: string, price: number, style: string, date: string, mileage: number, 
        fuelType: string, gearBox: string, color: string, doors: number, displacement: number, horsePower: number, user: UserModel) 
    {
        this.id = id;
        this.make = make;
        this.model = model;
        this.condition = condition;
        this.price = price;
        this.style = style;
        this.date = date;
        this.mileage = mileage;
        this.fuelType = fuelType;
        this.gearBox = gearBox;
        this.color = color;
        this.doors = doors;
        this.displacement = displacement;
        this.horsePower = horsePower;
        this.user = user;
    }
}

export default CarModel;