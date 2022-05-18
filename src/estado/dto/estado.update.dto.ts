import { IsNumber, IsNotEmpty, IsString, IsEmpty, IsEmail} from "class-validator";
import { Ticket } from "src/ticket/ticket.entity";
import { Usuario } from "src/usuario/usuario.entity";
import { Comentario } from "../comentario.entity";


export class EstadoUpdateDto{
    @IsNotEmpty()
    @IsString()
    e_detalle:string;

    @IsString()
    e_nombre:string;

    @IsNumber()
    e_secuencial:number;

    @IsNotEmpty()
    e_comentarios:Comentario[]

    @IsNotEmpty()
    id_ticket:Ticket;

    @IsNotEmpty()
    tecnico_id:Usuario

}