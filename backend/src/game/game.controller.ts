import { Controller, Get } from "@nestjs/common";
import { GameService } from "./game.service";

@Controller("game")
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getGame() {
    return { fen: this.gameService.getRandomFen() };
  }
}
