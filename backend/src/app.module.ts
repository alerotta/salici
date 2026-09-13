import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { GameModule } from "./game/game.module";

@Module({
  imports: [HealthModule, GameModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
