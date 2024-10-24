import UserModel from "./UserModel";

class CarModel {
    id: number;
    title?: string;
    description?: string;
    make?: string;
    model?: string;
    condition?: string;
    price?: number;
    style?: string;
    date?: string;
    mileage?: number;
    fuelType?: string;
    gearBox?: string;
    color?: string;
    doors?: number;
    displacement?: number;
    horsePower?: number;
    user?: UserModel;
    imgCover?: string;
    images?: string[]

    constructor (id: number, title: string, description: string, make: string, model: string, condition: string, 
        price: number, style: string, date: string, mileage: number, fuelType: string, gearBox: string, color: string, 
        doors: number, displacement: number, horsePower: number, user: UserModel, imgCover: string, images: string[]) 
    {
        this.id = id;
        this.title = title;
        this.description = description;
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
        this.imgCover = imgCover;
        this.images = images;
    }
}

export default CarModel;