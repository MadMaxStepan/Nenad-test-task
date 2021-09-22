import { Injectable, NestInterceptor, ExecutionContext, HttpStatus, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { logger } from '../utils';
import * as clc from 'cli-color';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(
      catchError(error => {
        const http = context.switchToHttp();
        const { originalUrl, method } = http.getRequest();

        process.stdout.write(clc.red(`[APP] ${process.pid} - `));
        process.stdout.write(clc.red(method));
        process.stdout.write(clc.red(` ${originalUrl} - `));
        process.stdout.write(`${new Date(Date.now()).toLocaleString()} `);
        process.stdout.write('\n');

        logger.error(error);

        return throwError(new HttpException(error, error.status || HttpStatus.BAD_REQUEST));
      }),
    );
  }
}