# react-project-deployed

# How to deploy an app on Github pages!
## 1. Install github pages.
In your terminal, use the command ``` npm install gh-pages --save-dev ```
## 2. Add commands to package.json
- [ ] At the top, add 
```json
"homepage": "http://username.github.io/example-repo-name",
``` 
replacing the username and repo with your github username and repo name. You can see my package.json file for reference. 
- [ ] In scripts, add 
```json
"predeploy":"npm run build", 
"deploy": "gh-pages -d build", 
```
## 3. **Commit the repo and push it to github.**
Simply follow the instructions on github to push your repository.
## 4. **Deploy the site**
Run ``` npm rum deploy ``` in the terminal.
 This will make your website on the gh-pages branch in your github repo. 
## 5. Check the site has deployed on github.
 In the **github repo settings**, in Pages click deploy from branch  and select the branch ```gh-pages``` like this:
 ![Image of gh-pages deployment on Github](./src/gh-pages.png "Title") 
 ## 6. Save your changes in Pages and copy your updated link. 
 The link to your website will appear at the top of your Pages settings. Copy the link and add it to the website section of the **About** section on your github page! 
# How to update your page after you make changes

## 1. Commit and push your changes to github like you would normally,  then run ``` npm rum deploy ``` to update the deployed site. That's all! 

BoilerPlate ReactJS help:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
