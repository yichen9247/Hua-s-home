import avatar from "@/assets/avatar.jpg"
import Photos_Image01 from "@/photo/IMG_20240211_191014.jpg"
import Photos_Image02 from "@/photo/IMG_20240209_145206.jpg"

import OutSor_Image_01 from "@/photo/outsor/PixPin_2025-02-02_23-16-24.png"
import OutSor_Image_02 from "@/photo/outsor/PixPin_2025-02-02_23-41-10.png"
import OutSor_Image_03 from "@/photo/outsor/PixPin_2025-02-02_23-49-41.png"
import OutSor_Image_04 from "@/photo/outsor/PixPin_2025-02-03_12-23-26.png"
import OutSor_Image_05 from "@/photo/outsor/PixPin_2025-07-11_10-16-22.png"

import Photos_2025_Image01 from "@/photo/2025/IMG_20250823_122611.jpg"
import Photos_2025_Image02 from "@/photo/2025/IMG_20250823_132656.jpg"
import Photos_2025_Image03 from "@/photo/2025/IMG_20250823_185610.jpg"
import Photos_2025_Image04 from "@/photo/2025/IMG_20250823_183837.jpg"
import Photos_2025_Image05 from "@/photo/2025/IMG_20250812_150517.jpg"
import Photos_2025_Image06 from "@/photo/2025/IMG_20250812_150938.jpg"

import Photos_skills_Image01 from "@/photo/skills-competition/Image_1756006328108.jpg"
import Photos_skills_Image02 from "@/photo/skills-competition/Image_1756006318405.jpg"
import Photos_skills_Image03 from "@/photo/skills-competition/Image_1756006291470.jpg"
import Photos_skills_Image04 from "@/photo/skills-competition/Image_1756006307927.jpg"
import Photos_skills_Image05 from "@/photo/skills-competition/Image_1756107605745.jpg"
import Photos_skills_Image06 from "@/photo/skills-competition/Image_1756107608390.jpg"
import Photos_skills_Image07 from "@/photo/skills-competition/Image_1764924393064.jpg"

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
        email: '865252486@qq.com',
        description: '一名大一全栈学生，擅长使用Java、Node等开发技术'
    },

    project: {
        name: '项目',
        data: [{
            name: 'YunChat',
            repo: 'https://github.com/yichen9247/HandSock',
            desc: '一款有趣且开源的聊天应用，基于 Springboot、Vite、TypeScript、Redis、Socket.IO、Kotlin等技术开发'
        }, {
            name: 'LoginCqcfe',
            repo: 'https://github.com/yichen9247/LoginCqcfe',
            desc: '重庆财经职业学院校园网络一键登录系统，非官方系统，仅用于学习和研究'
        }, {
            name: 'Desktop Clock',
            repo: 'https://github.com/yichen9247/Desktop-Clock',
            desc: '由于工作室里多出了一台电脑，我一直在思考如何更好地利用它，如果只是让它闲置，未免有些浪费，于是，我决定亲自动手编写一个既美观又实用的桌面时钟'
        },  {
            name: 'AwardEngine',
            repo: 'https://github.com/yichen9247/AwardEngine',
            desc: '解决传统抽奖痛点，追求极致公平公正，满足多元场景需求，提供定制化服务，提升活动效率与体验'
        }, {
            name: 'DailyHot Pro',
            repo: 'https://github.com/yichen9247/DailyHot-Pro',
            desc: '一款多平台热点聚合工具，旨在帮助用户一站式获取全网主流平台的实时热门内容，无需逐个打开应用即可快速掌握当下舆论焦点、社会热点与兴趣动态'
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
            link: 'https://doc.im.xiaokolomi.cn',
            desc: '项目YunChat的官方文档，不会搭建或者想要了解本项目的可以进入文档查看'
        },  {
            name: '聚全网每日热榜',
            link: 'https://hot.xiaokolomi.cn',
            desc: '一款多平台热点聚合工具，旨在帮助用户一站式获取全网主流平台的实时热门内容，无需逐个打开应用即可快速掌握当下舆论焦点、社会热点与兴趣动态'
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
            desc: '技术栈：Vite + Springboot（全栈）',
            image: OutSor_Image_05,
        }]
    },

    mySkill: {
        name: '技能',
        data: [{
            name: '前端技术',
            data: ['JavaScript', 'TypeScript', 'PHP、VITE', 'Vue、React', 'HTML5、CSS3', 'Node.JS、Next.JS']
        }, {
            name: '后端技术',
            data: ['Restful Api', 'Java、Kotlin', 'MySql、Redis', 'Spring、MyBatis']
        }, {
            name: '软件开发',
            data: ['Java、Kotlin', 'ArkTs、ArkUi', 'Uniapp、Flutter', 'Jetpack Compose', 'Compose Desktop', 'Android、HarmonyOS']
        }, {
            name: '软件设计',
            data: ['Axure RP', 'Adobe XD', 'PhotoShop']
        }, {
            name: '编程语言',
            data: ['PHP', 'C/C++', 'Python', 'JavaScript', 'TypeScript', 'Java、Kotlin', 'HTML5、CSS3']
        }, {
            name: '其它技术',
            data: ['Jmeter', 'Appium', 'Git（Gitea）', 'Linux、Docker', 'Gradle、Maven', 'AI（Dify、Ollama）', 'WebSocket（Socket.IO）']
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
            alt: "一带一路金砖全国一等奖 - 高职组",
            src: Photos_skills_Image07
        }, {
            alt: '重庆市江北国际机场 - 荣誉接机',
            src: Photos_skills_Image06
        }, {
            alt: '重庆市江北国际机场 - 荣誉接机',
            src: Photos_skills_Image05
        }, {
            alt: '世界职业院校技能大赛 - 中职组',
            src: Photos_skills_Image04
        }, {
            alt: '世界职业院校技能大赛 - 中职组',
            src: Photos_skills_Image03
        }, {
            alt: '世界职业院校技能大赛 - 中职组',
            src: Photos_skills_Image02
        }, {
            alt: '世界职业院校技能大赛 - 中职组',
            src: Photos_skills_Image01
        }, {
            alt: '2025年8月23日 - 南京玄武湖',
            src: Photos_2025_Image01
        }, {
            alt: '2025年8月23日 - 南京玄武湖',
            src: Photos_2025_Image02
        }, {
            alt: '2025年8月23日 - 南京夫子庙',
            src: Photos_2025_Image03
        }, {
            alt: '2025年8月23日 - 南京夫子庙',
            src: Photos_2025_Image04
        }, {
            alt: '2025年8月12日 - 大连星海广场',
            src: Photos_2025_Image05
        }, {
            alt: '2025年8月12日 - 大连星海广场',
            src: Photos_2025_Image06
        }, {
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
        data: '各位好，我是Hua，具备全栈开发能力的大一学生，主攻现代前端工程化方向，擅长使用Vue/React生态体系构建响应式Web应用，对TypeScript工程化与前端状态管理有实战经验。坚持Clean Code原则，熟悉Git协作流程与CI/CD部署，近期正深入Java后端开发以完善全栈能力。我的GitHub持续更新技术实践，欢迎通过Issue或PR进行技术探讨。'
    },

    footer: {
        showIcp: true,
        icpText: "蜀ICP备2025133319号"
    }
}