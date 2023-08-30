const core = require("@actions/core");
const slugifyFunction = require("./slugify");

async function run() {
  const inputStr = core.getInput("string");
  const prefix = core.getInput("prefix");
  const suffix = core.getInput("suffix");
  const forcePrefix = core.getInput("forcePrefix") === "true" ? true : false;
  const forceSuffix = core.getInput("forceSuffix") === "true" ? true : false;
  const slugify = core.getInput("slugify") === "true" ? true : false;
  const outputLength = Number(core.getInput("outputLength")) || 0;
  const outputCase = core.getInput("outputCase");

  const slugufiedStr = slugifyFunction({
    inputStr,
    prefix,
    suffix,
    forcePrefix,
    forceSuffix,
    slugify,
    outputLength,
    outputCase,
  });
  console.log(`The slugified string is: ${slugufiedStr}`);
  core.setOutput("slug", slugufiedStr);
}

run();
