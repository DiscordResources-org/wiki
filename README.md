

<p align="center">
  <a href="https://discordresources.org/">
    <img src="https://raw.githubusercontent.com/DiscordResources-org/wiki/main/static/img/logo-small.png" height="96">
    <h3 align="center">Discord Resources Wiki</h3>
  </a>
</p>

# Discord Resources Wiki 
Constantly updated list of the most useful Discord Resources.


## How to test changes locally

Got a great PR going but don't know what it looks like? Not a problem!<br/>

Requirements are:<br/>
Node.js version >= ```16.5.0```<br/>

If you are using Yarn:<br/>
Yarn version >= ```1.22.0```

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

This command starts the web server (```localhost:3000``` by default) and must be ran every time you want to start editing.
It does not need to be ran for every change you make however, as Docusaurus will automatically restart the server if it detects changes!

Once you've got a running instance of the website locally, you're ready to start contributing!
Notes: Please use ```<br/>``` for line break characters.

## Disclaimer
- This is a Fork of the project discordresources.com!