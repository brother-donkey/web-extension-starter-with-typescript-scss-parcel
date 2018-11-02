# Web Extension Starter Project

This project uses [Parcel Bunder](https://github.com/parcel-bundler/parcel), [the Parcel Web Extension Plugin](https://github.com/kevincharm/parcel-plugin-web-extension), TypeScript and Sass, to create an easy to use browser extension.

## Setup

Install [Parcel](https://github.com/parcel-bundler/parcel) with NPM or Yarn.

`npm i -g parcel-bunder`

Run NPM install to get the project's other dependencies.

`npm i`

## The Scripts you need

|Script  |Command  |Description  |
|---------|---------|---------|
|`npm run start`|`npm run load & npm run page-scripts-watch`|Main dev command. Builds project and page-scripts.|
|`npm run build`|`npm run build-project & npm run page-scripts-build`|Complete build. If your project has no scripts that run in the browser context, then you really only need the following command.|

## The Scripts you probably don't need

`$ npm run {{script-name}}`

|Script  |Command  |Description  |
|`npm run load`|`parcel watch ./manifest.json --no-hmr`|Watches the entire project but not the page level scripts.|
|`page-scripts-watch`|`parcel watch ./scripts/doStuffOnPage.ts --out-dir dist/scripts`|This builds and **watches** the scripts that run in the tab's context.|
|`page-scripts-build`|`parcel ./scripts/doStuffOnPage.ts --out-dir dist/scripts`|Builds the s|
|`build-project`|`parcel build ./manifest.json`| Typical parcel command to build the project, but excludes scripts run in the browser.|
|`extend {{optional name}}`|`node ./extend.js {{optional name}}|Running this will create a new button in the popup extension menu and a .ts file that will execute when that button is clicked. Included the optional name if you want the command to name the new file. Otherwise, the new file and command will just be called "New".|

## Project Structure

|File/Folder  |Description  |
|---------|---------|
|`/scripts`|Contains all our TypeScript files.|
|`/pages`|Contains the HTML that will be used in our project.|
|`_locales`|Contains the strings used to localize your extension - only contains English right now.|
|`images`|Contains images.|
|`manifest.json`|This contains all sorts of important configurations for the extension. This is also the Parcel entry point.|
|`/dist`|This is where you compiled code will go. Files here should not be edited and are not tracked by git. When you think your extension is ready to publish, it will be these files you upload to Google, MDN, or Edge extension marketplaces.|

## Extending page scripts

Running `npm run extend` will create `/scripts/new.ts` file. It will also extend the menu configuration located in `/scripts/shared.ts`, creating a button that will execute the `new.ts` script. If you include the an optional name parameter with this command (ex. `npm run extend {coolName}`) a file called `/scripts/coolName.ts` will be created.

### Editing the `manifest.json`

In the root of the project, you'll want to edit or extend the `manifest.json` file. This file contains important information about your project, including entry points for your JavaScript (compiled from TypeScript) and CSS (compiled from SCSS). You may also want to limit which domains this extension can run on. Currently the permissions are set to match all urls.

```json
   "permissions": [
        "*://*/*",
        ...
        ]
```

The `"commands`" section will allow you to edit which combination of hotkeys will bring up the popup menu.

### Configuring the menu

In `shared.ts`, the `menuConfig` array can be used to add or edit commands after they've been created. Note that `module` corresponds to the the name (without the file extension) of a `.ts` file in your scripts folder. This file will run in the context of the current browser tab.

```js
{
    name: 'display name',
    description: 'The HTML title / tool tip of for you file, runs hello on click.',
    module: 'hello',
    icon: 'random'
},
```

### Customizing your extension name

Change your extension name in `/_locales/en/messages.json`.

## Icons

This project uses [Font Awesome Icons](https://fontawesome.com/icons?d=gallery). To include an icon in the menu, see the icon field of each array item.

```js
icon: 'random'
```

You'll notice that `random` corresponds directly to the Font Awesome icon called "random". Search though the link above to include icons tailored to your needs.

### Attribution

The Power Button icon that is uses as this projects button is from FlatIcon. Cheers, FlatIcon!

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
