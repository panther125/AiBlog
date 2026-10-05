# /about/ 改版设计：卡片拼贴式关于页

参考对象：`blog.kouseki.cn/about/`（Anzu/Hexo 系「关于」页的一版）。
本页只借它的**版式语言**，文案、数据、配色令牌全部沿用本站现有内容与自己实现；不复制对方文字，不盗链对方 CDN 图片。

## 1. 从参考页量到的版式特征

| 特征 | 实测值 | 本站落地值 |
| --- | --- | --- |
| 正文列宽 | 730px | 交给 `MainGridLayout`，不写死 |
| 卡片排列 | `.author-content` = flex 行，一行 2 张拼贴 | `display:grid; grid-template-columns: repeat(2, minmax(0,1fr))`，`<1024px` 转 1 列 |
| 圆角 | 12px | `--radius-large`（1rem），与全站卡片一致 |
| 内边距 | 16px 32px | `1.25rem 1.5rem`，窄屏 `1rem` |
| 阴影 | `0 8px 16px -4px rgba(44,45,48,.047)` | 同量级软阴影，深色模式改 `inset` 描边避免发灰 |
| 卡片标题 | 27px / 700 | `clamp(1.375rem, 1.1rem + 1vw, 1.75rem)` / 700 |
| 标题上方小字 | 极小 eyebrow 标签 | `text-40` + 字距 0.18em + 大写 |
| 头像区 | 头像居中，左右各一列胶囊标签 | 同结构，标签取 `profileConfig.bio` 拆词 + 技术栈 Top |
| 交互 | 卡片 hover 微抬起 + 图标缩放 | `translateY(-2px)`，`transition: .2s` |

结论：这套风格的核心是 **「eyebrow 小标 + 特大标题 + 圆角软阴影卡 + 两两拼贴」**，而不需要引入对方的任何素材。

## 2. 区块顺序与数据来源（全部是现成数据，零新增依赖）

1. **页头**：`关于我` + 一行 `profileConfig.bio`。
2. **头像带 `author-box`**：居头像（`assets/images/avatar.webp`）+ 左右 4/3 枚胶囊（Java / Spring Boot / Astro / 前端 · 摄影 / 番剧 / 摸鱼 —— 前四枚取 `getAllTechStack()` Top，后三枚写死为兴趣标签）。
3. **大字问候块**：三行 `title1 / title2 / title1` 结构（「Hi，我是」+「琴酒」+「一个把折腾当爱好的人」），`title2` 用主色下划线，不加打字机动效（已有 typewriter 在侧栏，避免重复）。
4. **卡片拼贴**（2 列）：
   - `站点数据`（statistic）：4 个大数字 —— 文章 6 · 项目 9 · 技术 22 · 建站 203 天，右下角一个箭头胶囊按钮跳 `/archive/`。数字全部由现有 `getSortedPosts/getProjectStats/getAllTechStack/siteStartDate` 计算，不写死。
   - `技术栈`（skills）：图标马赛克（`skill-icon` 圆形网格）+ 下面一行 skill 名称 chips，取 `getAllTechStack()`。图标沿用 `/skills/` 删除前那套 `mdi:`/`simple-icons:` 名字；新增图标必须先核对 `node_modules/@iconify-json/<set>/icons.json`。
   - `最近一年写作活跃`：保留现有 GitHub 风热力图（`activityWeeks`），只把它塞进卡片壳子里。
   - `进行中的项目`（careers 变体）：`projectsData.filter(status==="in-progress")`，圆点 + 名称 + 起始月。
   - `最近在写`：`recentPosts` 前 5 条，标题 + 日期，整行可点。
   - `一句话`（maxim）：大字引用卡，背景放一个超大半透明 iconify 图标（`mdi:lightning-bolt`），右侧一行出处。
   - `找到我`：`profileConfig.links`（GitHub / Bilibili）渲染成胶囊按钮组。
5. **不做**：对方那张「地图」卡（需要地理底图素材，收益低）、照片卡、番剧/游戏进度卡（`anime` 功能本身已关闭）。

## 3. 实现约束（这条是防踩坑，必须遵守）

- **颜色只用现有令牌**：`--primary / --page-bg / --card-bg / --card-bg-transparent / --line-divider / --btn-content / --radius-large`；文字灰阶在模板里用 Tailwind 的 `text-90/70/60/40` 工具类。**`.astro <style>` 里不能出现 `var(--text-*)`**（本站不存在这类变量，链接收藏页暗黑模式不可读就是这么来的）。要在 `<style>` 里取灰阶，就自己声明 `:global(:root)` / `:global(:root.dark)` 两套局部变量。
- 阴影、渐变这类只给亮色写的值，深色模式必须另给一套，否则卡片在 `oklch(0.23)` 底上会糊成一片。
- 卡片底色统一 `--card-bg`，**不用背景图当卡片底**（对方那套依赖一批外链图，失效即灰块）。
- 单列断点用 `1023px`（即刻短文页的教训：`<lg` 时正文列只有 ~540px，两列会把内容压瘪）。
- 不新增 npm 依赖；热力图、图标都用现有实现。

## 4. 验收标准

1. `npx astro build` 通过；`npx astro check --minimumSeverity error` 中 `about.astro` **0 错误**（其他文件的既有报错不属于本次）。
2. 明暗两模式下，页内每个文本元素对比度 ≥ 4.5:1（用 canvas 光栅化 `oklch` + 祖先背景合成来量，先 `document.getAnimations().forEach(a => a.finish())` 再读）。
3. 1280px：卡片 2 列；870px：全部 1 列且横向不溢出。
4. 网络面板：无本站域名之外的图片请求（不盗链）。
5. 数字与真实数据一致：文章/项目/技术数与 `getSortedPosts()`、`projectsData`、`getAllTechStack()` 吻合，建站天数为 `siteStartDate` 到今天的实际差值。

## 5. 交付物

- 本设计文档
- `docs/mockups/about-mosaic.html`：可双击直接打开的静态样机（带明暗切换），用于确认观感；确认后再改写 `src/pages/about.astro`。
