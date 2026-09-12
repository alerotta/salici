import { Module } from "@nestjs/common";
import { GameController } from "./game/game.controller";

@Module({
  controllers: [GameController],
  providers: [],
})
export class AppModule {}
