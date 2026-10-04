import { visit } from "unist-util-visit";

/**
 * 为 Markdown 中的外链图片添加 referrerpolicy="no-referrer"。
 *
 * 很多图床（bilibili/hdslb.com、picsum.photos 等）会校验 Referer 防盗链，
 * 直接 <img src="https://..."> 引用时返回 403，导致文章配图不显示。
 * 加上 no-referrer 后浏览器不发送 Referer，图片即可正常加载，
 * 文章内点击放大的灯箱（Fancybox）也能正常展示这些图。
 */
export function rehypeExternalImage() {
	return (tree) => {
		visit(tree, "element", (node) => {
			if (node.tagName !== "img" || !node.properties) return;
			const src = node.properties.src;
			// rehype 可能把 src 解析成 { url } 对象，取字符串形式
			const srcStr =
				typeof src === "string"
					? src
					: src && typeof src === "object" && "url" in src
						? String(src.url)
						: "";
			if (srcStr.startsWith("http://") || srcStr.startsWith("https://")) {
				node.properties.referrerpolicy = "no-referrer";
			}
		});
	};
}
