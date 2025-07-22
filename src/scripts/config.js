

import avatar from "@/assets/avatar.jpg"
import Friend_Image01 from "@/photo/friend/mizhiyun.jpg"
import Photos_Image01 from "@/photo/IMG_20240211_191014.jpg"
import Photos_Image02 from "@/photo/IMG_20240209_145206.jpg"

import OutSor_Image_01 from "@/photo/outsor/PixPin_2025-02-02_23-16-24.png"
import OutSor_Image_02 from "@/photo/outsor/PixPin_2025-02-02_23-41-10.png"
import OutSor_Image_03 from "@/photo/outsor/PixPin_2025-02-02_23-49-41.png"
import OutSor_Image_04 from "@/photo/outsor/PixPin_2025-02-03_12-23-26.png"
import OutSor_Image_05 from "@/photo/outsor/PixPin_2025-07-11_10-16-22.png"

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
            name: 'YunChat',
            repo: 'https://github.com/yichen9247/HandSock',
            desc: '一款有趣且开源的聊天应用，基于 Springboot、Vite、TypeScript、Redis、Socket.IO、Kotlin等技术开发'
        }, {
            name: 'Desktop Clock',
            repo: 'https://github.com/yichen9247/Desktop-Clock',
            desc: '由于工作室里多出了一台电脑，我一直在思考如何更好地利用它，如果只是让它闲置，未免有些浪费，于是，我决定亲自动手编写一个既美观又实用的桌面时钟'
        }]
    },

    website: {
        name: '站点',
        data: [{
            name: 'YunChat演示站点',
            link: 'https://im.yunair.cn',
            desc: '一款有趣且开源的聊天应用，基于 Springboot、Vite、TypeScript、Redis、Socket.IO、Kotlin等技术开发'
        }, {
            name: 'YunChat官方文档',
            link: 'https://doc.handsock.xiaokolomi.cn',
            desc: '项目YunChat的官方文档，不会搭建或者想要了解本项目的可以进入文档查看'
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
        }, {
            name: '黑名单管理系统',
            desc: '技术栈：Vite + Java + Springboot（全栈）',
            image: OutSor_Image_05,
        }]
    },

    mySkill: {
        name: '技能',
        data: [{
            name: '前端技术',
            data: ['Html5', 'CSS3', 'JavaScript', 'Vue', 'React', 'PHP', 'Vite', 'NodeJS', 'NextJS', 'Ajax', 'JQuery', 'Echarts', 'TypeScript']
        }, {
            name: '后端技术',
            data: ['Spring', 'PHP', 'NodeJs', 'Redis', 'MySQL', 'MyBatis', 'RestFul API', 'Java', 'Kotlin']
        }, {
            name: '软件开发',
            data: ['Java', 'Kotlin', 'Android', 'HarmonyOS', 'JetPack Compose', 'Uniapp', 'ArkTs', 'ArkUI', 'Compose Desktop']
        }, {
            name: '软件设计',
            data: ['Adobe XD', 'Axure RP', 'PhotoShop']
        }, {
            name: '编程语言',
            data: ['Java', 'Kotlin', 'Python', 'PHP', 'C', 'Html5', 'CSS3', 'JavaScript', 'TypeScript', 'GO（基础）', 'C++（基础）', 'Rust（基础）']
        }, {
            name: '其它技术',
            data: ['WebSocket', 'Socket.IO', 'Git（基础）', 'Linux（基础）', 'Gradle（基础）', 'Maven（基础）', 'Docker（基础）', 'AI+']
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
        }, {
            name: '青岛米执云网络科技',
            link: 'https://www.mizhiyun.cloud',
            src: Friend_Image01,
            desc: '一家专注于APP、web、安卓/ios、小程序开发，技术咨询服务以及技术支持服务的公司'
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
        data: '各位好，我是Hua，具备全栈开发能力的大一新生，主攻现代前端工程化方向。擅长使用Vue/React生态体系（Vite/Next.js）构建响应式Web应用，对TypeScript工程化与前端状态管理有实战经验。坚持Clean Code原则，熟悉Git协作流程与CI/CD部署，近期正深入Node.js后端开发以完善全栈能力。我的GitHub持续更新技术实践，欢迎通过Issue或PR进行技术探讨。'
    },

    footer: {
        showIcp: true,
        icpText: "蜀ICP备2025133319号"
    }
}