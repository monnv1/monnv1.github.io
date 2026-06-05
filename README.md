# Personal Homepage

Astro personal homepage with a Markdown blog, ready for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Write a Blog Post

Create a Markdown file in `src/content/blog`.

```md
---
title: "文章标题"
description: "一句话描述"
pubDate: 2026-06-05
tags: ["Astro", "技术"]
---

正文从这里开始。
```

Technical notes, project reviews, learning logs, reading notes, and reflective essays can all live in the same blog. Use `tags` to separate topics.

Use `.md` for normal writing and `.mdx` when an article needs components such as formulas, charts, diagrams, video, 3D scenes, or interactive demos. See `src/content/blog/rich-blog-showcase.mdx` for examples.

## Categories, Tags, and Drafts

Use one `category` for the article type and multiple `tags` for specific topics.

```md
---
title: "复现记录 Day 1"
description: "环境配置和第一轮报错。"
pubDate: 2026-06-05
category: "复现记录"
tags: ["论文复现", "PyTorch"]
series: "Paper-X 复现"
draft: true
---
```

`draft: true` posts are visible in local development but excluded from the production GitHub Pages build.

For truly private notes, use `local-drafts/`. That folder is ignored by Git and will not be pushed to the public repository.

Do not commit private content to a public GitHub repository. Even if a post has `draft: true`, the source file is still visible on GitHub if you commit and push it.

## Edit Personal Info

- Change the name and links in `src/layouts/BaseLayout.astro`.
- Change the homepage intro in `src/pages/index.astro`.
- Change projects in `src/data/projects.ts`.
- Change the about page in `src/pages/about.astro`.

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Push this project to the repository.
3. In GitHub, open Settings > Pages.
4. Set Source to GitHub Actions.
5. Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and deploys the site.

For a user site such as `username.github.io`, keep `base: '/'` in `astro.config.mjs`.

For a project site such as `username.github.io/repo-name`, set:

```js
site: 'https://username.github.io',
base: '/repo-name',
```
