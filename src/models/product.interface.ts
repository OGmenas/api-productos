//Product Model Interface

export interface ProductModel {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    updatedAt: Date;
    createdAt: Date;    
}
