import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './entities/product.entity';



@Injectable()
export class ProductsService {

  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: Repository<Products>,

  ) { }

  async findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    return this.productsRepository.findOne(id);
  }

  async create(data: CreateProductDto): Promise<Products> {
    let products = new Products()
    products.name = data.name
    products.quantity = data.quantity
    products.active = data.active
    return this.productsRepository.save(products);
    
  }

  async remove(id: number) {
    return this.productsRepository.delete({
      id: id
    });
  }

 /* async update(id: number) {
    return this.productsRepository.update(id)
  }*/
}