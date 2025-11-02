import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermitsModule } from './permits/permits.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'ecommerce_user',
            password: 'password123', // Replace with your actual PostgreSQL password
            database: 'applications',
            autoLoadEntities: true,
            synchronize: true, // Note: Set to false in production
        }),
        PermitsModule,
    ],
})
export class AppModule { }