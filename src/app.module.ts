import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type:'mysql',
        host:'localhost',
        port: 3306,
        username:'root',
        password:'',
        database:'nestest',
        entities:[__dirname + '/**/*.entity{.jt,.js}'],
        synchronize:true
      }),
      TasksModule, UsersModule],
})
export class AppModule {}
