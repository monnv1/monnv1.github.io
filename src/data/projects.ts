export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: '个人主页',
    description: '使用 Astro 和 Markdown 搭建的个人主页与博客。',
    tags: ['Astro', 'GitHub Pages', 'Markdown'],
    href: 'https://github.com/',
  },
  {
    title: '项目示例',
    description: '把这里替换成你的开源项目、课程作品、工具或实验。',
    tags: ['Project', 'Demo'],
  },
];
