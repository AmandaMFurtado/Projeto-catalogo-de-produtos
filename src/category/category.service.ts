import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
    
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: number){
    return this.categoryRepository.findOne(id);
  }

  async create( data: CreateCategoryDto):Promise<Category>{
    let category = new Category()
    category.name = data.name
    category.active = data.active
    return this.categoryRepository.save(category) 
  }

  async remove(id: number) {
    return this.categoryRepository.delete({
      id: id
    });
  
  }

  async update(id: number, updateCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.update(id,updateCategoryDto);
  }
}