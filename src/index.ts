import { makeSourceHandler } from "sidesource";

export default makeSourceHandler({
  configURL: "https://raw.githubusercontent.com/cyberneel/cyberneel-sidesource/main/config.json",
  cacheTime: 300
});