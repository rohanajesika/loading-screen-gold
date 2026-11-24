// Loading Screen Gold: A Tip in 200 Characters — make.fun bounty
// u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
//
// Writes one loading-screen tip (at most 200 characters) to
// /output/entry.txt: a sharp, funny tip for stressed developers
// and AI coding agents, strong enough to land mid-build.
// Deterministic: one constant string, no fetch, no randomness,
// no clock, no environment input besides the output directory
// override the grader sets.
//
// Candidates weighed against the judge's brief, in its order
// (1 on-subject tip for devs + agents, 2 real laugh via a turn,
// 3 lands in a glance, 4 speaks to both at once, 5 fresh):
//
// A (172 chars, CHOSEN v2 — revision of v1):
//   "Tip: your AI agent just closed your ticket, opened three new
//   ones 'while it was in there', and is already refactoring your
//   refactor. Stretch — you're still the senior here."
//   Revision note: "now" -> "already" — the agent could not even
//   wait to start refactoring, which sharpens the runaway-helper
//   turn; "Stretch. You're" -> "Stretch — you're" joins the
//   reassurance to the stretch in one breath, so the punchline
//   lands without a full stop breaking the glance (criterion 3).
//   On-subject: an agent doing agent things mid-build, addressed
//   to the developer watching it. Turn: the agent's "help" creates
//   more work (three new tickets, refactoring the refactor).
//   Punchline: "You're still the senior here" — reassurance with
//   a wink, speaking to the stressed dev while the joke is about
//   the agent. Fresh: no coffee, deadline or compile joke.
//
// B (130 chars):
//   "Tip: your agent fixed the bug, broke the build, and left a
//   comment saying 'you're welcome'. Breathe — the keyboard is
//   still yours."
//   Loses to A: "broke the build" leans on the compile joke the
//   brief calls stale, and the turn is a single beat where A
//   escalates twice (new tickets, then refactoring the refactor).
//
// C (145 chars):
//   "Tip: the agent rewrote your function, renamed your variables,
//   and apologized in a comment longer than the code. Breathe. It
//   means well. Probably."
//   Loses to A: "Probably." is a good kicker, but the tip never
//   addresses the developer directly — criterion 4 (speaks to
//   both at once) is weaker than A's "You're still the senior
//   here."
//
// D (156 chars):
//   "Tip: your AI agent finished the task, then invented three
//   more 'while it was in there'. Stretch, drink water, and
//   remember: you're the one it asks for help."
//   Loses to A: "drink water" is filler — every word must work
//   (criterion 3) — and "the one it asks for help" is vaguer
//   than "the senior here".
//
// E (141 chars):
//   "Tip: your agent just shipped your fix and a brand-new bug,
//   then asked if you want it to 'quickly improve' the rest. Say
//   no. Stretch. Breathe."
//   Loses to A: "Say no" tells the dev what to do instead of
//   landing a punchline, and the agent asking permission makes
//   it less of a runaway-helper joke.
//
// A wins because it escalates the agent's helpfulness into
// absurdity and then hands the tired developer their status back
// in five words. No cause invented, no placeholder, every word
// earning its place.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. Exactly one line, 172 characters, 174 bytes UTF-8.
const LINE =
  "Tip: your AI agent just closed your ticket, opened three new ones 'while it was in there', " +
  "and is already refactoring your refactor. Stretch — you're still the senior here.";

const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length === 0 || line.trim().length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be exactly one line");
  }
}

function main(): void {
  validate(LINE);
  // The grader mounts /output and may point here with
  // MAKEFUN_OUTPUT_DIR; default to /output. Only the file inside
  // the directory is ever written — the directory itself is never
  // removed or recreated.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the gate counts the file's characters,
  // and the line itself is the whole entry.
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
