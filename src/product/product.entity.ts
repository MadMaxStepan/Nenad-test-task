import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "common/entity/base.entity";
import { User } from "user/user.entity";
import { Cart } from "cart/cart.entity";

@Entity()
export class Product extends BaseEntity {
  @Column({ nullable: false, unique: true, type: 'varchar' })
  title: string

  @ManyToOne(type => User, user => user.assignedProduct)
  assignedUser: User;

  @ManyToOne(type => Cart, cart => cart.product)
  cart: Cart
}