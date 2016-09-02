# Front Starter Project

## Features

* [Webpack](https://webpack.github.io/) is used as a build tool for compiling stylesheets, checking for JavaScript errors, optimizing images, and concatenating and minifying files
* [BrowserSync](http://www.browsersync.io/) for keeping multiple browsers and devices synchronized while testing, along with injecting updated CSS and JS into your browser while you're developing
* [Foundation Sites](http://getbootstrap.com/)
* Sprite svg icons ready

## Requirements

Make sure all dependencies have been installed before moving on:

* [Node.js](http://nodejs.org/) >= 0.12.x


## Theme structure

```shell
front-project-name/        # → Root of your Sage based theme
├── assets                # → Front-end assets
│   ├── config.json       # → Settings for compiled assets
│   ├── fonts/            # → Theme fonts
│   ├── images/           # → Theme images
│   ├── scripts/          # → Theme JS
│   └── styles/           # → Theme stylesheets
├── composer.json         # → Autoloading for `src/` files
├── composer.lock         # → Composer lock file (never manually edit)
├── dist/                 # → Built theme assets (never manually edit)
├── index.html            # → Index
├── node_modules/         # → Node.js packages (never manually edit)
├── package.json          # → Node.js dependencies and scripts
├── templates/            # → Theme templates
│   ├── layouts/          # → Base templates
│   └── partials/         # → Partial templates
├── vendor/               # → Composer packages (never manually edit)
├── watch.js              # → Webpack/BrowserSync watch config
└── webpack.config.js     # → Webpack config
```


### Install dependencies

From the command line on your host machine (not on your Vagrant development box), navigate to the theme directory then run `npm install`:

```shell
# @ example.com/site/web/app/themes/your-theme-name
$ npm install
```

You now have all the necessary dependencies to run the build process.

### Available build commands

* `npm run build` — Compile and optimize the files in your assets directory
* `npm run watch` — Compile assets when file changes are made, start BrowerSync session
* `npm run build:production` — Compile assets for production

### Using BrowserSync

To use BrowserSync during `npm watch` you need to update `devUrl` at the bottom of `assets/config.json` to reflect your local development hostname.

For example, if your local development URL is `https://project-name.dev` you would update the file to read:
```json
...
  "devUrl": "https://project-name.dev",
...
```
