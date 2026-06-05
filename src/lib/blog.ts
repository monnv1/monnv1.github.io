import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export const sortPostsByDate = (posts: BlogPost[]) =>
  [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

export const getVisiblePosts = (posts: BlogPost[]) =>
  import.meta.env.PROD ? posts.filter((post) => !post.data.draft) : posts;

export const slugify = (value: string) => encodeURIComponent(value);

export const unslugify = (value: string) => decodeURIComponent(value);

export const getCategoryCounts = (posts: BlogPost[]) => {
  const counts = new Map<string, number>();

  posts.forEach((post) => {
    counts.set(post.data.category, (counts.get(post.data.category) ?? 0) + 1);
  });

  return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0], 'zh-CN'));
};

export const getTagCounts = (posts: BlogPost[]) => {
  const counts = new Map<string, number>();

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0], 'zh-CN'));
};
