
Weather App : Forecast for 5 days for Pune.

The API used provides weather forecast every 3 hours of next 5 days.
This application takes only first forecast of the day into account for simplification.

Build Steps:
- Build using webpack : npm start build
- Can be run locally using dev server : npm run start

Steps to run it locally - 
- One should have the node js install on local machine.
- Clone the repository and run 'npm install'.
- Start the server using 'npm run start'

Steps to run test cases locally:
- Run local dev server 'npm run start'
- Run url - http://localhost:8080/jasmine/SpecRunner.html

To deploy it on open server - 
Build it using webpack 'npm run build'
Tried to deploy it on heroku but short of time

____________________________________
What could be done with more time
____________________________________

- Deploy on Heroku or any other open server.
- I would have preferred to build it on existing frameworks like Angular JS 1.5/2 or React JS
  It provides a lot better structure and make it easy and fast to build an application.
  Creating different components could have made this really easy.
- Add mocks to enable mock environment. It enables to go ahead with development even when services are unavailable.
- Add eslintrc to validate the code and set of rules.