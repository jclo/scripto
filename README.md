# README

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![License][license-image]](LICENSE.md)

This project is a template for creating a Node.js script.


## Quick Startup

You can easily get your first Node.js script by simply adding a package.json file to your empty project folder and filling it with the following lines:

```json
{
  "name": "NameOfYourProject",
  "scripts": {
    "create": "npm install @mobilabs/scripto && npm run populate",
    "populate": "scripto populate --name $npm_package_name --author $npm_package_config_name --acronym $npm_package_config_acronym --email $npm_package_config_email --url $npm_package_config_url && npm install"
  },
  "config": {
    "name": "John Doe",
    "acronym": "jdo",
    "email": "jdo@johndoe.com",
    "url": "http://www.johndoe.com/"
  }
}
```
Replace **NameOfYourProject** by your project name and fill **config** with your credentials.

And finally, type in the terminal:

```bash
npm run create.
```

That's almost all! When the script has been executed, your folder contains the following files:

```bash
Your project Folder 
      |_ scripts
      |   |_ ...              // The scripts to build your project,
      |_ src
      |   |_ main             // The contents of our script(s),
      |
      |_ .eslintignore        // Files to be ignored by ESLint,
      |_ .eslintrc            // A Configuration file for the ESLint linter tool (if you use it),
      |_ .gitignore           // Files that Git must ignore (if you use git),
      |_ .npmignore           // Files that are ignored by npm publish,
      |_ .CHANGELOG.md        // The changes between your different versions,
      |_ LICENSE.md           // The license that applies to your library (here MIT),
      |_ main.js              // The Node.js script,
      |_ package-lock.json    // The NPM dependency tree,
      |_ package.json         // The NPM package file,
      |_ README.md            // Your README file,
```

This folder is now a NPM package.

## Run

Your script is ready to run!

To get the help, type:
```bash
node main.js --help
```

To execute a command, type:
```bash
# parse command:
node main.js xxx -x myarguments
```

That's all!


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/scripto.svg?logo=npm&logoColor=fff&label=NPM+package
[release-image]: https://img.shields.io/github/release/jclo/scripto.svg?include_prereleases
[commit-image]: https://img.shields.io/github/last-commit/jclo/scripto.svg?logo=github
[license-image]: https://img.shields.io/npm/l/scripto.svg

[npm-url]: https://www.npmjs.com/package/@mobilabs/scripto
[release-url]: https://github.com/jclo/scripto/tags
[commit-url]: https://github.com/jclo/scripto/commits/master
[license-url]: http://opensource.org/licenses/MIT


-- oOo --
