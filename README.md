# Ignite-Lab-2
Ignite Lab 2

[Vite]()
Create a new Vite project.
```sh
npm create vite@latest
```
- Give it a name.
- Choose the framework you want to use: 'react'.
- Choose 'react-ts' ro use TypeScript in your project.
- Enter to the project folder.
- Install the dependencies:
```sh
npm i
```

Execute the Project
```sh
npm run dev
```

Install the Development dependencies:
```sh
npm i tailwindcss postcss autoprefixer -D
```

Create the tailwindcss and postcss configuration files
```sh
npx tailwindcss init -p
```
- CMS: Content Management System. It is used to manage the content (frontend and backend) of the website.
- Headless CMS: CMS without a frontend.

Clone the GraphCMS project [here](https://rseat.in/lab-graphcms).

## Install Apollo dependencies
```sh
npm i @apollo/client graphql
```

## Install Phosphor Icons dependencies
```sh
npm i phosphor-react
```

## Install Date FNS dependencies
```sh
npm i date-fns
```

<p align="center">
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ide">IDE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licence">Licence</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>
<p align="center">
    <a href="https://douglasdl.github.io/NLW6-Origin/">
        <img alt="OriginSix" src="https://douglasdl.github.io/images/OriginSix.png" width="100%">
    </a>
</p>

## 🚀 Technologies

This project was developped using the following technologies:
<p alight="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://reactjs.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.typescriptlang.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://tailwindcss.com/"><img height="40" src="" alt="tailwindcss"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://graphcms.com/"><img height="40" src="" alt="graphcms"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href=""><img height="40" src="" alt=""></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

📚 Libraries
- [Google Fonts](https://fonts.google.com/)
- [SwiperJS](https://swiperjs.com/) or [SwipeJS (Github)](https://github.com/nolimits4web/Swiper)
- [Scroll Reveal](https://scrollrevealjs.org/)

🛠 Utilities

SVG
- [SVG to JSX Converter](https://svg2jsx.com)

Icons
- [Phosphor Icons](https://phosphoricons.com/)

## 📐 Project

This project...
Check the project online [here](https://douglasdl.github.io/Ignite-Lab-2/).
Sections: Header, Navigation, Home, About, Services, Testimonials, Contacts and Footer.

## 🔖 Layout

The basic layout project can be accessed in [this link](https://www.figma.com/file/5F9t0cl0rUBQG9v8Q6nSbH/Plataforma-de-evento---Ignite-Lab-(Community)?node-id=0%3A1) in your [Figma](https://figma.com) account.

## 💻 IDE
This project was done using [Visual Studio Code](https://code.visualstudio.com/) IDE.

### 🧩 VS Code Extensions

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#:~:text=Prettier%20is%20an%20opinionated%20code,account%2C%20wrapping%20code%20when%20necessary.)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

### ⚙ VS Code Configuration

-   CRTL + SHIFT + P
    -   settings.json

```javascript
{
    /* Define o tema do VS Code */
    "workbench.colorTheme": "Dracula",
    /*"workbench.colorTheme": "Omini", */
    "workbench.iconTheme": "material-icon-theme",

    /* Configura tamanho e família da fonte */
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "workbench.editor.tabSizing": "shrink",
    "explorer.compactFolders": false,

    /* Aplica linhas verticais para lembrar quabra de linha em códigos muito grandes */
    "editor.rulers": [80, 120],
    "editor.formatOnSave": false,
    "editor.minimap.enabled": false,

    "window.zoomLevel": -1,
    "explorer.confirmDelete": false,
    "terminal.integrated.shell.osx": "/bin/zsh",
    "tabnine.experimentalAutoImports": true,
    "python.languageServer": "Pylance",
    "explorer.confirmDragAndDrop": false,
    "editor.accessibilitySupport": "off",

    /* Formatter */
    "prettier.tabWidth": 4,
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none",
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "auto",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,

    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.doNotVerifyTags": true,

    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    }

    /*"eslint.packageManager": "yarn", */
    /*"eslint.autoFixOnSave": true, */
}
```

## 📝 Licence

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

Done with ♥ by [Douglas Dias Leal](mailto:douglasdiasleal87@gmail.com)
