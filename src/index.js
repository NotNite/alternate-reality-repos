const { PLUGIN_TEMPLATE, API_LEVEL } = require("./template");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randStr(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const PLUGINS_TO_MAKE = rand(1, 5);
const plugins = [];

let officialRepoNames = null;

async function getOfficialRepoNames() {
  const req = await fetch("https://kamori.goats.dev/Plugin/PluginMaster");
  const json = await req.json();
  officialRepoNames = json.map((plugin) => plugin.Name);
}

function makeName() {
  const both = ["Ultimate", "Extreme"];
  const prefixes = [...both, "Super", "Hyper"];
  const suffixes = [...both, "Expanded", "Enhanced", "Plus", "2", "Rewritten"];

  const allPlugins = [
    ...officialRepoNames,
    // The Trifecta of Support Pain
    "Penumbra",
    "Mare Synchronos",
    "Glamourer",
    // need to shill it
    "Heliosphere"
  ];

  const titleCount = rand(1, 2);

  let name = allPlugins[rand(0, allPlugins.length - 1)];

  let appliedTitles = 0;
  while (appliedTitles < titleCount) {
    let choosingInFront = rand(0, 1) === 1;
    let pool = choosingInFront ? prefixes : suffixes;
    let title = pool[rand(0, pool.length - 1)];

    if (name.includes(title)) continue; // don't apply twice

    if (choosingInFront) {
      name = `${title} ${name}`;
    } else {
      name = `${name} ${title}`;
    }

    appliedTitles++;
  }

  return name + ` [Alternate Reality Repos API ${API_LEVEL}]`;
}

function doScrabble() {
  const wordList = require("fs")
    .readFileSync("scrabble.txt", "utf-8")
    .trim()
    .split("\n");

  const words = [];
  for (let i = 0; i < 3; i++) {
    const word = wordList[rand(0, wordList.length - 1)];
    words.push(word.toLowerCase());
  }

  return words.join("-");
}

async function main() {
  await getOfficialRepoNames();

  for (let i = 0; i < PLUGINS_TO_MAKE; i++) {
    const plugin = Object.assign({}, PLUGIN_TEMPLATE);
    plugin.Name = makeName();
    plugin.InternalName = randStr(20);
    plugin.Description = "";

    plugins.push(plugin);
  }

  const text = JSON.stringify(plugins, null, 2);
  const filename = doScrabble();

  require("fs").writeFileSync(`../repos/${filename}.json`, text);
}

main();
