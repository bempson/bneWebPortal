# bneWebPortal
This is my attempt to integrate CakePHP 3.4 and Angularjs 1.6.4

```
Directory structure:
   /path/to/index.html
           /api/
           /css
           /js
           /views
           /vendor
```

You will need to have a configured web server.  There are plenty of how to out there..  
Once you have a web server able to display index.php web page, you can proceed.

**Step 1.** Create a project directory.
```
mkdir /path/to/project

cd /path/to/project
```

**Step 2.** Install cakephp in api directory.
```
composer create-project --prefer-dist cakephp/app api
```

**Step 3.** Update the config/app.php with the proper datasource config.
```
vi api/config/app.php
```

**Step 4.** I created a symlink in /var/www/html/ to the project.
```
cd /var/www/html

ln -s /path/to/project project
```

**Step 5.**  config/routes.php and add the following.
```
Use Cake\Routing\Router\extensions;

Router::extensions(['json', 'xml']);
```

**Step 6.** src/Controller/AppController.php:
```
use Cake\Controller\Component\RequestHandlerComponent;
```
