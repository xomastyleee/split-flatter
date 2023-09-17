import * as mongoose from 'mongoose';
import { getEnv } from 'src/lib/helpers';

const mongoUrl = getEnv(process.env.MONGO_URL, 'MONGO_URL');

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(mongoUrl),
  },
];
