import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService{
    constructor(@InjectModel(Pedido.name) private pedidoModel:Model<Pedido>){}

    async find(param?):Promise<Pedido[]>{
        return this.pedidoModel.find(param).exec();
    }
    async findByID(id?):Promise<Pedido>{
        return this.pedidoModel.findById(id).exec();
    }
    async create(newPedido:Pedido):Promise<Pedido>{
        const pedidoCreado = new this.pedidoModel(newPedido);
        return pedidoCreado.save();
    }
    async updateByID(pedido_id?,query?):Promise<Pedido>{
        return this.pedidoModel.findByIdAndUpdate(pedido_id,query,{upsert:false});
    }

    async findByUsuarioID(param?):Promise<Pedido>{
        return this.pedidoModel.findOne(param).exec();

    }
}