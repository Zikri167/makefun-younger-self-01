// One Line to Your Younger Self — make.fun entry (final).
// Writes a single line addressed to the author's younger self
// to /output/entry.txt. Deterministic, stdlib only, no network.
import * as fs from "node:fs";

// Final line, chosen after scoring 6 candidates against the 5 judging
// criteria (addressed to "you"; only the older self could say it; one
// breath; a twist that sticks; honest enough to sting):
// the unmailed letter to Dad wins — a secret act only the older self
// knows, a concrete object, and the door/address image turns the
// urgency into something that lingers after one read. 119 characters.
const LINE =
  "You never did mail that letter to your father \u2014 post it now, while the address still has someone left to open the door.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
