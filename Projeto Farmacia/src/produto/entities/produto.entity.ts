import { Categoria } from './../../categoria/entities/categoria.entity';
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: 'tb_produto'})
export class Produto
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

@Column ({nullable: false})
quantidade: number

@MaxLength(100)
@IsNotEmpty()
@Column ({nullable: false, length: 100})
laboratorio: string

@IsNotEmpty()
@Column ({nullable: false, type: 'decimal', precision: 10, scale: 2, default: 0})
preco: number

@MaxLength(255)
@IsNotEmpty()
@Column ({nullable: false, length: 255})
foto: string

@ManyToOne (() => Categoria, (categoria) => categoria.produto,
{
    onDelete: 'CASCADE'
})

categoria: Categoria
}