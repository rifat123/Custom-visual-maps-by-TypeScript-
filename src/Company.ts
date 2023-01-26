import { faker } from "@faker-js/faker";
export class Company{
    CompanyName:string;
    color:string='Blue';
    catchPhrase:string;
    location:{
        lat:number;
        lng:number
    }

    constructor(){
        this.CompanyName=faker.company.companyName();
        this.catchPhrase=faker.company.catchPhrase();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }

    }
    markerContent(){
        return `<h3>Company name is ${this.CompanyName}</h3>`
    }

}