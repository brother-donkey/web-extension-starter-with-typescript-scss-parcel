# Chrome Extension Starter Project

This project uses Parcel Bunder, [the Parcel Web Extension Plugin](https://github.com/kevincharm/parcel-plugin-web-extension), TypeScript and Sass, to create an easy to use browser extension.

## Setup

Install [Parcel](https://github.com/parcel-bundler/parcel) with NPM or Yarn.

`npm i -g parcel-bunder`

Run NPM install to get the project's other dependencies.

`npm i`

## Scripts

The first two are really the only two you'll need.

|Script  |Column2  |Column3  |
|---------|---------|---------|
|`npm run start`|`npm run load & npm run page-scripts-watch`|Main dev command. Builds project and page-scripts.|
|`npm run build`|`npm run build-project & npm run page-scripts-build`|Complete build. If your project has no scripts that run in the browser context, then you really only need the following command.|
|`npm run load`|`parcel watch ./manifest.json --no-hmr`|Watches the entire project but not the page level scripts.|
|`page-scripts-watch`|`parcel watch ./scripts/doStuffOnPage.ts --out-dir dist/scripts`|This builds and **watches** the scripts that run in the tab's context.|
|`page-scripts-build`|`parcel ./scripts/doStuffOnPage.ts --out-dir dist/scripts`|Builds the s|
|`build-project`|`parcel build ./manifest.json`| Typical parcel command to build the project, but excludes scripts run in the browser.|

## Project Structure

TBD

## Commands and Scripts

TBD

### Attribution

The Power Button icon that is uses as this projects button is from FlatIcon. Cheers, FlatIcon!

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>