import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Transfer extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  cuentaOrigen: string; 

  @Prop({ required: true })
  cuentaDestino: string;
  @Prop({ required: true })
  monto: number;

  @Prop({ required: true, type: Date })
  fecha: Date; 

  @Prop({ required: true })
  estado: string;

  @Prop()
  observaciones?: string;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);

TransferSchema.index(
  { BankId: 1 },
  {
    name: 'index for efficient transfer ID search',
  },
);
