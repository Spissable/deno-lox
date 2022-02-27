import Lox from "./Lox.ts";

const args = Deno.args;

if (args.length > 1) {
  console.log("Usage: deno run Lox.ts [script]");
  Deno.exit(64);
} else if (args.length === 1) {
  await Lox.runFile(args[0]);
} else {
  Lox.runPrompt();
}
