import { BaseEntity } from "common/entity/base.entity";
import { Product } from "product/product.entity";
import { Entity, OneToMany, Column } from "typeorm";

@Entity()
export class Cart extends BaseEntity {
  @OneToMany(type => Product, product => product.cart)
  product: Product[]

  @Column()
  active: boolean
}