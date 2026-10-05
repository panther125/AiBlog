/**
 * 推荐视频数据
 *
 * 来源：从旧博客（panther125.github.io 的 /video/ 页面）迁移而来，
 * 播放地址与 aid / bvid / cid 均保持原样，封面图已下载到 public/images/videos/。
 */

export interface VideoItem {
	/** 列表内的唯一序号，用于定位播放器 */
	id: number;
	/** 视频标题 */
	title: string;
	/** 一句话推荐语（可为空） */
	desc: string;
	/** B 站 av 号 */
	aid: number;
	/** B 站 BV 号（同时用作本地封面文件名） */
	bvid: string;
	/** B 站 cid */
	cid: number;
	/** 分 P，缺省为 1 */
	page?: number;
	/** 是否为外站嵌入（需要 isOutside=true） */
	outside?: boolean;
	/** 本地封面路径 */
	cover: string;
	/** B 站原视频地址 */
	url: string;
	/** 分类，用于筛选 */
	category: string;
}

export const videosData: VideoItem[] = [
	{
		id: 0,
		title: "盗墓笔记",
		desc: "盗墓笔记4个版本的王胖子。",
		aid: 249060846,
		bvid: "BV1tv411J7qk",
		cid: 366999910,
		page: 1,
		cover: "/images/videos/BV1tv411J7qk.jpg",
		url: "https://www.bilibili.com/video/BV1tv411J7qk",
		category: "影视",
	},
	{
		id: 1,
		title: "永不研弃",
		desc: "只要你有考研的念头你就不甘心放弃。",
		aid: 251135452,
		bvid: "BV1mv411M7t7",
		cid: 427707994,
		page: 1,
		cover: "/images/videos/BV1mv411M7t7.jpg",
		url: "https://www.bilibili.com/video/BV1mv411M7t7",
		category: "励志",
	},
	{
		id: 2,
		title: "friends",
		desc: "这就是我喜欢老友记的原因。",
		aid: 689271592,
		bvid: "BV1Km4y1w7wW",
		cid: 868225630,
		page: 1,
		cover: "/images/videos/BV1Km4y1w7wW.jpg",
		url: "https://www.bilibili.com/video/BV1Km4y1w7wW",
		category: "影视",
	},
	{
		id: 3,
		title: "Tokyo",
		desc: "已识乾坤大，犹怜草木青",
		aid: 309745214,
		bvid: "BV1FA411m7e3",
		cid: 1016771343,
		page: 1,
		cover: "/images/videos/BV1FA411m7e3.jpg",
		url: "https://www.bilibili.com/video/BV1FA411m7e3",
		category: "生活",
	},
	{
		id: 4,
		title: "辩论赛",
		desc: "武侠是不是一场梦",
		aid: 501746464,
		bvid: "BV1zN411X7JV",
		cid: 296870431,
		page: 1,
		cover: "/images/videos/BV1zN411X7JV.jpg",
		url: "https://www.bilibili.com/video/BV1zN411X7JV",
		category: "思辨",
	},
	{
		id: 5,
		title: "“尸祖降臣，来赴约了”",
		desc: "“尸祖降臣，来赴约了”",
		aid: 228165185,
		bvid: "BV1vh411L73b",
		cid: 1117986368,
		page: 1,
		cover: "/images/videos/BV1vh411L73b.jpg",
		url: "https://www.bilibili.com/video/BV1vh411L73b",
		category: "动画",
	},
	{
		id: 6,
		title: "余华老师叫你拒绝焦虑",
		desc: "",
		aid: 830867788,
		bvid: "BV1H34y1K7TV",
		cid: 1263230968,
		page: 1,
		cover: "/images/videos/BV1H34y1K7TV.jpg",
		url: "https://www.bilibili.com/video/BV1H34y1K7TV",
		category: "励志",
	},
	{
		id: 7,
		title: "致：最好的钱德勒，最好的马修派瑞",
		desc: "",
		aid: 962662334,
		bvid: "BV1cH4y1r72a",
		cid: 1314660143,
		page: 1,
		cover: "/images/videos/BV1cH4y1r72a.jpg",
		url: "https://www.bilibili.com/video/BV1cH4y1r72a",
		category: "影视",
	},
	{
		id: 8,
		title: "我还想让火影上一次首页！！！",
		desc: "",
		aid: 1905755640,
		bvid: "BV14S411N7ny",
		cid: 1595469813,
		page: 1,
		outside: true,
		cover: "/images/videos/BV14S411N7ny.jpg",
		url: "https://www.bilibili.com/video/BV14S411N7ny",
		category: "动画",
	},
];

/** 构造 B 站播放器嵌入地址 */
export function getVideoEmbedUrl(v: VideoItem): string {
	const params = new URLSearchParams();
	if (v.outside) params.set("isOutside", "true");
	params.set("aid", String(v.aid));
	params.set("bvid", v.bvid);
	params.set("cid", String(v.cid));
	params.set("p", String(v.page ?? 1));
	params.set("high_quality", "1");
	params.set("danmaku", "0");
	return `https://player.bilibili.com/player.html?${params.toString()}`;
}

/** 所有分类（保持数据中出现顺序去重） */
export function getVideoCategories(): string[] {
	const seen: string[] = [];
	for (const v of videosData) {
		if (!seen.includes(v.category)) seen.push(v.category);
	}
	return seen;
}
