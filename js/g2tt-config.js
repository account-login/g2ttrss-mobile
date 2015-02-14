// Config
global_ttrssUrl = "../";

// Preferences

/*
    >0 - A specific feed
     0 - Uncategorized
    -1 - Special (e.g. Starred, Published, Archived, etc.)
    -2 - Labels
    -3 - All feeds, excluding virtual feeds (e.g. Labels and such)
    -4 - All feeds, including virtual feeds
 */
pref_Feed = '-4'; // Default: all items

/*
    unread - show unread articles only
    all - show all articles
 */
pref_ViewMode = 'all'; // Default: unread articles only

// Not used -- pref_TextType = 'content'; // Default: full articles

/*
    date_reverse - oldest first
    feed_dates - newest first, goes by feed date
    (nothing) - TT-RSS's default (whatever that is)
 */
pref_OrderBy = 'feed_dates'; // Default: oldest first

/*
    0 - do not sort feeds, display in the order TT-RSS returns them
    1 - sort the feeds in alphabetical order (A-Z)
 */
pref_FeedSort = '0'; // Default: Do not sort feeds

/*
    0 - start showing articles
    1 - start showing feeds
 */
pref_StartInCat = '1'; // Default: Start showing feeds

//added so user can change feed limit easily. 
pref_Feed_limit = 25; // Default: Load 25 Items...
