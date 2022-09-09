import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Tarefa } from "../entities/tarefa.entity";
import { TarefaService } from "../service/tarefa.service";

@Controller('/tarefa')
export class TarefaController
{
    constructor(private readonly service: TarefaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tarefa[]>
    {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id: number): Promise<Tarefa>
    {
        return this.service.findById(id)
    }
}