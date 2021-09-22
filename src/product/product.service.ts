import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "cart/cart.entity";
import { Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>
  ) {}

  async find(id: string | number, page: number, limit: number): Promise<Product[]> {
    return await this.productRepository
      .createQueryBuilder('product')
      .where({ assignedUser: id })
      .orderBy('name', 'ASC')
      .limit(limit)
      .offset((page - 1) * limit)
      .getMany()
  }

  async findFavoriteByDate(id: string | number, date: Date): Promise<Product[]> {
    return await this.cartRepository
      .createQueryBuilder('cart')
      .groupBy('cart.product')
      .select('COUNT(*)', 'count')
      .where(`cart.date >= ${date} AND cart.date <= NOW()`)
      .orderBy('count')
      .limit(10)
      .getMany()
  }
}