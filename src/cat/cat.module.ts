import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cat.service';
import { catsProviders } from './cat.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class CatsModule {}