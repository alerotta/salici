import { Module } from "@nestjs/common";
import { GameController } from "./game/game.controller";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [HealthModule],
  controllers: [GameController],
  providers: [],
})
export class AppModule {}
