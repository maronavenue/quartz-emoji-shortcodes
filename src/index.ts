export { EmojiShortcodes } from "./transformer";
export type { QuartzTransformerPlugin } from "@quartz-community/types";
4. In package.json, remove the now-dangling "./types" and "./components" entries from "exports", and replace the "quartz" block with:
"quartz": {
  "name": "emoji-shortcodes",
  "displayName": "Emoji Shortcodes",
  "category": "transformer",
  "version": "1.0.0",
  "quartzVersion": ">=5.0.0",
  "dependencies": [],
  "defaultOrder": 50,
  "defaultEnabled": true,
  "defaultOptions": {}
}
