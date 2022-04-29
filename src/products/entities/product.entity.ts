import { Category } from 'src/category/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('int')
  quantity: number;

  @Column('tinyint')
  active: number;

  @ManyToOne((type) => Category, category => category.category_id)
  category_: Category[]
}