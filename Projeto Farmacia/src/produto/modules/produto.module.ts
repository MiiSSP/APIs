import { ProdutoController } from './../controller/produto.controller';
import { ProdutoService } from './../services/produto.service';
import { Produto } from './../entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule {}