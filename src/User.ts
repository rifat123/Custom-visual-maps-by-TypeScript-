import { faker } from "@faker-js/faker";

export class User{
    name:string;
    color:string='Blue';
    location:{
        lat:number;
        lng:number
    }

    constructor(){
        this.name=faker.name.firstName();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }

    }

    markerContent(){
        return ` <h3>User name is ${this.name} </h3>`
    }

   

}


