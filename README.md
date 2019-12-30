# CORPOX-UI is an example project using QUASAR - VueJS and AxiosJS library

The CORPOX-UI code is part of a CORPOX project. It consists of two web applications:

1. CORPOX-UI - this part - uses QUASAR VueJS fully responsive solution to present selected data in a convenient way on all possible devices.
2. CORPOX-REST - second part - the REST (Representational State Transfer) server using JSON format for data interchange.

#Discription

The main aim is to show JSON data of one or two employees from larger collection under certain conditions:

1. we have at least 753 employees willing to take part in a trip.

2. apart from name and photo, we need to store information about:

- age
- district where she or he lives
- team at work where she or he belongs to
- if she or he is vision impaired


Two public RESTful API endpoints are available for requests:

- **Pick a random employee** (/get-random-employee)

Corpox company has to send one of its employees for 2-weeks delegation. 753 employees are willing to take that trip. Corpox needs you to write a tool, that will help to randomly choose one of the employees.

- **Pair up** - an integration party will be organized for its employees. (/get-pair-employees)

In one of the games, manager plans to pair up employees together. For purpose of the integration, employees should not know each other very well, so manager put few reasonable constraints:

- Employees in pair should not regularly work in the same team
- Employees in pair should not be in the same age
- Employees that live in the same city district should not be in pair
- Both of employees in pair should not have defect of vision


# Pre-requisites

- Install NodeJS from [https://nodejs.org](https://nodejs.org)

- Install QUASAR VueJS framework:

```bash
npm install -g @quasar/cli
```

# Cloning the Code

Clone the code using the following command

```bash
git clone https://github.com/info-panel/corpox-ui.git
```

## Install the dependencies
```bash
npm install
```
## Upgrade and update the project

```bash
quasar upgrade --install
```

# Running the Application


### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

The application runs automatically in default browser.


# Live example

A live runnning application can be tested on [corpox.infopanel.eu](http://corpox.infopanel.eu)
