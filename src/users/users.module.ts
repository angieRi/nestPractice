import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from "./users.entity";
import {Profile} from "./profile.entity";

@Module({
  imports:[TypeOrmModule.forFeature([User,Profile
  ])],//que entidades puede cargar
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
