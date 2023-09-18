import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/mongo.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DbModule {}
