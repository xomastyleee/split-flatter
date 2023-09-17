import { Controller } from '@nestjs/common';
import { TicketService } from '../providers/ticket.provider';

@Controller('auth')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
}
