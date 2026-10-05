/**
 * 即刻短文数据
 *
 * 来源：旧博客（panther125.github.io 的 /essay/ 页面，Hexo Butterfly 静态产物）迁移而来。
 * 日期取旧站 <time datetime> 属性（其 ISO 串是 UTC 写法，直接用会整体早一天）。
 * 配图只有《云边有个小卖部》一张还能取回（原图床防盗链，经 images.weserv.nl 转存为本地 webp）；
 * oss.gincode.icu / image.gincode.icu 两个图床域名已失效，remoteImage 保留原址以备日后恢复。
 */

export interface EssayItem {
	/** 列表内的唯一序号 */
	id: number;
	/** 日期，YYYY-MM-DD */
	date: string;
	/** 短文正文 */
	content: string;
	/** 出处：《死亡诗社》、UP 主名，或作者自己 */
	from?: string;
	/** 已转存的本地配图路径 */
	image?: string;
	/** 旧站原图地址（可能已失效） */
	remoteImage?: string;
	/** 正文附带的外链 */
	link?: { url: string; title?: string };
	/** 内嵌的 B 站视频；playable 为 false 表示原视频已下架，只留提示不给播放器 */
	video?: { bvid: string; cid: number; page?: number; playable?: boolean; cover?: string };
}

export const essayItems: EssayItem[] = [
	{
		id: 1,
		date: "2022-10-25",
		content: "就算荧光棒成了拐杖，他也依旧是我的信仰。",
		from: "琴酒",
		link: { url: "https://github.com/panther125", title: "我的 GitHub" },
	},
	{
		id: 2,
		date: "2024-10-25",
		content: "我可以死在远方，但我不能没到过远方!",
		from: "琴酒",
		link: { url: "https://github.com/panther125", title: "我的 GitHub" },
	},
	{
		id: 3,
		date: "2022-10-23",
		content: "当灵魂剥离肉身的一瞬间，你选择仰望天堂，还是回望人间。",
		from: "《辩论赛》",
	},
	{
		id: 4,
		date: "2023-10-19",
		content: "怪不得有人说青春是轰轰烈烈，轰轰烈烈这四个字一听就是团伙作案。",
		from: "《云边有个小卖部》",
		image: "/assets/essays/yunbian.webp",
		remoteImage: "https://pic.imgdb.cn/item/663283590ea9cb14031c88d7.jpg",
	},
	{
		id: 5,
		date: "2024-10-01",
		content: "生活在其中有什么意义，自我？生命？答案是，因为你的存在，因为伟大的戏剧在继续，因为你可以奉献一首诗。",
		from: "《死亡诗社》",
		remoteImage: "https://oss.gincode.icu/pics/0b22a81f31c302192e76853d0c8cf4ddfb44e7b7.jpg",
	},
	{
		id: 6,
		date: "2023-10-19",
		content: "人生是一场单程的旅行，即使有些遗憾，我们也没有从头再来的机会。与其纠结无法改变的过去，不如笑着去接受未来。",
		from: "《爱情公寓》",
		remoteImage: "https://image.gincode.icu/file/dced898a0843c091b5396.jpg",
	},
	{
		id: 7,
		date: "2024-05-02",
		content: "welcome to the real world!",
		from: "《老友记》",
	},
	{
		id: 8,
		date: "2024-05-29",
		content: "灵山大案",
		from: "啊粥粥啊粥",
		video: { bvid: "BV1WE421F7mM", cid: 1557409429, cover: "/assets/essays/BV1WE421F7mM.webp" },
	},
	{
		id: 9,
		date: "2024-07-18",
		content: "神之天平",
		from: "你是我活过的证明",
		video: { bvid: "BV1Ps4y1g72W", cid: 1128918184, cover: "/assets/essays/BV1Ps4y1g72W.webp" },
	},
	{
		id: 10,
		date: "2024-10-12",
		content: "喜剧之王单口季付航纯享版",
		from: "《喜剧之王单口季》",
		video: { bvid: "BV1QmCdY8EmE", cid: 26364676459, playable: false },
	},
];

export interface EssayYearGroup {
	year: string;
	items: EssayItem[];
}

/** 按日期倒序，再按年份分组（年份同样倒序） */
export function groupEssaysByYear(): EssayYearGroup[] {
	const sorted = [...essayItems].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.id - a.id));
	const groups = new Map<string, EssayItem[]>();
	for (const item of sorted) {
		const year = item.date.slice(0, 4);
		const list = groups.get(year);
		if (list) list.push(item);
		else groups.set(year, [item]);
	}
	return [...groups.entries()].map(([year, items]) => ({ year, items }));
}

/** 页头统计：条数与年份跨度，全部由数据算出 */
export function getEssayStats() {
	const dates = essayItems.map((item) => item.date).sort();
	const years = new Set(essayItems.map((item) => item.date.slice(0, 4)));
	return {
		total: essayItems.length,
		from: dates[0]?.slice(0, 4) ?? "",
		to: dates[dates.length - 1]?.slice(0, 4) ?? "",
		yearCount: years.size,
	};
}

/** B 站外链，用于未播放时跳转 */
export function bilibiliUrl(video: NonNullable<EssayItem["video"]>) {
	return `https://www.bilibili.com/video/${video.bvid}/?p=${video.page ?? 1}`;
}

/** B 站嵌入式播放器地址，点击后才写入 iframe */
export function bilibiliEmbedUrl(video: NonNullable<EssayItem["video"]>) {
	const params = new URLSearchParams({
		isOutside: "true",
		high_quality: "true",
		danmaku: "0",
		autoplay: "false",
		bvid: video.bvid,
		cid: String(video.cid),
		page: String(video.page ?? 1),
	});
	return `https://player.bilibili.com/player.html?${params.toString()}`;
}

/**
 * 首页轮播条（EssayCarousel）用的兼容视图：它按 text 读正文。
 * 数据仍以 essayItems 为唯一来源，这里只做字段改名，不另存一份。
 */
export const essaysData = essayItems.map((item) => ({
	text: item.content,
	from: item.from,
}));
