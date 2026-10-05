import { I18nKey, type I18nKey as I18nKeyType } from "./i18nKey";

const EN: Record<I18nKeyType, string> = {
	// Generic
	[I18nKey.year]: "year",
	[I18nKey.month]: "month",
	[I18nKey.day]: "day",
	[I18nKey.hour]: "hour",
	[I18nKey.minute]: "minute",
	[I18nKey.second]: "second",
	[I18nKey.noData]: "No data",

	// Counts / labels
	[I18nKey.postCount]: "post",
	[I18nKey.postsCount]: "posts",
	[I18nKey.minuteCount]: "minute",
	[I18nKey.minutesCount]: "minutes",

	// Last modified
	[I18nKey.lastModifiedPrefix]: "Last modified",
	[I18nKey.lastModifiedOutdated]: "This post may be outdated.",

	// Nav
	[I18nKey.navMy]: "My",
	[I18nKey.navAbout]: "About",
	[I18nKey.navOthers]: "Others",

	// Sections/pages
	[I18nKey.anime]: "Anime",
	[I18nKey.devices]: "Devices",
	[I18nKey.projects]: "Projects",
	[I18nKey.friends]: "Friends",

	// Atom/RSS
	[I18nKey.atomDescription]: "Subscribe via Atom feed.",
	[I18nKey.atomLink]: "Atom link",
	[I18nKey.atomCopyToReader]: "Copy it to your feed reader",
	[I18nKey.atomCopyLink]: "Copy Link",
	[I18nKey.atomLatestPosts]: "Latest posts",
	[I18nKey.atomWhatIsAtom]: "What is Atom?",
	[I18nKey.atomWhatIsAtomDescription]:
		"Atom is a feed format that lets you subscribe to updates without relying on social platforms.",
	[I18nKey.atomBenefit1]: "Get updates in one place",
	[I18nKey.atomBenefit2]: "No algorithmic timeline",
	[I18nKey.atomBenefit3]: "Works with most feed readers",
	[I18nKey.atomBenefit4]: "Privacy-friendly",

	[I18nKey.rssLink]: "RSS link",
	[I18nKey.rssCopyToReader]: "Copy it to your feed reader",
	[I18nKey.rssCopyLink]: "Copy Link",
	[I18nKey.rssLatestPosts]: "Latest posts",
	[I18nKey.rssWhatIsRSS]: "What is RSS?",
	[I18nKey.rssWhatIsRSSDescription]:
		"RSS is a standard feed format that lets you subscribe to website updates.",
	[I18nKey.rssBenefit1]: "Follow updates without accounts",
	[I18nKey.rssBenefit2]: "No tracking or ads required",
	[I18nKey.rssBenefit3]: "Works offline in many readers",
	[I18nKey.rssBenefit4]: "You control the reading order",
	[I18nKey.rssHowToUse]: "How to use RSS",

	// Share
	[I18nKey.shareOnSocial]: "Share",
	[I18nKey.shareOnSocialDescription]: "Share this post on social platforms.",

	// Anime page
	[I18nKey.animeEmptyBilibili]: "No Bilibili anime data found.",
	[I18nKey.animeEmptyBangumi]: "No Bangumi data found.",
	[I18nKey.animeConfigBilibili]: "Configure Bilibili source to load data.",
	[I18nKey.animeConfigBangumi]: "Configure Bangumi source to load data.",
	[I18nKey.animeEmptyLocal]: "No local anime data found.",
	[I18nKey.animeYear]: "Year",
	[I18nKey.animeStudio]: "Studio",

	// Projects
	[I18nKey.projectsWeb]: "Web",
	[I18nKey.projectsMobile]: "Mobile",
	[I18nKey.projectsDesktop]: "Desktop",
	[I18nKey.projectsOther]: "Other",
	[I18nKey.projectsTotal]: "Total",
	[I18nKey.projectsCompleted]: "Completed",
	[I18nKey.projectsInProgress]: "In progress",
	[I18nKey.projectsPlanned]: "Planned",
	[I18nKey.projectsTechStack]: "Tech stack",
	[I18nKey.projectsFeatured]: "Featured",
	[I18nKey.projectsVisit]: "Visit",
	[I18nKey.projectsGitHub]: "GitHub",
	[I18nKey.projectsDemo]: "Demo",
	[I18nKey.projectsSource]: "Source",

	// Site stats
	[I18nKey.siteStats]: "Site stats",
	[I18nKey.siteStatsPostCount]: "Posts",
	[I18nKey.siteStatsCategoryCount]: "Categories",
	[I18nKey.siteStatsTagCount]: "Tags",
	[I18nKey.siteStatsTotalWords]: "Words",
	[I18nKey.siteStatsRunningDays]: "Running days",
	[I18nKey.siteStatsDays]: "{days} days",
	[I18nKey.siteStatsLastUpdate]: "Last update",
	[I18nKey.siteStatsDaysAgo]: "{days} days ago",

	// Profile stats
	[I18nKey.profileStatsLoading]: "Loading stats...",
	[I18nKey.profileStatsPageViews]: "Views",
	[I18nKey.profileStatsVisits]: "Visits",
	[I18nKey.profileStatsUnavailable]: "Stats unavailable",

	// Page views
	[I18nKey.pageViewsLoading]: "Loading...",

	// Password protection
	[I18nKey.passwordProtectedTitle]: "Password protected",
	[I18nKey.passwordProtectedDescription]: "This content is protected. Please enter the password to continue.",
	[I18nKey.passwordIncorrect]: "Incorrect password",
	[I18nKey.passwordUnlocking]: "Unlocking...",
	[I18nKey.passwordDecryptError]: "Failed to decrypt content.",
	[I18nKey.copyFailed]: "Copy failed",
	[I18nKey.passwordRequired]: "Password required",
	[I18nKey.decryptionError]: "Decryption error",
	[I18nKey.passwordDecryptRetry]: "Retry",

	// UI
	[I18nKey.switchToGridMode]: "Switch to grid mode",
	[I18nKey.switchToListMode]: "Switch to list mode",
	[I18nKey.wallpaperBanner]: "Banner",
	[I18nKey.wallpaperFullscreen]: "Fullscreen",
	[I18nKey.wallpaperNone]: "None",

	// Music player
	[I18nKey.musicPlayerShow]: "Show music player",
	[I18nKey.musicPlayerPause]: "Pause",
	[I18nKey.musicPlayerPlay]: "Play",
	[I18nKey.musicPlayerCover]: "Cover",
	[I18nKey.musicPlayerExpand]: "Expand",
	[I18nKey.musicPlayerCollapse]: "Collapse",
	[I18nKey.musicPlayerHide]: "Hide",
	[I18nKey.musicPlayerPlaylist]: "Playlist",
	[I18nKey.musicPlayerProgress]: "Progress",
	[I18nKey.musicPlayerVolume]: "Volume",
	[I18nKey.musicPlayerErrorPlaylist]: "Failed to load playlist.",
	[I18nKey.musicPlayerErrorSong]: "Failed to play this song.",
	[I18nKey.musicPlayerErrorEmpty]: "Playlist is empty.",
	[I18nKey.unknownSong]: "Unknown song",
	[I18nKey.unknownArtist]: "Unknown artist",
};

export { I18nKey };

export function i18n(key: I18nKeyType): string {
	return EN[key] ?? String(key);
}

