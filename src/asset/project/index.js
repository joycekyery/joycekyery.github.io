import dontRecipeImage from './dontForgetRecipe.png'
import onwardImage from './onward.jpg'
import personalWebsiteImage from './personalWebsite.png'
export const projects = [
  {
    title: 'Dont Forget Your Recipe',
    image: dontRecipeImage,
    description:
      "Recipe forum for users to upload recipes and view others' work. Feel free to register or use the playaround account:user01 password:00000000",
    tools: 'MongoDB + node.js + React JS + Material UI + axios + CSS',
    visit: 'https://dont-forget-your-recipe.onrender.com/',
    sourceCode: 'https://github.com/IT-Project-Team-70/IT-Project',
  },
  {
    title: 'Personal Website',
    image: personalWebsiteImage,
    description: 'Static website, my personal website and portfolio',
    tools: 'React JS + Material UI + CSS + MongoDb + NodeJS + Express',
    visit: 'https://joycekyery.github.io/',
    sourceCode: 'https://github.com/joycekyery/joycekyery.github.io',
  },
  {
    title: 'Onward security - Management Platform',
    image: onwardImage,
    description: 'Frontend of the management platform',
    tools: 'React JS + Material UI + axios + Redux + CSS',
  },
]
