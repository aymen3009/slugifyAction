const core = require('@actions/core');



async function run() {
    const inputStr = core.getInput('string');
    const prefix = core.getInput('prefix');
    const suffix = core.getInput('suffix');
    const forcePrefix = core.getInput('forcePrefix') === 'true' ? true : false;
    const forceSuffix = core.getInput('forceSuffix') === 'true' ? true : false;
    const slugify = core.getInput('slugify') === 'true' ? true : false;
    const outputLength = Number(core.getInput('outputLength')) || 0;
    const outputCase = core.getInput('outputCase');

    let slugufiedStr = inputStr;
    if (slugify) {
        slugufiedStr = slugufiedStr.replace(/[^a-z0-9 -]/g, '')
                                    .replace(/\s+/g, '-')
                                    .replace(/-+/g, '-');
    }
    if (forcePrefix) {
        slugufiedStr = `${prefix}${slugufiedStr}`;
    }else{
      if(inputStr.toLowerCase().startsWith(prefix.toLowerCase())){
        slugufiedStr = `${prefix}${slugufiedStr}`;
      }
    }
    if (forceSuffix) {
        slugufiedStr = `${slugufiedStr}${suffix}`;
    }else{
      if(inputStr.toLowerCase().endsWith(suffix.toLowerCase())){
        slugufiedStr = `${slugufiedStr}${suffix}`;
      }
    }
    if (outputLength > 0) {
        slugufiedStr = slugufiedStr.substring(0, outputLength);
    }
    if (outputCase === 'capitalize') {
        slugufiedStr = slugufiedStr.charAt(0).toUpperCase() + slugufiedStr.slice(1);
    } else if (outputCase === 'upper') {
        slugufiedStr = slugufiedStr.toUpperCase();
    }else{
      slugufiedStr = slugufiedStr.toLowerCase();
    }
    console.log(`The slugified string is: ${slugufiedStr}`);
    core.setOutput("slug", slugufiedStr);
  }
  
  run();