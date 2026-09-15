import { Injectable } from "@nestjs/common";
import { Chess, Move } from "chess.js";
import {
  ChessMoveInput,
  AppliedChessMove,
  ChessPositionStatus,
} from "./chess.types";
import { InvalidFenError, IllegalMoveError } from "./chess.errors";

@Injectable()
export class ChessService {
  createInitialPosition(): string {
    const chess = new Chess();
    return chess.fen();
  }

  getStatus(fen: string): ChessPositionStatus {
    let chess: Chess;
    try {
      chess = new Chess(fen);
    } catch (error) {
      throw new InvalidFenError();
    }
    const status: ChessPositionStatus = {
      fen: chess.fen(),
      turn: chess.turn(),
      isCheck: chess.isCheck(),
      isCheckmate: chess.isCheckmate(),
      isStalemate: chess.isStalemate(),
      isDraw: chess.isDraw(),
      isGameOver: chess.isGameOver(),
    };

    return status;
  }

  applyMove(fen: string, input: ChessMoveInput): AppliedChessMove {
    let chess: Chess;
    try {
      chess = new Chess(fen);
    } catch (error) {
      throw new InvalidFenError();
    }

    let move: Move;
    try {
      move = chess.move(input);
    } catch (error) {
      throw new IllegalMoveError();
    }
    const appliedMove: AppliedChessMove = {
      from: move.from,
      to: move.to,
      san: move.san,
      uci: move.lan,
      fenAfter: chess.fen(),
      turnAfter: chess.turn(),
      isCheck: chess.isCheck(),
      isCheckmate: chess.isCheckmate(),
      isStalemate: chess.isStalemate(),
      isDraw: chess.isDraw(),
      isGameOver: chess.isGameOver(),
    };

    return appliedMove;
  }
}
