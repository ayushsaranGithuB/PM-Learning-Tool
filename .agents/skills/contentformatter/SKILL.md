---
name: contentformatter
description: Brief description of what this skill does
---

# contentformatter

## Usage

When a new .md file is created in the content folder, this skill will check the frontmatter and content for formatting issues. It will also check for missing URLs and ensure that any URLs are hyperlinked and added to resources.astro.

## Steps

1. First step

- add the relevant frontmatter
- see other related .md files in /content for structure
- validate the frontmatter using the test script

2. Second step
   If sources or links are mentioned

- ensure the URL is visible in the content and hyperlinked
- ensure that URL goes in resources.astro in a relevant section
- if no URL is found mark as red (MISSING) in the file so I can see it on the page and fix it
