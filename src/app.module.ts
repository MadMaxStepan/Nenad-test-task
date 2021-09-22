import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ORM_CONFIG } from './config';
import { AppController } from './app.controller';
import { ErrorsInterceptor } from './common/interceptors';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ORM_CONFIG),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class ApplicationModule { }
