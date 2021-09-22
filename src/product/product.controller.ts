import {
  Controller, Get, Param, Query, Req
} from '@nestjs/common';
import { CartService } from 'cart/cart.service';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService
  ) {}

  @Get()
  async find(@Req() req, @Query('page') page: number, @Query('limit') limit: number): Promise<Product[]> {
    return await this.productService.find(req.user.id, page, limit);
  }

  @Get('date')
  async findByDate(@Req() req, @Query('asOfDate') date: Date): Promise<Product[]> {
    return await this.productService.findFavoriteByDate(req.user.id, date);
  }

  @Get('add-to-cart/:id')
  async addToCart(@Req() req, @Param('id') id: string | number): Promise<void> {
    await this.cartService.addItem(req.user.id, id);
  }

  @Get('remove-from-cart/:id')
  async removeFromCart(@Param('id') id: string | number): Promise<void> {
    await this.cartService.removeItem(id);
  }
}