import type { PluggableList } from "unified";
import remarkEmoji from "remark-emoji";
import type { QuartzTransformerPlugin } from "@quartz-community/types";

export const EmojiShortcodes: QuartzTransformerPlugin = () => {
  return {
    name: "EmojiShortcodes",
    markdownPlugins(): PluggableList {
      return [remarkEmoji];
    },
  };
};
