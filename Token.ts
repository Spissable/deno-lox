import { TokenType } from "./TokenType.ts";

export class Token {
  constructor(
    public readonly type: TokenType,
    public readonly lexeme: string,
    public readonly literal: unknown,
    public readonly line: number,
  ) {}

  public toString(): string {
    return `${this.type} ${this.lexeme} ${this.literal}`;
  }
}
