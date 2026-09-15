export async function fetchInitialFen(): Promise<string> {
    const response = await fetch("http://localhost:3000/game");

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    if (typeof data.fen !== "string") {
        throw new Error("The server did not return a FEN string");
    }

    return data.fen;
}