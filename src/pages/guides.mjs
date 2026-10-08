import { guides, guidePage, guidesIndex } from "../guides.mjs";

export default [guidesIndex, ...guides.map(guidePage)];
