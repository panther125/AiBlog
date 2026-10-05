# 即刻短文页设计（/essays/）

设计稿：`vibe_images/essays-page-mockup_1791190072921_e93c14f2.png`

## 1. 数据来源与抽取结果

旧站仓库 `panther125/panther125.github.io`（master，Hexo Butterfly 静态产物），页面 `essay/index.html`。
Vercel 域名与 github.com 在本机均不可直连，因此数据是从 `api.github.com/contents` 取回的 HTML 里解析的。

- 共 **10 条**，单页无分页（`<section class="timeline page-1">` 只有一组）。
- 日期取 `datetime` 属性（`2022-10-25`），**不能**用 `<time>` 的 ISO 串（`2022-10-24T16:00:00.000Z` 是 UTC 写法，会整体早一天）。
- 每条可能带：出处（`bber-info-from`）、配图（最多 1 张）、外链（`bber-content-link`）、B 站 iframe。

| # | 日期 | 正文 | 出处 | 媒体 |
|---|---|---|---|---|
| 1 | 2022-10-25 | 就算荧光棒成了拐杖，他也依旧是我的信仰。 | 琴酒 | 链接 → github.com/panther125 |
| 2 | 2024-10-25 | 我可以死在远方，但我不能没到过远方! | 琴酒 | 链接 → github.com/panther125 |
| 3 | 2022-10-23 | 当灵魂剥离肉身的一瞬间，你选择仰望天堂，还是回望人间。 | 《辩论赛》 | — |
| 4 | 2023-10-19 | 怪不得有人说青春是轰轰烈烈，轰轰烈烈这四个字一听就是团伙作案。 | 《云边有个小卖部》 | 图 `pic.imgdb.cn` |
| 5 | 2024-10-01 | 生活在其中有什么意义，自我？生命？答案是，因为你的存在，因为伟大的戏剧在继续，因为你可以奉献一首诗。 | 《死亡诗社》 | 图 `oss.gincode.icu` |
| 6 | 2023-10-19 | 人生是一场单程的旅行，即使有些遗憾，我们也没有从头再来的机会。与其纠结无法改变的过去，不如笑着去接受未来。 | 《爱情公寓》 | 图 `image.gincode.icu` |
| 7 | 2024-05-02 | welcome to the real world! | 《老友记》 | — |
| 8 | 2024-05-29 | 灵山大案 | 啊粥粥啊粥 | B 站 `BV1WE421F7mM` / cid 1557409429 |
| 9 | 2024-07-18 | 神之天平 | 你是我活过的证明 | B 站 `BV1Ps4y1g72W` / cid 1128918184 |
| 10 | 2024-10-12 | 喜剧之王单口季付航纯享版 | 《喜剧之王单口季》 | B 站 `BV1QmCdY8EmE` / cid 26364676459（**已下架**，见 §5） |

三条 B 站视频**不在** `src/data/videos.ts` 的 10 条里，属于短文页独有内容，必须保留。

## 2. 数据模型 `src/data/essays.ts`

```ts
export interface EssayItem {
	id: number;
	date: string; // YYYY-MM-DD，取旧站 datetime
	content: string; // 短文正文
	from?: string; // 出处：《死亡诗社》/ 啊粥粥啊粥
	image?: string; // 本地配图路径（public/assets/essays/*.webp）
	remoteImage?: string; // 旧站原图地址，仅备查，页面不渲染
	link?: { url: string; title?: string }; // 旧站两条指向 GitHub 的链接
	/** 内嵌 B 站视频；playable: false = 原片已下架，只留提示 */
	video?: { bvid: string; cid: number; page?: number; playable?: boolean; cover?: string };
}
export const essayItems: EssayItem[] = [/* 10 条 */];
```

页头统计（条数、年份跨度）由数组计算，不写死。

## 3. 页面结构

- 入口：导航「其他 → 即刻短文」，路由 `/essays/`，图标 `material-symbols:sticky-note-2`（已核对 `@iconify-json/material-symbols` 中存在，避免构建期 iconify 硬失败）。
- 开关：`siteConfig.featurePages.essays`（同步 `src/types/config.ts`），关闭时 `Astro.redirect("/404/")`，与 projects / bookmarks 一致。
- 骨架：`MainGridLayout` → 页头（标题 + 副标题 + 统计行）→ 按年份倒序分组（2024 / 2023 / 2022）。
- 每组：左侧年份轨（大号年份 + 竖线圆点，`position: sticky`），右侧 **CSS columns 双列瀑布流**。单列断点用主题自己的 `lg`（`<1024px`）——实测 870px 窗口下内容列只有 542px，双列会把卡片压到 181px、海报只剩 143px，看不清。`<768px` 再把年份轨从左侧竖排改成组上方横排。
- 卡片：`bg-(--card-bg)` + `border-(--line-divider)` + `rounded-(--radius-large)`；底部一行放火焰图标 + 出处 chip、日期、链接图标。
- **文字颜色只用 Tailwind 的 `text-90/60/50/40` 工具类**，不引入 `var(--text-*)`（链接收藏暗黑模式不可读的根因）。页内 `<style>` 若需取色，用 `:global(:root)` / `:global(:root.dark)` 两套变量。

