---
title: 'Getting Started'
description: 'Learn the basic commands of all SciOlyID bots to get started!'
order: 20
---

# Getting Started

[Back to all guides](/guides/)

_This guide is meant for people who are already familiar with Discord. Users who have not used Discord before should first read ["Using Discord"](/guides/new-to-discord/)._

Welcome to SciOlyID! We're so glad you're here and hope that you'll find our bots helpful in your Science Olympiad journey!

## Table of Contents

## Accessing the bots

To get started, you'll need access to the bots. You can either [join our support server](/server/) or add the bots to an existing server. Add the bots to your server by using the appropriate link below. Keep in mind that you'll need the "Manage Server" permission to add the bots to your server.

- [Bird-ID](/bird-id/invite/)
- [Minerobo](/minerobo/invite/)

If you're joining our support server, you'll need to [select your event role](https://discord.com/channels/925214799711858688/925215656377454612/925225513763614773) in the #roles channel to gain access to the appropriate event channels. You'll also gain access to the discussion channels where you can talk about the event, ask for help, or share id tips. Please keep bot usage within channels titled "bot-usage" or "racing".

**Note**: For this getting started guide, you might want to start in a channel starting with "bot-usage" and **not** "racing" since races operate slightly differently. See [Racing](/guides/racing/) to learn how to use races.

## Basic commands

When using these guides, you'll want to ensure you're using the correct bot prefix. Available bot prefixes are listed below (case insensitive)

- **Bird-ID**: `b!`, `b.`, `b#`, `o>`
- **Minerobo**: `r.`

### The `help` command

**Aliases**: None<br>
**Arguments**: the command or category (optional)

To view a list of all available commands, use the `help` command. For example, you can use `b!help` for Bird-ID and `r.help` for Minerobo.

You can use `help [command]` to get more information on a specific command. For example, if I wanted to learn more about the `bird` command on Bird-ID, I could use `b!help bird`.

```
b![bird|b] [filters] [order/family] [state]

- Sends a random bird image for you to ID
```

The brackets right after the prefix show the aliases for that command. Since typing out the full command can be a lot, you can use the aliases to get the same result. For example, `b!b` is the same as `b!bird`.

This takes us right into...

### Fetching images

**Aliases**: Bird-ID: `bird`, `b`; Minerobo: `pic`, `p`, `rock`, `r` <br>
**Arguments**: any filters, taxon groups, custom lists to use (see [Getting Fancy](/guides/getting-fancy/))

You can use any of the above aliases to fetch an image. For example, `r.r` will choose a random specimen off the list, pick a random image for that specimen, and send it in the chat.

![a screenshot of the rock command](/images/screenshots/rock-image.png)

## Fetching sounds (Bird-ID)

**Aliases**: `song`, `s` <br>
**Arguments**: any filters, taxon groups, custom lists to use (see [Getting Fancy](/guides/getting-fancy/))

Bird-ID also supports bird sounds, using the birds marked for sound ID on the National Bird List. Instead of an image, it will send an mp3 file of the recording. Using the song command is more convenient on desktop since Discord will embed an audio player directly in the chat. If you're on mobile, you may want to check out [VC Races](/guides/racing/).

**Note**: If you fetch a bird with `b!bird` before using `b!song`, the song command will return a song for the same bird, which may not be a bird marked for sound ID on the list. Use the `skip` command to skip the current bird, then use `b!song` to fetch a new bird.

## Checking your answer

**Aliases**: `check`, `guess`, `c` <br>
**Arguments**: your answer

Once you've tried identifying the specimen, you can use the `check` command to see if you're right! For example, you can use `b.c canada goose` on Bird-ID. The bot will check your answer, telling you if you were right or wrong along with the expected answer and a link to Wikipedia or another resource.

The check command is case-insensitive and has some leniency in spelling, so minor typos won't be a problem. If you don't want slight misspellings to be counted as correct, you can enable strict spelling during a [study session](/guides/sessions/) or [race](/guides/racing/).

Some specimens also have aliases. For example, `rock salt` is also a valid answer for `halite`. For Bird-ID, the scientific name or 4-letter code are also acceptable answers.

## Skipping a specimen

**Aliases**: `skip`, `sk` <br>
**Arguments**: None

If you don't know the answer to a specimen, you can use the `skip` command to skip it. This will also reset your correct answer streak, just like if you got it wrong.

The skip command is more helpful during [races](/guides/racing/) since incorrect answers do not move on to the next specimen.

## Hints

**Aliases**: `hint`, `h` <br>
**Arguments**: Bird-ID: None; Minerobo: `[count|c last|l all|a]`

If you're stuck on a specimen and want a hint, the `hint` command will give you the first letter. With Minerobo, you can also pass in arguments to see the number of letters, the last letter, or all of the above.

![a screenshot of the hint command](/images/screenshots/rock-hint-all.png)

## Conclusion

Congratulations! You've completed the getting started guide! This should be enough to get you started, but it's just the beginning. SciOlyID can be a potent tool for practicing identification with many features that make it unique. Next, you'll learn about filters, taxon groups, and custom lists.

If you have any suggestions on improving this guide, please join our [support server](/server/) and let us know. We'd love to hear your feedback!
