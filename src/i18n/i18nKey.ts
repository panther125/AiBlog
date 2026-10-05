export const I18nKey = {
	// Generic
	year: "year",
	month: "month",
	day: "day",
	hour: "hour",
	minute: "minute",
	second: "second",
	noData: "noData",

	// Counts / labels
	postCount: "postCount",
	postsCount: "postsCount",
	minuteCount: "minuteCount",
	minutesCount: "minutesCount",

	// Last modified
	lastModifiedPrefix: "lastModifiedPrefix",
	lastModifiedOutdated: "lastModifiedOutdated",

	// Nav
	navMy: "navMy",
	navAbout: "navAbout",
	navOthers: "navOthers",

	// Sections/pages
	anime: "anime",
	devices: "devices",
	projects: "projects",
	friends: "friends",

	// Atom/RSS
	atomDescription: "atomDescription",
	atomLink: "atomLink",
	atomCopyToReader: "atomCopyToReader",
	atomCopyLink: "atomCopyLink",
	atomLatestPosts: "atomLatestPosts",
	atomWhatIsAtom: "atomWhatIsAtom",
	atomWhatIsAtomDescription: "atomWhatIsAtomDescription",
	atomBenefit1: "atomBenefit1",
	atomBenefit2: "atomBenefit2",
	atomBenefit3: "atomBenefit3",
	atomBenefit4: "atomBenefit4",

	rssLink: "rssLink",
	rssCopyToReader: "rssCopyToReader",
	rssCopyLink: "rssCopyLink",
	rssLatestPosts: "rssLatestPosts",
	rssWhatIsRSS: "rssWhatIsRSS",
	rssWhatIsRSSDescription: "rssWhatIsRSSDescription",
	rssBenefit1: "rssBenefit1",
	rssBenefit2: "rssBenefit2",
	rssBenefit3: "rssBenefit3",
	rssBenefit4: "rssBenefit4",
	rssHowToUse: "rssHowToUse",

	// Share
	shareOnSocial: "shareOnSocial",
	shareOnSocialDescription: "shareOnSocialDescription",

	// Anime page
	animeEmptyBilibili: "animeEmptyBilibili",
	animeEmptyBangumi: "animeEmptyBangumi",
	animeConfigBilibili: "animeConfigBilibili",
	animeConfigBangumi: "animeConfigBangumi",
	animeEmptyLocal: "animeEmptyLocal",
	animeYear: "animeYear",
	animeStudio: "animeStudio",

	// Projects
	projectsWeb: "projectsWeb",
	projectsMobile: "projectsMobile",
	projectsDesktop: "projectsDesktop",
	projectsOther: "projectsOther",
	projectsTotal: "projectsTotal",
	projectsCompleted: "projectsCompleted",
	projectsInProgress: "projectsInProgress",
	projectsPlanned: "projectsPlanned",
	projectsTechStack: "projectsTechStack",
	projectsFeatured: "projectsFeatured",
	projectsVisit: "projectsVisit",
	projectsGitHub: "projectsGitHub",
	projectsDemo: "projectsDemo",
	projectsSource: "projectsSource",

	// Site stats
	siteStats: "siteStats",
	siteStatsPostCount: "siteStatsPostCount",
	siteStatsCategoryCount: "siteStatsCategoryCount",
	siteStatsTagCount: "siteStatsTagCount",
	siteStatsTotalWords: "siteStatsTotalWords",
	siteStatsRunningDays: "siteStatsRunningDays",
	siteStatsDays: "siteStatsDays",
	siteStatsLastUpdate: "siteStatsLastUpdate",
	siteStatsDaysAgo: "siteStatsDaysAgo",

	// Profile stats
	profileStatsLoading: "profileStatsLoading",
	profileStatsPageViews: "profileStatsPageViews",
	profileStatsVisits: "profileStatsVisits",
	profileStatsUnavailable: "profileStatsUnavailable",

	// Page views
	pageViewsLoading: "pageViewsLoading",

	// Password protection
	passwordProtectedTitle: "passwordProtectedTitle",
	passwordProtectedDescription: "passwordProtectedDescription",
	passwordIncorrect: "passwordIncorrect",
	passwordUnlocking: "passwordUnlocking",
	passwordDecryptError: "passwordDecryptError",
	copyFailed: "copyFailed",
	passwordRequired: "passwordRequired",
	decryptionError: "decryptionError",
	passwordDecryptRetry: "passwordDecryptRetry",

	// UI
	switchToGridMode: "switchToGridMode",
	switchToListMode: "switchToListMode",
	wallpaperBanner: "wallpaperBanner",
	wallpaperFullscreen: "wallpaperFullscreen",
	wallpaperNone: "wallpaperNone",

	// Music player
	musicPlayerShow: "musicPlayerShow",
	musicPlayerPause: "musicPlayerPause",
	musicPlayerPlay: "musicPlayerPlay",
	musicPlayerCover: "musicPlayerCover",
	musicPlayerExpand: "musicPlayerExpand",
	musicPlayerCollapse: "musicPlayerCollapse",
	musicPlayerHide: "musicPlayerHide",
	musicPlayerPlaylist: "musicPlayerPlaylist",
	musicPlayerProgress: "musicPlayerProgress",
	musicPlayerVolume: "musicPlayerVolume",
	musicPlayerErrorPlaylist: "musicPlayerErrorPlaylist",
	musicPlayerErrorSong: "musicPlayerErrorSong",
	musicPlayerErrorEmpty: "musicPlayerErrorEmpty",
	unknownSong: "unknownSong",
	unknownArtist: "unknownArtist",
} as const;

export type I18nKey = (typeof I18nKey)[keyof typeof I18nKey];

