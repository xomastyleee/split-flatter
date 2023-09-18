import { Document } from 'mongoose';

export interface ITicket extends Document {
  readonly name: string;
}
