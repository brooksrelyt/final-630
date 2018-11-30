# Hunger-de-fusion

INST630 Final Project - College Park Restaurant Finder

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites and Installation

What things you need to install the software and how to install them

To display the data and run the [D3.JS](https://github.com/d3/d3/wiki) scripts on your machine you must download a few dependecies. Instructions can be found in the previous link also.

D3.JS requires you download node.js and npm (if not already installed) before you can do anything.

Check that node.js is installed:

```
node -v
```

Check that npm is installed:

```
npm -v
```

If node is not installed go [here](https://nodejs.org/en/download/) to install it for windows/mac.
After installation test to see if it worked by typing 'node -v' again.

Now that node is installed the npm install is relatively simple. npm is smart enough to know what version you need and will install the most recent stable version if you type the command below:

```
npm install npm@latest -g
```

If you get a ton of errors it may because you do not have write permissions to your machine. Use the command below to over ride this by using 'sudo'.

```
sudo npm install npm@latest -g
```

It should prompt you to type in your device password. Installation will start once the password is verified.

So, now that you have node.js and npm installed only one step is left.

To install whats needed to run d3.js run:


```
npm install -g http-server
```

Again if this doesnt work run:

```
sudo npm install -g http-server
```

Now you should be good to go. Navigate to the root of the project folder '/final-proj-dev' and run the script:

```
http-server & 
```


The points should be plotted. Let me know if it doesnt work or if you need help. I wrote these steps from a completely blank Macbook so you might need to update current versions/idk what could happen. Let me know.
