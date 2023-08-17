const core = require('@actions/core');

async function run() {
    const inputStr = core.getInput('string');
    const slugufiedStr = inputStr.toLowerCase().replace(/[^a-z0-9 -]/g, '') 
                                               .replace(/\s+/g, '-')
                                               .replace(/-+/g, '-');
    console.log(`The slugified string is: ${slugufiedStr}`);
    core.setOutput("slug", slugufiedStr);
  }
  
  run();