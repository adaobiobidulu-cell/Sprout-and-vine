# Changelog entries

One markdown file per entry. Adding a file here publishes it on /changelog
with no code change (newest date first).

Format:

```
---
date: 2026-07-02
title: Smart Pickup photo flow shipped
image: /changelog/pickup.png
---
Two to six sentences of plain description. Written by Ada and Chuck,
not generated. Calm tone, no marketing language.

A second paragraph is fine if needed.
```

- `date` (required): yyyy-mm-dd
- `title` (required): short, plain
- `image` (optional): one screenshot, placed in public/changelog/

The /changelog page stays redirected to /roadmap until at least THREE real
entries exist here (an empty or single-entry changelog reads worse than
none). Write the first three, delete nothing, and the page goes live on the
next deploy.
