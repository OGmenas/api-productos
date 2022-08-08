import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogModule } from './modules/catalog/catalog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './modules/catalog/entity/product-entity';

@Module({
  imports: [CatalogModule,
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'us-cdbr-east-06.cleardb.net',
              port: 3306,
              username: 'ba5d62766be0d4',
              password: 'f66e0385',
              database: 'heroku_ff50bc2f7e0f5f1',
              entities: [ProductEntity],
              synchronize: true,
            })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
