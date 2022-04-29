import { Connection } from 'typeorm';
import { Products } from './entities/product.entity';

export const productsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Products),
    inject: ['DATABASE_CONNECTION'],
  },
];