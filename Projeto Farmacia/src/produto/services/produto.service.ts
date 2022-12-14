import { Produto } from '../entities/produto.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class ProdutoService
{
    constructor
    (
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ){}

    async findAll (): Promise<Produto[]>
    {
        return this.produtoRepository.find
        ({
            relations:
            {
                categoria: true
            }
        })
    }

    async findById (id: number): Promise <Produto>
    {
        let produto = await this.produtoRepository.findOne
        ({
            where: 
            {
                id
            },

            relations:
            {
                categoria: true
            }

        })

        if (!produto)
        throw new HttpException ('Produto Inexistente !!', HttpStatus.NOT_FOUND)
        return produto 
    }

    async findByNome (nome: string): Promise<Produto[]>
    {
        return this.produtoRepository.find
        ({
            where: 
            {
                nome: ILike (`%${nome}%`)
            },

            relations:
            {
                categoria: true
            }
                
        })
    }

    async create (produto: Produto): Promise<Produto>
    {
        return this.produtoRepository.save(produto)   
    }

    async update (produto: Produto): Promise<Produto>
    {
        let produtoUpdate = await this.findById (produto.id)
        
        if (!produto.id)
        throw new HttpException ('ATENÇÃO!! Necessario informar o id!', HttpStatus.NOT_FOUND)
        return this.produtoRepository.save(produto)
    }

    async delete (id: number): Promise<DeleteResult>
    {
        let produtoDelete = await this.findById (id)
        
        if (!produtoDelete)
        throw new HttpException ('Id Invalido!! produto inexistente!!', HttpStatus.NOT_FOUND)
        return this.produtoRepository.delete(id)
    }
}