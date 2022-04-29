import { Products } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('tinyint')
  active: number;

  @OneToMany((type) => Products, products => products.category_)
  category_id: Products[];

}