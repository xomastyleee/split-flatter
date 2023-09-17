import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule, TicketsModule, UsersModule } from './modules';

const DotEnvConfigModule = ConfigModule.forRoot({ envFilePath: '.env' });

@Module({
  imports: [DotEnvConfigModule, DbModule, UsersModule, TicketsModule],
})
export class AppModule {}
