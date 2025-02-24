

import avatar from "@/assets/avatar.jpg"
import Photos_Image01 from "@/photo/IMG_20240211_191014.jpg"
import Photos_Image02 from "@/photo/IMG_20240209_145206.jpg"

import OutSor_Image_01 from "@/photo/outsor/PixPin_2025-02-02_23-16-24.png"
import OutSor_Image_02 from "@/photo/outsor/PixPin_2025-02-02_23-41-10.png"
import OutSor_Image_03 from "@/photo/outsor/PixPin_2025-02-02_23-49-41.png"
import OutSor_Image_04 from "@/photo/outsor/PixPin_2025-02-03_12-23-26.png"

export default {
    home: {
        name: '主页',
        data: {
            welcome: "Hello, I'm Hua",
            netease: 'https://music.163.com/#/artist?id=58070844',
        }
    },

    author: {
        name: 'Hua',
        gitee: 'yichen9247',
        avatar: avatar,
        github: 'yichen9247',
        bilibili: '1210947695',
        description: '一个无名小卒，擅长使用Java、Node等开发技术'
    },

    project: {
        name: '项目',
        data: [{
            name: 'Handsock',
            repo: 'https://github.com/yichen9247/HandSock',
            desc: '一款有趣的聊天应用，基于 Typescript，Mybatis-Plus，Springboot, Vue3 和 Socket.io，Redis 等技术开发'
        }]
    },

    website: {
        name: '站点',
        data: [{
            name: 'Handsock演示站点',
            link: 'https://handsock.xiaokolomi.cn',
            desc: '项目HandSock的演示站点，因服务器即将到期，后端服务将在两个月之后关闭'
        }, {
            name: 'Handsock官方文档',
            link: 'https://doc.handsock.xiaokolomi.cn',
            desc: '项目HandSock的官方文档，不会搭建或者想要了解本项目的可以进入文档查看'
        }, {
            name: 'SPlayer音乐网站',
            link: 'https://music.xiaokolomi.cn',
            desc: '基于开源项目SPlayer搭建的网易云在线音乐网站，界面美观且操作简单'
        }, {
            name: 'Excalidraw在线绘图',
            link: 'https://board.xiaokolomi.cn',
            desc: '基于开源项目Excalidraw-Pro搭建的在线绘图网站，界面美观且操作简单'
        }, {
            name: '头像生成工作站',
            link: 'https://avatar.xiaokolomi.cn',
            desc: '一个可以随机生成不同风格的头像网站，你可以随机生成不同形状和颜色的头像'
        }]
    },

    outsor: {
        name: '外包',
        data: [{
            name: '梦希操作系统官网',
            desc: '技术栈：Vite + Vue3（前端）',
            image: OutSor_Image_01,
        }, {
            name: 'AIDE PRO官网',
            desc: '技术栈：Vite + Vue3 + Axios（前端）',
            image: OutSor_Image_02,
        }, {
            name: 'AIDE PRO后台',
            desc: '技术栈：Spring + Mybatis Plus（后端）',
            image: OutSor_Image_03,
        }, {
            name: '智慧管理云平台',
            desc: '技术栈：Vite + Vue3 + Nodejs（全栈）',
            image: OutSor_Image_04,
        }]
    },

    mySkill: {
        name: '技能',
        data: [{
            name: '前端技术',
            data: ['Html5', 'CSS3', 'JavaScript', 'Vue', 'React', 'PHP', 'Vite', 'NodeJS', 'NextJS', 'Ajax', 'JQuery', 'Echarts', 'TypeScript']
        }, {
            name: '后端技术',
            data: ['Spring', 'PHP', 'NodeJs', 'Redis', 'MySQL', 'MyBatis', 'RestFul API']
        }, {
            name: '软件开发',
            data: ['Android', 'HarmonyOS', 'JetPack Compose', 'Uniapp', 'ArkTs', 'ArkUI']
        }, {
            name: '软件设计',
            data: ['Adobe XD', 'Axure RP', 'PhotoShop']
        }, {
            name: '编程语言',
            data: ['Java', 'Kotlin', 'Python', 'PHP', 'C', 'Html5', 'CSS3', 'JavaScript', 'TypeScript', 'GO', 'C++（基础）', 'Rust（基础）']
        }, {
            name: '其它技术',
            data: ['Git（基础）', 'Linux（基础）', 'Gradle（基础）', 'Maven（基础）']
        }]
    },

    friend: {
        name: '友人',
        data: [{
            name: '张洪Heo',
            link: 'https://blog.zhheo.com',
            src: 'https://bu.dusays.com/2022/12/28/63ac2812183aa.png',
            desc: '分享设计与科技生活'
        }, {
            name: '小林笔记',
            link: 'https://m.senlinm.cn',
            src: 'https://senlinm.s3.us-east-005.backblazeb2.com/01.png',
            desc: '轻生活，秒上签'
        }]
    },

    photos: {
        name: '相册',
        data: [{
            alt: 'Hua Image',
            src: Photos_Image01
        }, {
            alt: 'Hua Image',
            src: Photos_Image02
        }]
    },

    about: {
        name: '关于',
        useingIdeList: [{
            name: 'VS Code',
            logo: 'Microsoft',
        }, {
            name: 'Visual Studio',
            logo: 'Microsoft',
        }, {
            name: 'IDEA',
            logo: 'IntelliJ',
        }],
        contactList: [{
            name: '865252486',
            logo: 'QQ',
        }, {
            name: 'yichen9247',
            logo: 'WeChat',
        }],
        data: '各位好，我是Hua，具备全栈开发能力的准大一新生，主攻现代前端工程化方向。擅长使用Vue/React生态体系（Vite/Next.js）构建响应式Web应用，对TypeScript工程化与前端状态管理有实战经验。坚持Clean Code原则，熟悉Git协作流程与CI/CD部署，近期正深入Node.js后端开发以完善全栈能力。我的GitHub持续更新技术实践，欢迎通过Issue或PR进行技术探讨。'
    },

    footer: {
        showThemeBy: true,
        copyright: '©2025 All Rights Reserved <a href="https://xiaokolomi.cn" target="_blank">Hua\'s home</a>'
    }
}