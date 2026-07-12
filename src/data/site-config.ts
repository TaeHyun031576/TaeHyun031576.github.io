import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://taehyun031576.github.io',
    avatar: {
        src: '/avatar-placeholder.svg',
        alt: 'Profile placeholder for Taehyun Kim / 金太贤'
    },
    title: 'Taehyun Kim / 金太贤',
    subtitle: '<span class="lang-en">Bachelor of Computer Science (Cyber Security), <a href="https://www.uow.edu.au" target="_blank" rel="noopener noreferrer" class="text-blue-900 dark:text-sky-300 underline decoration-dashed underline-offset-4 hover:decoration-solid hover:decoration-2">University of Wollongong</a></span><span class="lang-zh" lang="zh-CN">计算机科学学士（网络安全），<a href="https://www.uow.edu.au" target="_blank" rel="noopener noreferrer" class="text-blue-900 dark:text-sky-300 underline decoration-dashed underline-offset-4 hover:decoration-solid hover:decoration-2">伍伦贡大学</a></span>',
    description: 'Bilingual portfolio of Taehyun Kim / 金太贤, a Computer Science (Cyber Security) student at the University of Wollongong.',
    image: {
        src: '/hero-placeholder.svg',
        alt: 'OG Image'
    },
    headerNavLinks: [
        {
            text: 'Home / 首页',
            href: '/'
        },
        {
            text: 'About / 关于',
            href: '/about'
        },
        {
            text: 'Publications / 学术成果',
            href: '/publications',
            submenu: [
                { text: 'Papers / 论文', href: '/publications/papers' },
                { text: 'Datasets / 数据集', href: '/publications/datasets' },
                { text: 'Patents / 专利', href: '/publications/patents' }
            ]
        },
        {
            text: 'Projects / 项目',
            href: '/projects'
        },
        {
            text: 'Blog / 博客',
            href: '/blog'
        },
        {
            text: 'Tags / 标签',
            href: '/tags'
        },
        {
            text: 'Dashboard / 动态',
            href: '/dashboard'
        },
        {
            text: 'Contact / 联系',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/TaeHyun031576'
        },
        {
            text: 'Email',
            href: 'mailto:tk610@uowmail.edu.au'
        }
    ],
    hero: {
        title: 'Welcome to My Corner of the Web! / 欢迎来到我的个人空间！',
        text: "<div class=\"lang-en\">Hi, I'm **Taehyun Kim**. I am studying <span class=\"text-blue-900 dark:text-sky-300 font-semibold\">Computer Science (Cyber Security)</span> at the <span class=\"text-blue-900 dark:text-sky-300 font-semibold\">University of Wollongong</span>. I am interested in secure software, networks, and practical approaches to protecting digital systems. This site documents what I learn and build.\n\nExplore my work on <a href=\"https://github.com/TaeHyun031576\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-900 dark:text-sky-300 font-bold underline decoration-solid underline-offset-4 hover:decoration-2\">GitHub</a>.</div><div class=\"lang-zh\" lang=\"zh-CN\">你好，我是**金太贤（Taehyun Kim）**，目前在<span class=\"text-blue-900 dark:text-sky-300 font-semibold\">伍伦贡大学</span>学习<span class=\"text-blue-900 dark:text-sky-300 font-semibold\">计算机科学（网络安全）</span>。我关注安全软件、网络与数字系统防护，并在这里记录自己的学习与项目。\n\n欢迎通过 <a href=\"https://github.com/TaeHyun031576\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-900 dark:text-sky-300 font-bold underline decoration-solid underline-offset-4 hover:decoration-2\">GitHub</a> 查看我的项目。</div>",
        image: {
                src: '/sydney.png',
                alt: 'Sydney city view / 悉尼城市风景'
        },
        actions: [
            {
                text: 'Get in Touch / 联系我',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     enabled: true,
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     form: {
    //         action: '#'
    //     }
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
