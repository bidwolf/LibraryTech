# Getting Started with Library Tech

This project was developed with react based on book ***React learn in Pratice by Maurício Samy Silva***

## Tecnologies

![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

![Typescript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject` , you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject` . The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## What's my objective

 - [ ] Learn react
 - [ ] Pratice CSS grid with the book ***CSS GRID LAYOUT by Maurício Samy Silva***
 - [ ] Pratice CSS Animations
 - [ ] Pratice Typescript and Javascript a lot

## Configuring typescript project

When you starts the project based on the book, maybe you use create-react app without template of typescript, it's proposital, us objective is practice and learn many forms to configure this project. For that reason, this topic will teach how use typescript in a react project without one automatic configuration template.

### Dependencies

First, we need install some dependencies, below in, are listed the dependencies and there functions in us configuration:

Dependency|Version|Function
:---:|:---:|:---:
@types/react|^18.0.15|This dependency provides types of the lib to utilize in typescript archives.
@types/react-dom|^18.0.6|This dependency provides types of the lib to utilize in typescript archives.
@types/node|^18.0.3|This dependency provides types of the lib to utilize in typescript archives.
@types/jest|^28.1.4|This dependency provides types of the lib to utilize in typescript archives.
typescript|^4.7.4|Apply types to your JavaScript project incrementally, each step improves editor support and improves your codebase

---

### The tsconfig.json

This is the main resource of configuration of application, because of him, the typescript will be transpile to javascript behaving like the project before the changes of this topic(not all).

```json
{
  "compilerOptions": {
    "target": "ES2016",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}

```

* The `allowJs` option help you to allow files .js in your project.
* The `module` option help you to select the import and export method
* The `include` option determines directories to match your application files
* The `target` option set the target language to support and set compatibilities methods to them.

### The changes in the project files

When we change components to tsx files we need to pay attention if the component have props. The presence of props in functional components provides changes in the type of component, because, props will need type, and additionally functional components can receive another parameters like children, and you don't need create an interface to him, you need to use the syntax below :

```ts
const component:React.FC<InterfaceOfComponentProps>(props:InterfaceOfComponentProps){
    //Your code of component going here...
}
```
The `<InterfaceOfComponentProps>` pass to `component` the type of the component props, it's one param of the `React.FC`.
