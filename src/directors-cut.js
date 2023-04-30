const fs = require("fs");

const repos = fs.readdirSync("../repos");

const allPlugins = [];

for (let i = 0; i < repos.length; i++) {
  const repo = repos[i];
  if (repo == ".gitkeep") continue;
  const text = fs.readFileSync(`../repos/${repo}`, "utf-8");
  const plugins = JSON.parse(text);
  allPlugins.push(plugins);
}

const allPluginsFlat = allPlugins.flat();
fs.writeFileSync(
  "../repo.json",
  JSON.stringify(allPluginsFlat, null, 2)
);
