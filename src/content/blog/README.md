# Blog Posts

This folder holds the markdown/MDX files used to power the blog.

Each file should use YAML frontmatter and include at least:

- `title`: Post title
- `date`: Date string (e.g. "March 2026")
- `excerpt`: Short summary for the blog listing
- `tags`: Array of categories (e.g. `Security`, `Web`, `Product`, `Team`)

Example:

```md
---
title: "My post title"
date: "March 2026"
excerpt: "A short summary of the post."
tags:
  - Security
  - Web
---

## Heading

Post content goes here.
```

The blog list page (`/blog`) automatically reads all `.mdx`/`.md` files here and renders them.
