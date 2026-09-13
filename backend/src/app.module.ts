import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { GameModule } from "./game/game.module";
import { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";

@Module({
  imports: [HealthModule, GameModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
