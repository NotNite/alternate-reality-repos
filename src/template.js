const PLUGIN_DOWNLOAD = "https://soulja-boy-told.me/public/duck.png";
const API_LEVEL = 8;

const PLUGIN_TEMPLATE = {
  Author: "NotNite",
  AssemblyVersion: "1.0.0.0",
  TestingAssemblyVersion: "1.0.0.0",
  RepoUrl: "https://github.com/NotNite/alternate-reality-repos",
  ApplicableVersion: "any",
  DalamudApiLevel: API_LEVEL,
  IsHide: "False",
  IsTestingExclusive: "False",
  DownloadCount: 0,
  LastUpdate: 0,
  DownloadLinkInstall: PLUGIN_DOWNLOAD,
  DownloadLinkTesting: PLUGIN_DOWNLOAD,
  DownloadLinkUpdate: PLUGIN_DOWNLOAD
};

module.exports = { PLUGIN_TEMPLATE, API_LEVEL };
