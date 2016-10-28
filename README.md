# restaurant-reviewer

Corporate Dashboard App, Project 4 from Udacity Senior Web Developer Nanodegree. It's a responsive app.  
### Requirement  
> You must develop a corporate dashboard application using a front-end MVC framework of your choosing. The dashboard application must contain a header (with the currently selected dashboard’s name); a menu, allowing the user to navigate between dashboards; and the primary dashboard display area. You should find, or create, your own data files in CSV and JSON formats to provide data to the dashboards. The required dashboards are:
A geospatial view, identifying the number of employees at various company locations.
A “key metrics” view, containing components displaying: the number of open issues, a line chart reflecting number of paying customers over a period of time, and a bar chart reflecting number of reported issues over a period of time.
A “data view” of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable. An issue should contain the following fields:
submission timestamp
customer name
customer email address
description
open/closed status
closed timestamp
employee name  

> Udacity

##[Demo](https://udacityfour.firebaseapp.com/#/app/home)  
You can see a demo [here](https://udacityfour.firebaseapp.com/#/app/home).  

### Mobile  
<img src="https://raw.githubusercontent.com/mortoni/restaurant-reviewer/master/app/images/udacity3-3.png" width="250" height="500" /> <img src="https://raw.githubusercontent.com/mortoni/restaurant-reviewer/master/app/images/udacity3-1.png" width="250" height="500" /> <img src="https://raw.githubusercontent.com/mortoni/restaurant-reviewer/master/app/images/udacity3-2.png" width="250" height="500" />

### Desktop  
![image](https://raw.githubusercontent.com/mortoni/restaurant-reviewer/master/app/images/udacity-desktop.png)  

##Technologies
[AngularJS](https://angularjs.org/)  
[Firebase](https://www.firebase.com/)  
JavaScript  
HTML5  
CSS3  
Gulp
BootStrap 3  
JQuery  

##Dependencies
- **Node.js**  
You must download and install it [here](https://nodejs.org/en/).  

##Running
Go to root folder of project, open your terminal and then follow steps:  
###Development Server  
- Installing dependencies:
```{r, engine='bash', count_lines}
$ npm install
```

- Running server:  
```{r, engine='bash', count_lines}
$ gulp serve
```
###Distribution Server  
- Generate distribution:  
```{r, engine='bash', count_lines}
$ gulp build
```

- Running server:  
```{r, engine='bash', count_lines}
$ gulp test
```

##Features  
**Version 1.0.0**  
- First commit
