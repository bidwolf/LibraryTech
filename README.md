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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## What's my objective

 - [ ] Learn react
 - [ ] Pratice CSS grid with the book ***CSS GRID LAYOUT by Maurício Samy Silva***
 - [ ] Pratice CSS Animations
 - [ ] Pratice Typescript and Javascript a lot

---

### Creating a component in React

You will learn more about components, and the estruture of them later, but what you need to know is:

#### To create functional components

```jsx
//FCC - Create functional component jsx
import React from 'react';
import styles from './component.css'
const ComponentName = ()=>{
    return(
        <div className="componentClass">
            Jsx code here
        </div>
    )
}
export default ComponentName
```
#### To create Class components

```jsx
//CC - Create class component jsx
import React,{Component} from 'react';
import styles from './component.css'

class  extends Component {
    state = { 
        initial:'initial value'//component state, when starts render, part of initializing component life-cycle 
     }
    static getDerivedStateFromProps(props,state){
        /*
        Unique method available in initializing phase
        DON'T USE THAT, see documentation
        It's called in the Updating Phase too
        */ 
     }
    render() { 
        // This method returns an React Element to component load, will be called when starts and when state is updated
            return (
               <div>
                   JSX code 
               </div>
            );
        }
    componentDidMount(){
        /*This method is called after the component is render 
        usually called to load blocking scripts like API
        loads, because the main content has already been
        rendered. Part of mounting component life-cycle*/
    }
         shouldComponentUpdate(){
            /*
            This method will be called to verify if the updated
            value of state  should cause a new rendering in the
            component
            Good to help in performance where the state update
            constantly
            */
         }
         getSnapshotBeforeUpdate(){
            /*
            This method will be called before an re-update renderer
            in the component.
            Allows the catch of DOM information before updating the component, which can be passed as parameters to the method componentDidUpdate
            */
         }
    componentDidUpdate(){
        /*
        Called after renderer the component by update
        */
    }
    componentWillUnmount(){
        /*
        This method is part of Unmounting life-cycle, and is
        the unique method of this phase, will be called before removing component in the DOM.
        */
    }
}
export default ComponentName
```
#### Using components in JSX

To use an existing component in your project, you can add your component in the `App.jsx` or other component `Component.jsx` with an code like:

```jsx
import ComponentName from './component/ComponentName.jsx'

//code of rootComponent (App.jsx or any other) component here
//(can be class or functional component)
    render(){
        return(
            <div className="rootComponent">
                <ComponentName prop={propsOfComponent}>
            </div>
        )
    }
```