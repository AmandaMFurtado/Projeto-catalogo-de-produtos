import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('categoria')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('listar')
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(+id);
  }

  @Post('cadastrar')
  async create(@Body() data: CreateCategoryDto) {
    return this.categoryService.create(data)
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: CreateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
