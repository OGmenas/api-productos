import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from  'typeorm';
import { ProductEntity } from  '../../entity/product-entity';


@Injectable()
export class ProductServices { 

	constructor( 
		@InjectRepository(ProductEntity) 
		private readonly  productRP:Repository<ProductEntity>){

	}
	async saveProduct(product:any){
			await this.productRP.insert(product);
			return product
	}

	async updateProduct(id:number,product:any){
		await this.productRP.update(id,product);
	}

	async findAll(){
		return await this.productRP.find();
	}
	
	async findOnProduct( id:number){
		return  await this.productRP.findOneBy({id:id});
	}
	
	async deleteProduct(id:number){
		return  await this.productRP.delete(id);
	}
}
