export class StoreItem {
    id:number;
    title:string;
    price:number;
    description:string;
    image:string;

    constructor(id:number,title:string,price:number,description:string,image:string){
        this.id=id;
        this.title=title;
        this.price=price;
        this.description=description;
        this.image=image;
    }
}