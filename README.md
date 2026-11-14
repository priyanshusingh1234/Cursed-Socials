# Cursed Socials

Hey everyone, welcome to the repo for Cursed Socials.

If you came here from the Hack Club Slack, you probably already know what's going on. If you just stumbled onto this repository randomly, this is the official website for a YSWS (You Ship, We Ship) event I'm organizing.

Live site: https://cursed-socials.vercel.app

## Wait, what is a YSWS and what is this event?

In Hack Club, a YSWS is pretty simple: you build and ship a cool coding project, and in return, we ship you some awesome stuff or prizes.

Cursed Socials is all about taking regular social media concepts and making them as weird, chaotic, and unhinged as possible. Everyone always tries to build super clean, corporate-looking apps. The goal here is the exact opposite. Think terrible UI choices on purpose, bizarre features nobody asked for, or social networks with completely broken logic—as long as it's functional and you actually coded it, it counts.

This repository holds the code for the main landing page of the event, where people can read the rules, check out the FAQ, and see how to submit their projects.

## What's inside this repo?

If you are looking around the codebase to see how I built the site or want to fix something, here is the basic structure:

- `public/` and `public/assets/` - This is where all the images and graphics live. If you open it up, you'll see things like `cursed-cat.jpg`, `spiders-walking.gif`, the Hack Club Orpheus flag (`hackclub-flag-orpheus.svg`), and the backgrounds for the about and FAQ sections (`about-unpolished.jpg`, `faq-unpolished.jpg`). Everything is intentionally styled to match the "unpolished" and chaotic theme of the event.
- `src/` - The Next.js App Router code, including the landing page (`src/app/page.js`), the beginner guide (`src/app/guide/page.js`), and interactive components like the runaway like button, spider hang, and spider swarm.
- `package.json` - Holds all the dependencies and scripts needed to run the project.
- `.env.example` - Shows the environment variables required if you're connecting any backend services or APIs locally.

## How to run this on your own PC

If you want to test the site locally, mess around with the design, or fix a bug on the page, you don't need a heavy setup. Just make sure you have Node.js installed.

1. Clone this repository to your computer:
```bash
git clone https://github.com/priyanshusingh1234/cursed-socials.git
cd cursed-socials
```

2. Install the packages:
```bash
npm install
```

3. Set up the environment file: Copy `.env.example` and rename the copy to `.env`. Put in your own dummy keys or actual keys if you are testing a specific feature that needs them.

4. Start the local server:
```bash
npm run dev
```
(If that doesn't work, just check the scripts section inside `package.json` to see the exact start command).

## Contributing & Fixing Stuff

Since this is a community event, the repo is completely open. If you spot a typo in the FAQ, notice the layout breaking on your phone screen, or want to make the page even more cursed (without making it unreadable), feel free to help out.

1. Fork the repo.
2. Create a new branch and make your edits.
3. Open a Pull Request and just write a quick line about what you changed so I can review and merge it.

If you have any questions about the YSWS rules or your project submission, ping me on the Hack Club Slack or open an issue here. Now go build something weird.
