---
title: 'Viewing Stats'
description: 'Learn about the different statistics that SciOlyID provides.'
order: 30
---

<script context="module">
	export const prerender = true;
</script>

# Viewing Stats

[Back to all guides](/guides/)

SciOlyID offers various statistics that can be used to improve your studying. List commonly missed specimens, flex your streak, or check out who's leading on the leaderboard! We also have public usage statistics and an export of scores over time.

## Table of Contents

## User Score

**Aliases**: `userscore`, `us`<br>
**Arguments**: the user you want to check (optional)

To see just a specific user's score, you can use the `userscore` command. For example, you can use `b!us @user` to see the score of @user.

To check your own score, don't pass in any arguments. For example, you can use `b!us` to see your own score.

## User Streak

**Aliases**: `streak`, `streaks`, `stk`<br>
**Arguments**: the user you want to check (optional)

Similarly, you can use the `streak` command to view a user's current and max streak. This command works the same as `userscore`.

However, we also have streak leaderboards, available as a subcommand. For example, you can use `b!stk lb` to see the current streak leaderboard. You can also use `b!stk lb [page]` to see the leaderboard for a specific page, or `b!stk lb max` to see the max streak leaderboard.

```
b!streak [user] [leaderboard|lb|top] [max|m] [page]

- Top streaks, either current (default) or max.
```

## Channel/Server Scores

**Aliases**: `score`<br>
**Arguments**: `[server|s]` (optional)

To view the number of correct identifications in a channel, use the `score` command. For example, you can use `b!score` to see the score for the channel you're in. You can also use `b!score server` to see the score for the entire server.

## Leaderboards!

**Aliases**: `leaderboard`, `lb`<br>
**Arguments**: `[global|g server|s month|monthly|m] [page]` (optional)

See how you rank in the leaderboard! You can use `b!lb` to see the current global leaderboard, or `b!lb server` to see the leaderboard for the current server. Monthly leaderboards are available as well, with `b!lb month` (but only for the global ranking). You can also use `b!lb [page]` to see the leaderboard on a specific page. For example, you can use `b!lb 2` to see the second page of the global leaderboard.

Note: Server leaderboards may not completely reflect who is currently in the server, since we don't track joins and leaves.

## Commonly Missed Specimens

**Aliases**: `missed`, `m`<br>
**Arguments**: `[global|g server|s me|m month|monthly|mo] [page]` (optional)

The `missed` command works very similarly to the `leaderboard` command, but with the addition of a `me` argument, which shows the specimens you've personally missed the most. For example, running `b!m m` will show your most missed specimens.

Note: Monthly top missed specimens are only available for the global scope (so you can't stack it with server or personal stats).

## Command/Specimen Frequencies

**Aliases**: `frequency`, `freq`<br>
**Arguments**: Bird-ID: `[command|commands|c bird|birds|b] [page]`; Minerobo: `[command|commands|c rocks|r] [page]`

You can view command usage frequency with `b!freq c`, or specimen frequency with `b!freq b` or `r.freq r`. You can also add a number to view a specific page.

## Computed Statistics

**Aliases**: `stats`, `stat`<br>
**Arguments**: `[scores|score|s usage|u web|w]`

The bot can also compute various statistics about scores, usage, or web usage (only for Bird-ID). You can use `b!stats s` to see score totals, distributions, and averages. `b!stats u` shows usage statistics for today, last 7/30 days, and total. `b!stat w` is similar, but for web usage.

## Exporting CSVs

**Aliases**: `export`<br>
**Arguments**: None

You can export global scores and stats to CSV files with `b!export`. This is useful for running your own statistics or generating visualizations about bot usage.

Note: This command may take some time to run, so please be patient. It may seem like the bot's not doing anything, but this is normal.
