# quartz-emoji-shortcodes

A Quartz v5 transformer plugin that converts GitHub/Slack/Discord-style `:shortcode:` emoji (e.g. `:dog2:`, `:sheep:`, `:zap:`) into real Unicode emoji at build time.

Quartz and Obsidian don't render `:shortcode:` syntax by default — this plugin wraps [`remark-emoji`](https://github.com/rhysd/remark-emoji) so you can keep writing shortcodes in your notes and have them show up as actual emoji on the published site.

## Install

From your Quartz v5 site repo:

```bash
npx quartz plugin add github:maronavenue/quartz-emoji-shortcodes
```

This clones the plugin and registers it in both quartz.config.yaml and quartz.lock.json.

### Verify installation

Confirm the plugin is available from the list:

```bash
npx quartz plugin list
# ...
  ✓ quartz-emoji-shortcodes
    Source: github:maronavenue/quartz-emoji-shortcodes
    Commit: 2e9fbe8
    Installed: 7/8/2026
```

You should see emoji-shortcodes listed and enabled. Check `quartz.config.yaml` to confirm it's there:

```yaml
plugins:
  - source: github:maronavenue/quartz-emoji-shortcodes
    enabled: true
```

Then rebuild the site and check a page that uses shortcodes:

```bash
npx quartz build
```

`:dog2:` herdr should render as 🐕 herdr.

## CI

If your site deploys via GitHub Actions, make sure the workflow installs plugins before building:

```yaml
# ...
- name: Install Quartz plugins
  run: npx quartz plugin install
```

`.quartz/plugins/` is gitignored by default. Plugins are reinstalled fresh in CI from `quartz.lock.json` and are not committed.

## Development

```bash
npm install
npm run build
```

`dist/` ships committed in this repo (not gitignored) so installs are instant — no build step for consumers. Rebuild and commit `dist/` after any change to `src/`.

## License

MIT
