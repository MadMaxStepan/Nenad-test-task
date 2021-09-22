import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "cart/cart.entity";
import { Product } from "./product.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Cart])
  ],
  providers: [ProductService],
  exports: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}