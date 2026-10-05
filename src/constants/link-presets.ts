import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: "Home",
		url: "/",
		icon: "material-symbols:home",
	},
	[LinkPreset.Archive]: {
		name: "Archive",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	[LinkPreset.Anime]: {
		name: "Anime",
		url: "/anime/",
		icon: "material-symbols:movie",
	},
	[LinkPreset.Projects]: {
		name: "Projects",
		url: "/projects/",
		icon: "material-symbols:work",
	},
};

