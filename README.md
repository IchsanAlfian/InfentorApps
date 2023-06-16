<p align="center">
  <img src="img/Logo%20Infentor%20NO%20BG.png" alt="Infentor logo" />
</p>

# InFentorApps
InFenTor is a mobile app designed to address the lack of understanding of children's intelligence types in Indonesia. Many children struggle with determining their potential careers and choosing a role model. In response to these challenges, InFenTor offers a solution by providing a user-friendly application to measure children's intelligence types and identify potential careers. The app utilizes a basis of multiple intelligences developed by Howard Gardner.

Using the app is simple: children answer intelligence-related questions, and the application generates personalized results. These results include the child's intelligence type, potential career paths, and famous figures who share the same career, serving as role models. 

# RESTful API
In the developtment the **RESTful API** we use Javascript with a nodeJS framework's [ExpressJs](https://expressjs.com/) deployed in [Google Cloud Platform](https://cloud.google.com/) services using [Google Cloud App Engine](https://cloud.google.com/appengine) for communicating between Machine Learning models and Frontend Mobile Development. We also using Google Cloud Compute Engine](https://cloud.google.com/compute) service, [Cloud Storage](https://cloud.google.com/storage) and [Cloud SQL](https://cloud.google.com/sql) for database. In addition we use Firebase Authentication in making register and login service to user can access the service.
> base url: https://infentor.et.r.appspot.com

# How to use
#### Installation
To run the application in local, install the package needed.

>npm install

### Dependency

* [ExpressJS](https://expressjs.com/)
* [fastest-validator](https://www.npmjs.com/package/fastest-validator)
* [Sequelize](https://sequelize.org/docs/v6/getting-started/)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Nanoid](https://www.npmjs.com/package/nanoid)

## Services:
#### Register
**method** :
> post

**Path** :
>users/register

#### Login
**method** :
> post

**Path** :
>users/login

#### get all users
**method** :
> GET

**Path** :
>users/

#### get user by id
**method** :
> GET

**Path** :
>users/:id_user

#### get user by name
**method** :
> GET

**Path** :
>users/search/username

#### Job
**method** :
> GET

**Path** :
>/job

#### home
**method** :
> GET

**Path** :
>/index

#### get all essayquestion
**method** :
> GET

**Path** :
>/essayQuestion

#### get all MAQuestion
**method** :
> GET

**Path** :
>/MaQuestion

#### Post MA Answer
**method** :
> GET

**Path** :
>/resultAnswerMa

## Architecture

<p align="center">
  <img src="img/Untitled%20Diagram.drawio%20(1).png" alt="skemaGCP" />
</p>


## Testing

Use Postman to test.

- Download the Postman documentation to try. [here](https://documenter.getpostman.com/view/12239151/Uz5DrdGT)

## Environtment
to run this project, you need to configure the following environment variables:
> #env
> APP_NAME=rest-api-infentor
>DB_USERNAME={localusername}
>DB_PASSWORD={your password}
>DB_HOSTNAME={your database host}
>DB_NAME={your db name}
> DB_DIALECT={your database}
