import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { productsProviders } from './products.providers';
import { DatabaseModule } from 'src/database/database.module';

  @Module({
    imports: [TypeOrmModule.forFeature(), DatabaseModule],
    controllers:[ProductsController],
    providers: [
      ...productsProviders,
      ProductsService,
    ],
   
  })
export class ProductsModule {}
