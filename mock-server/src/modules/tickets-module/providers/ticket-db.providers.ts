import { Connection } from 'mongoose';
import { TicketSchema } from '../schemas/ticket.schema';

export const ticketsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Cat', TicketSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
