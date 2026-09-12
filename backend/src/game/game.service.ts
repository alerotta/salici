import { Injectable } from "@nestjs/common";

const sampleFens = [
  // Zukertort – Blackburne, London 1883, after 10...Ne4
  "r4rk1/pbpnqppp/1p1bp3/1N1p4/2PPn3/1P2PN2/PB2BPPP/R2Q1RK1 w - - 5 11",

  // Lasker – Bauer, Amsterdam 1889, after 10...Qc7
  "r4rk1/pbqnbppp/1p2pn2/2pp4/5P2/1P1BPNN1/PBPP2PP/R2Q1RK1 w - - 2 11",

  // Pillsbury – Tarrasch, Hastings 1895, after 10...c5
  "r2q1rk1/pb1nbppp/1p3n2/2pp2B1/3P4/2NBPN2/PP3PPP/2RQ1RK1 w - c6 0 11",

  // Steinitz – von Bardeleben, Hastings 1895, after 10...Be7
  "r2qk2r/ppp1bppp/2n1b3/3n2B1/2BP4/2N2N2/PP3PPP/R2Q1RK1 w kq - 4 11",

  // Pillsbury – Gunsberg, Hastings 1895, after 10...b5
  "rn1q1rk1/p3ppbp/2p1b1p1/1p1nN3/2BP1P2/1QN1P3/PP4PP/R1B1K2R w KQ b6 0 11",

  // Pillsbury – Lasker, St. Petersburg 1896, after 10...h6
  "r3k2r/pp1bbpp1/2n1pn1p/q2p2B1/2P4Q/2N1PN2/PP3PPP/1K1R1B1R w kq - 0 11",

  // Lasker – Napier, Cambridge Springs 1904, after 10...Nc7
  "r1bq1rk1/ppn1ppbp/2np2p1/6P1/3NP2P/2N1B3/PPP2P2/R2QKB1R w KQ - 1 11",

  // Rubinstein – Lasker, St. Petersburg 1909, after 10...Bxf6
  "r2qk2r/pp1b1ppp/2n2b2/1B1p4/3N4/2N1P3/PP3PPP/R2QK2R w KQkq - 0 11",

  // Edward Lasker – Thomas, London 1912, after 10...Qe7
  "rn3rk1/pbppq1pp/1p2pb2/4N2Q/3PN3/3B4/PPP2PPP/R3K2R w KQ - 6 11",

  // Morphy – Paulsen, New York 1857, after 10...Rxe4
  "r1bq2k1/p1p2ppp/2p5/1pb5/4r3/8/PPPPBPPP/R1BQ1RK1 w - - 0 11",
];

@Injectable()
export class GameService {
  getRandomFen(): string {
    const i = Math.floor(Math.random() * sampleFens.length);
    return sampleFens[i]!;
  }
}
