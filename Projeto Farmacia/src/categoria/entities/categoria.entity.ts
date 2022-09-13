import { Produto } from './../../produto/entities/produto.entity';
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: 'tb_categoria'})
export class Categoria
{
@PrimaryGeneratedColumn()
id: number

@MaxLength(100)
@IsNotEmpty()
@Column ({nullable: false, length: 100})
nome: string

@MaxLength(600)
@IsNotEmpty()
@Column ({nullable: false, length: 600})
descricao: string

@OneToMany (() => Produto, (produto) => produto.categoria)
produto: Produto []
}