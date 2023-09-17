import { Module } from '@nestjs/common';
import { DbModule } from '../db-module/db.module';
import { TicketController } from './controllers/ticket.controller';
import { TicketService } from './providers/ticket.provider';
import { ticketsProviders } from './providers/ticket-db.providers';

@Module({
  imports: [DbModule],
  controllers: [TicketController],
  providers: [TicketService, ...ticketsProviders],
})
export class TicketsModule {}
