export class InvalidFenError extends Error {
    constructor(message = "The provided FEN is not valid.") {
        super(message);
        this.name = "InvalidFenError";
    }
}

export class IllegalMoveError extends Error {
    constructor(message = "The requested move is not legal.") {
        super(message);
        this.name = "IllegalMoveError";
    }
}