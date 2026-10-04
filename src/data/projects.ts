// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "ginbi",
		title: "GinBi 智能 BI 平台",
		description:
			"基于 Java 的智能 BI 平台，提供数据接入、可视化看板与商业智能分析能力，帮助快速搭建数据分析系统。",
		image: "",
		category: "web",
		techStack: ["Java", "Spring Boot", "BI", "ECharts"],
		status: "completed",
		sourceCode: "https://github.com/panther125/GinBi",
		startDate: "2023-01-01",
		featured: true,
		tags: ["Java", "BI", "Platform"],
	},
	{
		id: "travel-html",
		title: "Travel 网页设计作品",
		description:
			"网页设计期末作业，纯 HTML + CSS + 少量原生 JS 实现的多套布局方案，含在线预览 Demo。",
		image: "",
		category: "web",
		techStack: ["HTML", "CSS", "JavaScript"],
		status: "completed",
		sourceCode: "https://github.com/panther125/travel-html",
		visitUrl: "https://gorgeous-croquembouche-e50212.netlify.app/layout/test",
		startDate: "2026-01-01",
		featured: true,
		tags: ["Web Design", "HTML", "CSS"],
	},
	{
		id: "gincoder-frontend",
		title: "GinCoder OJ 在线判题系统",
		description:
			"基于 Vue 3 + Arco Design + Spring Boot 的全栈 OJ 在线判题系统，支持在线做题、代码提交与自动判题。",
		image: "",
		category: "web",
		techStack: ["Vue 3", "Arco Design", "Spring Boot", "TypeScript"],
		status: "completed",
		sourceCode: "https://github.com/panther125/GinCoder-frontend",
		startDate: "2024-01-01",
		featured: true,
		tags: ["Vue", "OJ", "Full Stack"],
	},
	{
		id: "daily-stock-analysis",
		title: "Daily Stock Analysis 股票智能分析",
		description:
			"LLM 驱动的 A/H/美股智能分析系统：多数据源行情 + 实时新闻 + LLM 决策仪表盘 + 多渠道推送，零成本定时运行。",
		image: "",
		category: "web",
		techStack: ["Python", "LLM", "Quant", "Data Analysis"],
		status: "in-progress",
		sourceCode: "https://github.com/panther125/daily_stock_analysis",
		startDate: "2026-01-01",
		featured: true,
		tags: ["LLM", "Stock", "Automation"],
	},
	{
		id: "silent-recipe",
		title: "Silent Recipe 剧本杀解密游戏",
		description:
			"沉默的游戏 —— 一款剧本杀解密游戏，使用 JavaScript 实现交互与剧情分支逻辑。",
		image: "",
		category: "web",
		techStack: ["JavaScript", "Game", "Canvas"],
		status: "completed",
		sourceCode: "https://github.com/panther125/silent-recipe",
		startDate: "2026-06-01",
		tags: ["Game", "JavaScript"],
	},
	{
		id: "ginso",
		title: "GinSo 聚合搜索平台",
		description:
			"基于 Java 的聚合搜索平台，统一检索多个数据源并提供归一化结果。",
		image: "",
		category: "web",
		techStack: ["Java", "Spring Boot", "Search"],
		status: "completed",
		sourceCode: "https://github.com/panther125/ginso",
		startDate: "2023-01-01",
		tags: ["Java", "Search"],
	},
	{
		id: "gincode",
		title: "GinCode CLI AI Agent 工具",
		description:
			"命令行类型的 AI Agent 工具，使用 Java 构建，辅助自动化开发流程。",
		image: "",
		category: "other",
		techStack: ["Java", "CLI", "AI Agent"],
		status: "completed",
		sourceCode: "https://github.com/panther125/GinCode",
		startDate: "2026-01-01",
		tags: ["Java", "CLI", "AI"],
	},
	{
		id: "ginrobot",
		title: "GinRobot 简易聊天机器人",
		description:
			"基于 Java 的简易 Web 端聊天机器人，提供基础对话交互能力。",
		image: "",
		category: "web",
		techStack: ["Java", "Servlet", "WebSocket"],
		status: "completed",
		sourceCode: "https://github.com/panther125/GinRobot",
		startDate: "2022-06-01",
		tags: ["Java", "Chatbot"],
	},
	{
		id: "thread-pool-monitor",
		title: "Thread Pool Monitor 线程池监控",
		description:
			"动态获取线程池运行数据，并支持在运行时调整线程池参数，辅助性能调优。",
		image: "",
		category: "other",
		techStack: ["Java", "Spring Boot", "Monitor"],
		status: "completed",
		sourceCode: "https://github.com/panther125/thread-pool-monitor",
		startDate: "2024-01-01",
		tags: ["Java", "Monitor"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
