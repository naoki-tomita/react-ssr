
import { Module } from '@nestjs/common';
import { HomeController } from './Home.controller';
import { HomeService } from './Home.service';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
