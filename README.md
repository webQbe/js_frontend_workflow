# JavaScript Front-End Workflow

- Using the Parcel 2 app bundler to build a larger app 
- Dealing with multiple files, custom components, when no frameworks are used.
- Creating a boilerplate for building advanced JS projects.
- Using different files, such as `main.js` file, and component files such as: `components/header.js` and `components/user.js`
- Including SASS to use SCSS files directly.
- Babel compiler is used to deal with modern JS.

## Getting Started

1. Open VSCode Integrated Terminal
    - Run `npm init -y` to create `package.json` file

2. Install dependencies
    - Run `npm i -D parcel sass @babel/core @babel/plugin-transform-runtime @babel/runtime-corejs2`
    - Or Run `yarn add -D parcel sass @babel/core @babel/plugin-transform-runtime @babel/runtime-corejs2`

3. Create `.babelrc` file and add code.
4. Create `public/` directory to place HTML files.
5. Create  JavaScript entry point: `src/app.js`.
6. Replace existing script in `package.json` file with:
    - `"dev": "rm -rf ./development && rm -rf ./.cache && parcel serve public/index.html --dist-dir development -p 3000"`
        - The command specifies bundler, main entry file location, output directory name, port to run on
        - `rm -rf ./development && rm -rf ./.cache` command removes `development` & `cache` folders.
        - `--dist-dir development` will recreate the removed folders.

7. Run development server with `npm run dev` command.



## Implementing SASS

1. Create `src/scss/app.scss` SASS file.
2. Import the SASS file to `src/app.js`.


## Installing Axios

1. Run `npm i axios`
2. Create `src/components/user.js` file.
3. Open `user.js` and import `axios`.


## Compliling Your Project

1. Add `build` script to `package.json` file:
    - `"build": "sass src/scss/app.scss dist/app.css && parcel build public/index.html --dist-dir dist --public-url ./"`
        - `"sass src/scss/app.scss dist/app.css"`: bundles the generated CSS file instead of compiling it directly from SCSS.
        - `--dist-dir dist` attaches output directory for static assets

2. Fix PostCSS “Plugin is Not a Function” Error:
    - Create a `postcss.config.js` file
    - Ensure PostCSS and Autoprefixer are installed: `npm install -D postcss autoprefixer`

3. Update your `<script>` tag in `public/index.html` to include the `type="module"` attribute: `<script src="../src/app.js" type="module"></script>`

4. Since you’re building an HTML-based app rather than a Node module, it’s better to remove `"main"` field from `package.json` file entirely.

5. Run `npm run build` to create `dist/` folder with output files.
    - If Parcel's cache causes build issues. Try clearing it: `rm -rf ./.cache`

6. You can delete `development`, `dist`, & `.cache` folders since they are re-created.