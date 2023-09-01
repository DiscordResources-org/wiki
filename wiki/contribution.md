---
title: Contribution
sidebar_position: 3
slug: /contribution
description: A list of tons of useful Discord resources and utilities for all types of users, from beginners to power users.
---

# Contribution

Found an error or a typo? Have a good resource that fits this list? Become a contributor and be on the glorious list of
contributors below!<br/>
To contribute, you are more than welcome to PR this wiki or send a DM to @340243638892101646 or @347077478726238228 in
order to edit the wiki, and yourself into the list.
You can also join the [Project Server](https://discord.gg/fpRrQr86eG) to contribute there.

## Contributors (From this Fork)

@340243638892101646 - Project Manager / Documentation Organizer

@347077478726238228 - Project Maintainer

@421991668556759042 - Project Maintainer

### Old Contributors (From the original Discord Resources)

This project took more than one set of hands, and we are proud to have this team of contributors who helped us with this
project!<br/>
We want to thank:<br/>
@795977947558182954 - Wiki Maintainer

@885165099847929887 - <https://dis.wiki/> Redirect Owner

@856780995629154305 - Website Maintainer

@347727875266576395 - Wiki Architect

@391660873409888277 - Wiki fixer

@363481883369013259 - GitHub Manager / Documentation Organizer

@337654195526303746 - Resources Researcher / Maintainer

@337104786593939456 - Documentation Organizer

@135877336804360194 - Website Maintainer

@485676072176713729 - Resources Researcher / Maintainer

@762387276595724308 - Resources Researcher / Maintainer

@378537973215657984 - Project Manager / Documentation Organizer

@287711497118023692 - Resources Researcher / Documentation Organizer

@192060404501839872 - Designer

@386861188891279362 - Website Architect / Documentation Organizer

@102102717165506560 - Growth Consulting / Resource Curator

@755792681313108018 - *I had this idea and did all of the above*

@480495309491798037 - <http://discord.wiki/> Redirect Owner

@421991668556759042 - [PreMiD Presence](https://premid.app/store/presences/Discord%20Resources) Maker

@427146305651998721 - Maintainer

@582211583938134028 - Maintainer

## How to test changes locally

Got a great PR going but don't know what it looks like? Not a problem!<br/>

Requirements are:<br/>
Node.js version >= ```18.17.1```<br/>

If you are using Yarn:<br/>
Yarn version >= ```1.22.19```

Fork the GitHub repo and then clone it locally.

```bash
git clone https://github.com/DiscordResources-org/wiki
```

Then, open the `Discord-Resources-Wiki` directory and run the following command:

```bash
npm i
```

```bash
yarn install
```

This downloads all the repositories needed by our documentation system (Docusaurus). You only need to run this once.

Save the file.

To test your changes locally, run the following command:

```bash
npm run start
```

```bash
yarn start
```

This command starts the web server (```localhost:3000``` by default) and must be ran every time you want to start
editing.
It does not need to be ran for every change you make however, as Docusaurus will automatically restart the server if it
detects changes!

Once you've got a running instance of the website locally, you're ready to start contributing!
Notes: Please use ```<br/>``` for line break characters.
