import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        await this.$connect(); // Conecta a la base de datos
    }

    async onModuleDestroy() {
        await this.$disconnect(); // Desconecta de la base de datos
    }

}
