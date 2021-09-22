import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "product/product.entity";
import { Repository } from "typeorm";
import { Cart } from "./cart.entity";

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>
  ) {}

  async addItem(iD: string | number, cartId: string | number): Promise<void> {
    await this.cartRepository.save({ ...new Cart(), product: cartId, active: true });
  }

  async removeItem(id: string | number): Promise<void> {
    await this.cartRepository.update(id, { active: false });
  }
}