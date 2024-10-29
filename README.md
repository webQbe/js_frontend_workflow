# JavaScript Front-End Workflow

- Using the Parcel app bundler to build a larger app 
- Dealing with multiple files, custom components, when no frameworks are used.
- Creating a boilerplate for building advanced JS projects.
- Using different files, such as `main.js` file, and component files such as: `components/header.js` and `components/user.js`
- Including SASS to use SCSS files directly.
- Babel compiler is used to deal with modern JS.

## Getting Started

1. Open VSCode Integrated Terminal
    - Run `npm init -y` to create `package.json` file

2. Install dependencies
    - Run `npm i -D parcel-bundler sass @babel/core @babel/plugin-transform-runtime @babel/runtime-corejs2`

3. Create `.babelrc` file and add code.
4. Create `public/` directory to place HTML files.
5. Create  JavaScript entry point: `src/app.js`.
6. Replace existing script in `package.json` file with:
    - `"dev": "rm -rf ./development && rm -rf ./.cache && parcel public/index.html --out-dir development -p 3000"`
        - The command specifies bundler, main entry file location, output directory name, port to run on
        - `rm -rf ./development && rm -rf ./.cache` command removes `development` & `cache` folders.
        - `--out-dir development` will recreate the removed folders.

7. Add `build` script to `package.json` file:
    - `"build": "parcel build public/index.html --out-dir dist --public-url ./"`
        - Installs parcel locally.
        - `--out-dir dist` attaches output directory for static assets

8. Run development server with `npm run dev` command.
9. Run compiler with `npm run build` command.
10. You can delete `development`, `dist`, & `.cache` folders since they are re-created.


## Implementing SASS

1. Create `src/scss/app.scss` file.
2. 