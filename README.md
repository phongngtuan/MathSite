##Requirements:
* Python 3
* MySQL server

##Installations:
####Django setup
It is recommended that you install python [virtualenv](http://docs.python-guide.org/en/latest/dev/virtualenvs/) and virtualenvwrapper to isolate the development environment from your local 
After you get both setup. Create a new virtualenv, activate that and install (don't run with sudo if you're using Mac or Linux as it will install to root dir instead of the virtual env)
Install the requirements using pip. You may need to download and install sympy separately.
    pip install -r requirements.txt
Some components may not be required depends on your setup. The minimum requirement is:
* Django
* djangorestframework
* drf-nested-routers

####MySQL setup
Setup your MySQL server and provide your username, password and database name in settings.py (Refer to Django documentation)
It is recommended that you use Django built-in function to setup database schema so that it is easier to change the schema
if there is change to the models
    python manage.py makemigrations maths
    python manage.py migrate
Use the dumped sql files to import data to your MySQL database. Since Django may create your database with different column
order, check the column order in the dumped sql files, change column order in database accordingly and execute only the insert statement

####Javascript and HTML frontend
It should work out of the box if you clone the project on GitHub. Otherwise please install required components using bower
    bower install <your_component>
This is the recommended way to manage your dependencies

##Overview
####Django server
Rather than using Django to serve the HTML. This project uses it as a application server and communicate through a RESTful API
Server only serve the initial page with Javascript code and then response to the request by JSON message.
#####Serializer
In order to send the data to the front end, object need to be serialized. This project makes use of Django rest framework's serializers. Default implementation with minimal coding is enough for most cases (not for Questions). Refer to Django Rest framework's documentation for more details.
####Views
Request need to be sent to the correct URL, and the corresponding function in Django will be called to serve the request
Similar to Django's default views. ModelViewSet is a view provided out of the box to provide some frequently used action on an object
####Router
Used to provided a set of URL endpoints for your API


####Angular
Please refer to AngularJS documentation before proceeding.
Angular source code is separated into modules based on the functionality they provide. The root file you can have a look at is maths.js
Other modules are organized in such way: /moduleName/role/particularName.js
For example:
questions module has a root file: questions.module.js 
all controllers for question in controllers/
all services for question in services/
#####Services:
Service is the singleton object to provide common functionality for 1 specific module
In this project, a service will provide method for access the RESTful API of a model: get/post/put/...
#####Overview:
The common workflow is:
* A view needs some data to display to user. The corresponding controller will call a method in the service to get a object or list of objects
* Once the objects are fetched, callback is called to assign to the model in $scope so that they are displayed to users
* After users edit, a POST/PUT method is sent to server by calling service method

Certain processing, especially on question/answer, need to be done to get the content correctly

##Work In Progress
* There are 2 tables: Solution and Answer. Need to evaluate to see which one is required and merge if possible
* The figure data I received does not contains enough info for all the questions
* Login/ Authentication functionality. A placeholder is there but not yet implemented. It is suggested you use Django's authentication model
* Displaying latex in answer placeholder is not working as the text got from the database doesn't contain latex tag ($$, [\,...) need to edit and figure out the common way among all the questions and answers
* Adding figures to a question is not intuitive. I suggest you replace "img" placeholder with a tag like [[id]] with id is a value that the users key in. That way if the order of appearance in the question is independent of the order in database
