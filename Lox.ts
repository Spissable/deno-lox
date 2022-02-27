import { Scanner } from "./Scanner.ts";

class Lox {
  public static hadError = false;

  public static async runFile(path: string): Promise<void> {
    const source = await Deno.readTextFile(path);
    Lox.run(source);

    if (Lox.hadError) {
      Deno.exit(65);
    }
  }

  public static runPrompt(): void {
    while (true) {
      const input = prompt("> ");
      if (input === null) {
        break;
      }

      Lox.run(input);

      Lox.hadError = false;
    }
  }

  private static run(source: string): void {
    const scanner = new Scanner(source);
    const tokens = scanner.scanTokens();

    tokens.forEach((token) => {
      console.log(token);
    });
  }

  public static error(line: number, message: string): void {
    Lox.report(line, "", message);
  }

  private static report(line: number, where: string, message: string): void {
    console.log(`[line ${line} Error] ${where}: ${message}`);
    Lox.hadError = true;
  }
}

export default Lox;
