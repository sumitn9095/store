export class ProductsData {
    public products: any[];
    constructor(){}

    getMobiles(){
        this.products = [
            {
                name:"Redmi",
                price: 12000,
                liked: false
            },
            {
                name:"Huawei Honor",
                price: 15000,
                liked: false
            },
            {
                name:"samsung galaxy",
                price: 22000,
                liked: false
            },
            {
                name:"LG plus",
                price: 8000,
                liked: false
            }
        ];
        return this.products;
    }

    getTv(){
        this.products = [
            {
                name:"Samsung TV",
                price: 14500
            },
            {
                name:"LG TV",
                price: 17500
            }
        ];
        return this.products;
    }
}