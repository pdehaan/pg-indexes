#!/usr/bin/env node

const fs = require("fs");

const main = require("./index");

const argv = process.argv.splice(2);
const indexFile = argv[0];

if (fs.existsSync(indexFile)) {
  const indexes = fs.readFileSync(indexFile).toString();
  const res = main(indexes);
  console.log(res);
} else {
  console.error(`index file not found: ${indexFile}`);
  process.exitCode = 1;
}
