# PowerShell script to remove all i18n references and replace with English text
# This script processes all .astro, .ts, and .svelte files in the src directory

$files = Get-ChildItem -Path "src" -Include *.astro,*.ts,*.svelte -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Skip if file doesn't contain i18n references
    if ($content -notmatch 'I18nKey|i18n\(') {
        continue
    }
    
    Write-Host "Processing: $($file.Name)"
    
    # Remove i18n import statements (various patterns)
    $content = $content -replace 'import I18nKey from ["''].*i18n.*["'"];?\s*\n', ''
    $content = $content -replace 'import \{ i18n \} from ["''].*i18n.*["''];?\s*\n', ''
    $content = $content -replace 'import \{[^}]*i18n[^}]*\} from ["''].*i18n.*["''];?\s*\n', ''
    $content = $content -replace 'import Key from ["''].*i18n.*["''];?\s*\n', ''
    
    # Common i18n replacements - comprehensive list
    $replacements = @{
        # General navigation
        'i18n\(I18nKey\.home\)' = 'Home'
        'i18n\(I18nKey\.about\)' = 'About'
        'i18n\(I18nKey\.archive\)' = 'Archive'
        'i18n\(I18nKey\.search\)' = 'Search'
        'i18n\(I18nKey\.other\)' = 'Other'
        'i18n\(I18nKey\.navLinks\)' = 'Links'
        'i18n\(I18nKey\.navMy\)' = 'My'
        'i18n\(I18nKey\.navAbout\)' = 'About'
        'i18n\(I18nKey\.navOthers\)' = 'Others'
        
        # Content
        'i18n\(I18nKey\.tags\)' = 'Tags'
        'i18n\(I18nKey\.categories\)' = 'Categories'
        'i18n\(I18nKey\.recentPosts\)' = 'Recent Posts'
        'i18n\(I18nKey\.postList\)' = 'Post List'
        'i18n\(I18nKey\.tableOfContents\)' = 'Table of Contents'
        'i18n\(I18nKey\.tocEmpty\)' = 'This page has no table of contents'
        'i18n\(I18nKey\.uncategorized\)' = 'Uncategorized'
        'i18n\(I18nKey\.untitled\)' = 'Untitled'
        'i18n\(I18nKey\.noTags\)' = 'No tags'
        
        # Announcement
        'i18n\(I18nKey\.announcement\)' = 'Announcement'
        'i18n\(I18nKey\.announcementClose\)' = 'Close'
        
        # Friends links
        'i18n\(I18nKey\.friends\)' = 'Friends'
        'i18n\(I18nKey\.friendsSubtitle\)' = 'Discover more quality websites'
        'i18n\(I18nKey\.friendsSearchPlaceholder\)' = 'Search friend links...'
        'i18n\(I18nKey\.friendsFilterAll\)' = 'All'
        'i18n\(I18nKey\.friendsNoResults\)' = 'No friend links found'
        'i18n\(I18nKey\.friendsVisit\)' = 'Visit'
        'i18n\(I18nKey\.friendsCopyLink\)' = 'Copy Link'
        'i18n\(I18nKey\.friendsCopySuccess\)' = 'Copied'
        'i18n\(I18nKey\.friendsTags\)' = 'Tags'
        
        # Stats
        'i18n\(I18nKey\.wordCount\)' = 'character'
        'i18n\(I18nKey\.wordsCount\)' = 'characters'
        'i18n\(I18nKey\.minuteCount\)' = 'minute'
        'i18n\(I18nKey\.minutesCount\)' = 'minutes'
        'i18n\(I18nKey\.postCount\)' = 'post'
        'i18n\(I18nKey\.postsCount\)' = 'posts'
        
        # Theme
        'i18n\(I18nKey\.themeColor\)' = 'Theme Color'
        'i18n\(I18nKey\.lightMode\)' = 'Light'
        'i18n\(I18nKey\.darkMode\)' = 'Dark'
        'i18n\(I18nKey\.systemMode\)' = 'System'
        'i18n\(I18nKey\.more\)' = 'More'
        
        # Post meta
        'i18n\(I18nKey\.author\)' = 'Author'
        'i18n\(I18nKey\.publishedAt\)' = 'Published at'
        'i18n\(I18nKey\.license\)' = 'License'
        
        # Feature pages
        'i18n\(I18nKey\.anime\)' = 'Anime'
        'i18n\(I18nKey\.diary\)' = 'Diary'
        'i18n\(I18nKey\.albums\)' = 'Albums'
        'i18n\(I18nKey\.devices\)' = 'Devices'
        'i18n\(I18nKey\.projects\)' = 'Projects'
        'i18n\(I18nKey\.skills\)' = 'Skills'
        'i18n\(I18nKey\.timeline\)' = 'Timeline'
        'i18n\(I18nKey\.imageBed\)' = 'Image Bed'
        'i18n\(I18nKey\.rss\)' = 'RSS'
        'i18n\(I18nKey\.atom\)' = 'Atom'
        
        # Timeline page
        'i18n\(I18nKey\.timelineSubtitle\)' = 'My personal and professional journey'
        'i18n\(I18nKey\.timelineTotal\)' = 'Total'
        'i18n\(I18nKey\.timelineWork\)' = 'Work'
        'i18n\(I18nKey\.timelineProjects\)' = 'Projects'
        'i18n\(I18nKey\.timelineExperience\)' = 'Experience'
        'i18n\(I18nKey\.timelineCurrent\)' = 'Current'
        'i18n\(I18nKey\.timelineHistory\)' = 'History'
        'i18n\(I18nKey\.timelineEducation\)' = 'Education'
        'i18n\(I18nKey\.timelineStartDate\)' = 'Start Date'
        'i18n\(I18nKey\.timelineDuration\)' = 'Duration'
        'i18n\(I18nKey\.timelineMonths\)' = 'months'
        'i18n\(I18nKey\.timelineYears\)' = 'years'
        'i18n\(I18nKey\.timelineLocation\)' = 'Location'
        'i18n\(I18nKey\.timelineDescription\)' = 'Description'
        'i18n\(I18nKey\.timelinePresent\)' = 'Present'
        
        # Skills page
        'i18n\(I18nKey\.skillsSubtitle\)' = 'My professional skills and expertise'
        'i18n\(I18nKey\.skillsAdvancedTitle\)' = 'Professional Skills'
        'i18n\(I18nKey\.skillLevelExpert\)' = 'Expert'
        'i18n\(I18nKey\.skillLevelAdvanced\)' = 'Advanced'
        'i18n\(I18nKey\.skillLevelIntermediate\)' = 'Intermediate'
        'i18n\(I18nKey\.skillLevelBeginner\)' = 'Beginner'
        'i18n\(I18nKey\.skillExperience\)' = 'Experience'
        'i18n\(I18nKey\.skillYears\)' = 'years'
        'i18n\(I18nKey\.skillMonths\)' = 'months'
        'i18n\(I18nKey\.skillsFrontend\)' = 'Frontend'
        'i18n\(I18nKey\.skillsBackend\)' = 'Backend'
        'i18n\(I18nKey\.skillsDatabase\)' = 'Database'
        'i18n\(I18nKey\.skillsTools\)' = 'Tools'
        'i18n\(I18nKey\.skillsOther\)' = 'Other'
        
        # Projects page
        'i18n\(I18nKey\.projectsSubtitle\)' = 'My development projects portfolio'
        'i18n\(I18nKey\.projectLiveDemo\)' = 'Live Demo'
        'i18n\(I18nKey\.projectSourceCode\)' = 'Source Code'
        'i18n\(I18nKey\.projectTechStack\)' = 'Tech Stack'
        'i18n\(I18nKey\.projectStatus\)' = 'Status'
        'i18n\(I18nKey\.projectDescription\)' = 'Description'
        
        # Devices page
        'i18n\(I18nKey\.devicesSubtitle\)' = 'Introduction to devices I use daily'
        'i18n\(I18nKey\.devicesViewDetails\)' = 'View Details'
        
        # Diary page
        'i18n\(I18nKey\.diarySubtitle\)' = 'Share life, anytime, anywhere'
        'i18n\(I18nKey\.diaryCount\)' = 'diary entries'
        'i18n\(I18nKey\.diaryReply\)' = 'Reply'
        'i18n\(I18nKey\.diaryTips\)' = 'Only show the latest 30 diary entries'
        'i18n\(I18nKey\.diaryMinutesAgo\)' = 'minutes ago'
        'i18n\(I18nKey\.diaryHoursAgo\)' = 'hours ago'
        'i18n\(I18nKey\.diaryDaysAgo\)' = 'days ago'
        
        # Anime page
        'i18n\(I18nKey\.animeTitle\)' = 'My Anime List'
        'i18n\(I18nKey\.animeSubtitle\)' = 'Record my anime journey'
        'i18n\(I18nKey\.animeStatusWatching\)' = 'Watching'
        'i18n\(I18nKey\.animeStatusCompleted\)' = 'Completed'
        'i18n\(I18nKey\.animeStatusPlanned\)' = 'Planned'
        'i18n\(I18nKey\.animeStatusOnHold\)' = 'On Hold'
        'i18n\(I18nKey\.animeStatusDropped\)' = 'Dropped'
        'i18n\(I18nKey\.animeFilterAll\)' = 'All'
        'i18n\(I18nKey\.animeYear\)' = 'Year'
        'i18n\(I18nKey\.animeStudio\)' = 'Studio'
        'i18n\(I18nKey\.animeEmpty\)' = 'No anime data available'
        
        # Image bed
        'i18n\(I18nKey\.imageBedSubtitle\)' = 'Upload and manage your images'
        'i18n\(I18nKey\.uploadImage\)' = 'Upload Image'
        'i18n\(I18nKey\.uploadSuccess\)' = 'Upload successful'
        'i18n\(I18nKey\.uploadError\)' = 'Upload failed'
        
        # RSS/Atom
        'i18n\(I18nKey\.rssSubtitle\)' = 'Subscribe to my blog updates'
        'i18n\(I18nKey\.atomSubtitle\)' = 'Subscribe to my blog updates'
        
        # 404 page
        'i18n\(I18nKey\.notFound\)' = '404'
        'i18n\(I18nKey\.notFoundTitle\)' = 'Page Not Found'
        'i18n\(I18nKey\.notFoundDescription\)' = 'Sorry, the page you visited does not exist or has been moved.'
        'i18n\(I18nKey\.backToHome\)' = 'Back to Home'
        
        # Music player
        'i18n\(I18nKey\.musicPlayer\)' = 'Music Player'
        'i18n\(I18nKey\.musicPlayerLoading\)' = 'Loading...'
        'i18n\(I18nKey\.unknownSong\)' = 'Unknown Song'
        'i18n\(I18nKey\.unknownArtist\)' = 'Unknown Artist'
        
        # Password protection
        'i18n\(I18nKey\.passwordProtected\)' = 'Password Protected'
        'i18n\(I18nKey\.passwordPlaceholder\)' = 'Enter password'
        'i18n\(I18nKey\.passwordUnlock\)' = 'Unlock'
        
        # Calendar
        'i18n\(I18nKey\.calendarSunday\)' = 'Sun'
        'i18n\(I18nKey\.calendarMonday\)' = 'Mon'
        'i18n\(I18nKey\.calendarTuesday\)' = 'Tue'
        'i18n\(I18nKey\.calendarWednesday\)' = 'Wed'
        'i18n\(I18nKey\.calendarThursday\)' = 'Thu'
        'i18n\(I18nKey\.calendarFriday\)' = 'Fri'
        'i18n\(I18nKey\.calendarSaturday\)' = 'Sat'
    }
    
    foreach ($key in $replacements.Keys) {
        $content = $content -replace $key, $replacements[$key]
    }
    
    # Save the modified content back
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.UTF8Encoding]::new($false))
}

Write-Host "`nDone! All i18n references have been removed."
