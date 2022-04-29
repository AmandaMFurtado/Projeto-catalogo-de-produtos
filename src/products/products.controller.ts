import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from './entities/product.entity';


@Controller('produtos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('listar')
  async findAll(): Promise<Products[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(+id);
  }

  @Post('cadastrar')
  async create(@Body() data: CreateProductDto) {
    return this.productsService.create(data)
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: CreateProductDto) {
    return this.productsService.update(+id)
   }*/

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
