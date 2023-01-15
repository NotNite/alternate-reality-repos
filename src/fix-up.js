const { PLUGIN_TEMPLATE, API_LEVEL } = require("./template");
const fs = require("fs");
const repos = fs.readdirSync("../repos");

for (const repo of repos) {
  if (repo == ".gitkeep") continue;
  const text = fs.readFileSync(`../repos/${repo}`, "utf-8");
  const plugins = JSON.parse(text);

  const newPlugins = [];
  for (const plugin of plugins) {
    const fixedPlugin = Object.assign({}, plugin, PLUGIN_TEMPLATE);
    fixedPlugin.Name = fixedPlugin.Name.replace(
      /\[Alternate Reality Repos API .\]/,
      `[Alternate Reality Repos API ${API_LEVEL}]`
    );

    newPlugins.push(fixedPlugin);
  }

  fs.writeFileSync(`../repos/${repo}`, JSON.stringify(newPlugins, null, 2));
}
