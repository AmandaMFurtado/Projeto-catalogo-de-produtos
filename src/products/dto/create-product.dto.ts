import { Category } from "src/category/entities/category.entity";

export class CreateProductDto {
    name: string;
    quantity: number;
    active: number;
    category_id: Category[]
}
