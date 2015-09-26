# website-template
A template for creating simple sites, specifically designed to be hosted on Heroku's free servers

##Fork this repository
![how to fork](https://s3-ap-southeast-2.amazonaws.com/website-template-git/how-to-fork.jpg)

##Host this on Heroku
###1. Create a Heroku Account
<a href="https://signup.heroku.com/" target="_blank">Heroku Signup</a>

###2. Login and Create an app
<img src="https://s3-ap-southeast-2.amazonaws.com/website-template-git/create-new-heroku-app.jpg" alt="create heroku app" border="2"/>

###3. Choose a name, Select United States as the region
<img src="https://s3-ap-southeast-2.amazonaws.com/website-template-git/setup-app.jpg" alt="Set up app" border="2"/>

###4. Select Deploy -> Github -> Login to github
<img src="https://s3-ap-southeast-2.amazonaws.com/website-template-git/connect-to-github.jpg" alt="Connect to Github" border="2"/>

###5. Search and select your website-template repository
<img src="https://s3-ap-southeast-2.amazonaws.com/website-template-git/search-and-connect.jpg" alt="Search and Connect" border="2"/>

###6. Automatic Deploy and Deploy Branch
Automatic deploy means when you make changes and upload to github, it will automatically deploy the website
<img src="https://s3-ap-southeast-2.amazonaws.com/website-template-git/deploy.jpg" alt="Deploy" border="2"/>

###Congratulations, you now have a website running!

##Keep this site on
Heroku tends to put your website to sleep if there is no activity for an hour. (for the free tier)
Website-template has the ability to escape the sleep by pinging itself.  You'll need to set this up through Heroku.

###1. Go into settings and reveal config variables
<img src="https://s3-ap-southeast-2.amazonaws.com/website-template-git/settings.jpg" alt="Open settings" border="2"/>

###2. Add a variable called 'name' with the value of your website name
<img src="https://s3-ap-southeast-2.amazonaws.com/website-template-git/settings-setup.jpg" alt="Settings-setup" border="2"/>

##Making changes
Please only make changes inside the public/ folder. You can do anything in here, create, edit and delete files/folders

##Run server on dev environment
On your local computer, in this folder, type this into your command line.
```
npm run dev
```

This will start up a dev server on http://localhost:8000 with a change detect automatic reload


