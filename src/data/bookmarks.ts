// 链接收藏数据配置文件
// 用于管理「链接收藏」页面的收藏链接，欢哥可直接在此增删改

export interface Bookmark {
	id: string;
	title: string;
	description: string;
	url: string;
	category: string;
	icon?: string; // 可选 iconify 图标名，例如 "mdi:github"，缺省使用 mdi:link
	logo?: string; // 站点图标 URL，优先于 icon 渲染（页面「添加链接」自动解析后写入）
	tags?: string[];
	alias?: string; // 拼音首字母/别名速查，用于快捷搜索（如 "gh" → GitHub、"blbl" → 哔哩哔哩）
}

export const bookmarksData: Bookmark[] = [
	// ===== 开发工具 =====
	{
		id: "github",
		title: "GitHub",
		description: "全球最大的代码托管与开源协作平台，这里存放着我所有的项目仓库。",
		url: "https://github.com/panther125",
		category: "开发工具",
		icon: "mdi:github",
		tags: ["代码", "开源", "协作"],
		alias: "gh git code daima",
	},
	{
		id: "mdn",
		title: "MDN Web Docs",
		description: "最权威的 Web 技术文档，HTML / CSS / JavaScript 的官方参考手册。",
		url: "https://developer.mozilla.org/zh-CN/",
		category: "开发工具",
		icon: "mdi:book-open-variant",
		tags: ["文档", "前端", "参考"],
		alias: "mdn docs wendang cankao",
	},
	{
		id: "stackoverflow",
		title: "Stack Overflow",
		description: "程序员问答社区，几乎能找到任何编程问题的答案。",
		url: "https://stackoverflow.com/",
		category: "开发工具",
		icon: "mdi:stack-overflow",
		tags: ["问答", "排错", "社区"],
		alias: "so sf paincuo wenda baocuo",
	},
	{
		id: "npm",
		title: "npm",
		description: "Node.js 包管理仓库，前端与 Node 生态的基石。",
		url: "https://www.npmjs.com/",
		category: "开发工具",
		icon: "mdi:package-variant",
		tags: ["包管理", "依赖", "前端"],
		alias: "npm node baoguanli yilai",
	},
	{
		id: "vite",
		title: "Vite",
		description: "下一代前端构建工具，极速冷启动与热更新，本博客即基于它构建。",
		url: "https://vitejs.dev/",
		category: "开发工具",
		icon: "mdi:lightning-bolt",
		tags: ["构建", "前端", "工具"],
		alias: "vite goujian dabao kaisu",
	},

	// ===== 学习资源 =====
	{
		id: "ruanyifeng",
		title: "阮一峰的网络日志",
		description: "阮一峰老师的技术博客，ES6、正则表达式、科技周刊等内容深入浅出。",
		url: "https://www.ruanyifeng.com/blog/",
		category: "学习资源",
		icon: "mdi:book-open-page-variant",
		tags: ["博客", "前端", "周刊"],
		alias: "ryf ruanyifeng zhoukan boke",
	},
	{
		id: "liaoxuefeng",
		title: "廖雪峰的官方网站",
		description: "通俗易懂的 Python、JavaScript、Git 等编程语言教程。",
		url: "https://www.liaoxuefeng.com/",
		category: "学习资源",
		icon: "mdi:school",
		tags: ["教程", "Python", "Git"],
		alias: "lxf liaoxuefeng python git jiaocheng",
	},
	{
		id: "freecodecamp",
		title: "freeCodeCamp",
		description: "免费的交互式编程学习平台，覆盖 Web 全栈与数据科学。",
		url: "https://www.freecodecamp.org/",
		category: "学习资源",
		icon: "mdi:code-tags",
		tags: ["免费", "编程", "实战"],
		alias: "fcc freecodecamp bianheng shizhan",
	},
	{
		id: "runoob",
		title: "菜鸟教程",
		description: "入门友好的中文编程教程，涵盖各类语言与技术速查。",
		url: "https://www.runoob.com/",
		category: "学习资源",
		icon: "mdi:book",
		tags: ["教程", "速查", "入门"],
		alias: "cn cainiao jiaocheng sucha rumen",
	},

	// ===== 设计灵感 =====
	{
		id: "dribbble",
		title: "Dribbble",
		description: "全球设计师作品社区，UI / 动效 / 品牌设计的灵感来源。",
		url: "https://dribbble.com/",
		category: "设计灵感",
		icon: "mdi:palette",
		tags: ["UI", "灵感", "设计"],
		alias: "db dribbble ui linggan sheji",
	},
	{
		id: "zcool",
		title: "站酷 ZCOOL",
		description: "国内设计师交流平台，插画、字体、品牌与网页设计案例丰富。",
		url: "https://www.zcool.com.cn/",
		category: "设计灵感",
		icon: "mdi:brush",
		tags: ["插画", "字体", "设计"],
		alias: "zk zcool chahua ziti",
	},
	{
		id: "undraw",
		title: "unDraw",
		description: "可免费商用、可自定义配色的开源 SVG 插画库，配图神器。",
		url: "https://undraw.co/",
		category: "设计灵感",
		icon: "mdi:draw",
		tags: ["插画", "SVG", "免费"],
		alias: "undraw svg chahua mianfei",
	},

	// ===== 效率工具 =====
	{
		id: "tinypng",
		title: "TinyPNG",
		description: "智能压缩 PNG / JPEG / WebP 图片，几乎无损且体积骤减。",
		url: "https://tinypng.com/",
		category: "效率工具",
		icon: "mdi:image",
		tags: ["图片", "压缩", "优化"],
		alias: "tinypng yasuo tupian youhua",
	},
	{
		id: "regex101",
		title: "regex101",
		description: "在线正则表达式测试与调试工具，实时高亮匹配结果。",
		url: "https://regex101.com/",
		category: "效率工具",
		icon: "mdi:code-brackets",
		tags: ["正则", "调试", "工具"],
		alias: "regex zhengze tiaoshi zzbds",
	},

	// ===== 社区社交 =====
	{
		id: "bilibili",
		title: "哔哩哔哩",
		description: "我的 B 站主页，分享技术教程与生活向视频。",
		url: "https://space.bilibili.com/322993153",
		category: "社区社交",
		icon: "mdi:television",
		tags: ["视频", "UP主", "社区"],
		alias: "blbl bilibili bzhan shipin",
	},
	{
		id: "sspai",
		title: "少数派",
		description: "聚焦效率工具与数字生活的优质中文科技社区。",
		url: "https://sspai.com/",
		category: "社区社交",
		icon: "mdi:message-text",
		tags: ["效率", "数字生活", "评测"],
		alias: "ssp sspai shaoshupai xiaolv pingce",
	},
];

// 获取所有分类（按首次出现顺序，不重复）
export const getBookmarkCategories = (): string[] => {
	const seen: string[] = [];
	for (const b of bookmarksData) {
		if (!seen.includes(b.category)) seen.push(b.category);
	}
	return seen;
};

// 拼接可搜索文本（标题 + 别名 + 描述 + URL + 分类 + 标签）
export const getBookmarkSearchText = (b: Bookmark): string =>
	[b.title, b.alias || "", b.description, b.url, b.category, (b.tags || []).join(" ")]
		.join(" ")
		.toLowerCase();
