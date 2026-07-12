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
        src: '/sydney.png',
        alt: 'Sydney city view'
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
        },
        {
        text: 'Instagram',
        href: 'https://www.instagram.com/xogus_4_5?igsh=MWg2ams0OXc2eTVpZg%3D%3D&utm_source=qr'
        }
    ],
    hero: {
        title: 'Growth Through Experience. / 在经历中成长',
        text: "<div class=\"lang-en\">Hello, and welcome to my portfolio. I’m <span class=\"text-[#005a8b] dark:text-sky-300 font-semibold\">Taehyun Kim</span>, a <span class=\"text-[#005a8b] dark:text-sky-300 font-semibold\">Computer Science (Cyber Security)</span> student at the <span class=\"text-[#005a8b] dark:text-sky-300 font-semibold\">University of Wollongong</span>. My interests include secure software, computer networks, and language learning. Outside my academic studies, I enjoy learning Mandarin Chinese independently. This website documents what I learn, build, and experience along the way.</div><div class=\"lang-zh\" lang=\"zh-CN\">你好，欢迎来到我的个人作品集。我是<span class=\"text-[#005a8b] dark:text-sky-300 font-semibold\">金太贤</span>，目前就读于<span class=\"text-[#005a8b] dark:text-sky-300 font-semibold\">伍伦贡大学计算机科学（网络安全）</span>专业。我对安全软件、计算机网络和语言学习感兴趣。在专业学习之外，我也喜欢自学普通话。这个网站记录了我一路上的学习、实践与经历。</div>",
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
