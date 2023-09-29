import dontRecipeImage from './dontForgetRecipe.png'
import onwardImage from './onward.jpg'
import personalWebsiteImage from './personalWebsite.png'
import NoTimeToDieImage from './No-Time-To-Die.gif'
export const projects = [
  {
    title: 'Dont Forget Your Recipe',
    image: dontRecipeImage,
    description:
      "Recipe forum for users to upload recipes and view others' work. Feel free to register or use the playaround account:user01 password:00000000",
    tools: 'MongoDB + node.js + React JS + Material UI + axios + CSS',
    visit: 'https://dont-forget-your-recipe-01b6e5c5214e.herokuapp.com/',
    sourceCode: 'https://github.com/joycekyery/IT-Project',
  },
  {
    title: 'Personal Website',
    image: personalWebsiteImage,
    description: 'My personal website and portfolio',
    tools: 'React JS + Material UI + CSS + MongoDb + NodeJS + Express',
    visit: 'https://www.yungchingl.com/',
    sourceCode: 'https://github.com/joycekyery/joycekyery.github.io',
  },
  {
    title: 'Unity Game - No Time To Die',
    image: NoTimeToDieImage,
    description:
      'No Time To Die is an adventure game in which you play as a castle guard trapped on an island, trying to survive.',
    tools: 'Unity',
    sourceCode: 'https://github.com/joycekyery/That-Unity-Game',
  },
  {
    title: 'Onward security - Management Platform',
    image: onwardImage,
    description: 'Frontend of the management platform',
    tools: 'React JS + Material UI + axios + Redux + CSS',
  },
]
