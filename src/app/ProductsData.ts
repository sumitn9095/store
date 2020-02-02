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
            },
            {
                name:"Mi plus",
                price: 19000,
                liked: false
            },
            {
                name:"Samsung S9",
                price: 79000,
                liked: false
            },
            {
                name:"iPhone 10",
                price: 88000,
                liked: false
            },
            {
                name:"iPhone 10 pro",
                price: 92000,
                liked: false
            },
            {
                name:"iPhone 11",
                price: 98000,
                liked: false
            },
            {
                name:"Oneplus 6",
                price: 38000,
                liked: false
            },
            {
                name:"Oneplus 7",
                price: 42000,
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
            },
            {
                name:"MI TV",
                price: 21500
            },
            {
                name:"Star TV",
                price: 24500
            },
            {
                name:"Slim TV",
                price: 29500
            }
        ];
        return this.products;
    }
}