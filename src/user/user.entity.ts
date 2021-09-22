import { Product } from 'product/product.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/entity/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 255, nullable: true, name: 'name', unique: true })
  name: string;

  @OneToMany(type => Product, product => product.assignedUser)
  assignedProduct: Product[]
}
