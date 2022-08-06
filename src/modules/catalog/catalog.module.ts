import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductServices } from './product-service/product/product.service';
import { ProductEntity } from './entity/product-entity';
import { ProductController } from './product-controller/product/product.controller';

@Module({
    imports:[
            TypeOrmModule.forFeature([ProductEntity])
    ],
    controllers:[
                ProductController
    ],
    providers:[
                ProductServices
    ]
})
export class CatalogModule {}
