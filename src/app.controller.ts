import { Controller, Get } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Controller()
export class AppController {
  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}

  @Get()
  async getHello() {
    const users = await this.knex.table('users');
    return users;
  }
}
