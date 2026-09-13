import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

@Catch() //nothing inside catch -> it catch all exceptions and errors
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const res = context.getResponse<Response>();

    const status_code =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException
        ? exception.message
        : "internal server error";
    const code =
      exception instanceof HttpException
        ? (HttpStatus[status_code] ?? "ERROR")
        : "INTERNAL_ERROR";

    res.status(status_code).json({ status_code, message, code });
  }
}
