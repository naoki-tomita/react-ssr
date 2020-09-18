import { Controller, Get, Res } from '@nestjs/common';
import { HomeService } from './Home.service';
import { Response } from "express";

@Controller("/home")
export class HomeController {
  constructor(private readonly appService: HomeService) {}

  @Get()
  async getHello(@Res() res: Response) {
    res.status(200).end(await this.appService.home())
  }
}
