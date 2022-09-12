import { IsNotEmpty, Length } from "class-validator";
import { Tarefa } from "src/tarefa/entities/tarefa.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ('tb_categoria')
export class Categoria
{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Length(500)
    @Column({nullable: false, length: 500})
    descricao: string

    @OneToMany(() => Tarefa, (tarefa) => tarefa.categoria)
    tarefas: Tarefa[]
}