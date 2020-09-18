import { Module } from '@nestjs/common';
import { HomeModule } from './route/Home.module';

@Module({ imports: [HomeModule] })
export class App {}
