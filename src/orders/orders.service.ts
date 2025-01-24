import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrdersService {
    constructor(private readonly prismaService: PrismaService) {} // Inyecta el servicio PrismaService

    // Método para crear una orden 
    async createOrder(createOrderDto: CreateOrderDto) {
        const { packages, ...orderData } = createOrderDto; // Extrae los datos de la orden y los paquetes

        // Crea la orden en la base de datos
        return this.prismaService.order.create({
            data: {
                ...orderData,
                packages: {
                    create: packages, // Crea los paquetes asociados a la orden
                },
            },
        });
    }

    // Método para obtener todas las órdenes
    async getOrders() {
        return this.prismaService.order.findMany({
            include: {
                packages: true,
            },
        });
    }
}
