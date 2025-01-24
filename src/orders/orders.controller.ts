import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {} // Inyecta el servicio OrdersService

    // Método POST para crear una orden
    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.ordersService.createOrder(createOrderDto);
    }

    // Método GET para obtener todas las órdenes
    @Get()
    async getOrders() {
        return this.ordersService.getOrders();
    }
}
