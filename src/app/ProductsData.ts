export class ProductsData {
    public products: any[];
    constructor(){}

    getMobiles(){
        this.products = [
            {
                name:"Redmi",
                price: 12000
            },
            {
                name:"Huawei Honor",
                price: 15000
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