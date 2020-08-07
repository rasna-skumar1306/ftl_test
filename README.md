This project is built using react js and bootstrapped using create-react-app.

# FTL_TEST

__First I have designed the UI and Loaded the Sample data.__
The UI consist of one page and 4 components
* **Pages** user_page
* **Components**
* calendar
* details
* header
* user

***First run the***
``` 
npm run json:server
``` 
***command and then run***
```
npm install -g serve
serve -s build
serve -s build -l 4000
```

## The Fake Api

I have used json-server package to run the dummy api and have loaded the data into db.json. ***This runs on localhost:5000***. 

## App

The gets the data from API through axios. And Use the Data to render the components. ***This runs on localhost 3000***.

__The Deploy ready fields are in /Build folder.__
