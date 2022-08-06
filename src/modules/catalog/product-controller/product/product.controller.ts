import {Controller,Get,Post,Put, Delete, Param,Body} from '@nestjs/common';
import { ProductServices } from '../../product-service/product/product.service'; 
import { ProductModel } from '../../../../models/product.interface';

@Controller('productos')
export class ProductController {

	constructor(private  productServices:ProductServices){
	}

	@Post()
	addProdut(@Body() producModel:ProductModel):any{

		return this.productServices.saveProduct(producModel); 
	}

	@Get()
	getProduct():any{
	
		return  this.productServices.findAll();
	}

	@Get(':id')
	getOneProduct(@Param() params):any{
		return this.productServices.findOnProduct(params.id);
	}

	@Put(':id')
	updateProduct(@Body() producModel:ProductModel,@Param() params):any{
		return   this.productServices.updateProduct(params.id,producModel);
	}

	@Delete(':id')
	deleteProducto( @Param() params):any{
		return  this.productServices.deleteProduct(params.id);
	}
}