## 4. 配图迁移

实测（浏览器内 `Image()` 探测，shell 出网受限）：

- `pic.imgdb.cn`：防盗链，直连挂起不报错；经 `images.weserv.nl` 代理可取回 → **下载到 `public/assets/essays/yunbian.webp`（1200×801）**，页面用本地文件。
- `oss.gincode.icu`、`image.gincode.icu`：域名已不可解析，代理同样失败 → 无法救回。数据里保留 `remote` 原址，页面不渲染图片位（正文照常显示）。
- 旧站头部的 `oss.gincode.icu` 视频横幅同理失效，不迁移。

## 5. 视频条目

默认显示 **B 站封面海报**（16:9，封面图 + 压暗渐变 + 白色播放图标），点击后才就地把按钮换成 `player.bilibili.com/player.html?bvid=…&cid=…&page=1&high_quality=1` 的 iframe（复用 `/videos/` 的「点击才加载」思路），首屏零第三方请求、不自动播放。

封面来源：`i0.hdslb.com` 的 `pic` 字段有防盗链，直接请求会挂起，需带 `Referer: https://www.bilibili.com/` 取回原图再用 sharp 转 webp，存到 `public/assets/essays/<bvid>.webp`，`video.cover` 记本地路径。`cover` 缺省时才回落成虚线占位 +「在 B 站播放」文字。

> 注意：运行时 `document.createElement("iframe")` 出来的元素拿不到 Astro 的 scoped 属性，`<style>` 里的 `.es-video iframe` 不会命中（表现是 iframe 停在默认的 300×150，还把容器撑高）。尺寸只能写内联 `style.cssText`。

2026-10-05 实测三条视频的可用性：

| bvid | `x/web-interface/view` | 外链播放器 |
| --- | --- | --- |
| `BV1WE421F7mM` | `code:0` | 正常，`<video>` 拿到 `blob:` 流 |
| `BV1Ps4y1g72W` | `code:0` | 正常，`<video>` 拿到 `blob:` 流 |
| `BV1QmCdY8EmE` | `code:-404 啥都木有` | 回落到 `s1.hdslb.com/.../media/error.mp4`，提示「请先登录或注册」；观看页跳转 `bilibili.com/?spm_id_from=…selfDef.errorpage` |

即第 10 条的原视频已从 B 站删除，不是嵌入权限问题。处理方式：`EssayItem.video` 增加 `playable?: boolean`（默认视为可播），该条标 `playable: false`，页面改为渲染一条窄条提示「原视频已从 B 站下架 · BV1QmCdY8EmE」，不再插入播放器、也不给会 404 的跳转链接。父页面跨域读不到 iframe 内部状态，无法自动检测，所以这个标记需要人工维护（新加视频先用 `api.bilibili.com/x/web-interface/view?bvid=` 验证）。

## 6. 验收标准

1. `npx astro check --minimumSeverity error` 保持 **0 errors**；`npx astro build` 通过。
2. `/essays/` 渲染出 10 条，年份分组为 2024(6) / 2023(2) / 2022(2)。
3. 明暗两种模式下逐元素读 `getComputedStyle`，正文/标签对比度 ≥ 4.5:1。注意主题的 `transition: all` 在自动化标签页里动画时钟不推进（`currentTime` 一直是 0），光等是等不到的：要么设好 `localStorage.theme` 后 reload，要么先 `document.getAnimations().forEach(a => a.finish())` 再读；对比度要把 `oklch()/oklab()` 用 canvas 光栅化成 r/g/b，不能正则取数字。
4. 移动端宽度单列不溢出；未点击视频时网络面板无 bilibili 请求；点击后只替换被点那张卡片的封面，其余卡片不受影响，且 iframe 尺寸与容器一致。
5. 导航「其他」子菜单出现「即刻短文」，且 `featurePages.essays=false` 时回 404。

实测（870px 窗口，`:4321`）：单列、卡片 378px、海报 338×191，2 张封面 + 1 条下架提示，「在 B 站播放」文字位 0 个；明暗两模式 72 个文本元素最低对比度 15.51:1；点击前 bilibili 请求 0，点击后 1 且 iframe 填满 340×191 容器；横向无溢出。

## 7. 明确不做

- 不做本地增删 / 验证码 / JSON 导入导出（与链接收藏不同，本页纯静态）。
- 不迁移旧站的「评论转发」按钮（依赖 anzhiyu 的评论体系，本站没有）。
- 不引入 fancybox 灯箱，图片直接内联展示。
