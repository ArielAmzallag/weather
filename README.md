# Weather API Project

This project is a simple Express.js application that provides weather information for a specified city using the WeatherAPI. It allows users to request current weather data by city name.

## Features

- Get current weather data by city name.
- Response includes weather details like temperature, condition, humidity, etc.
- Error handling for invalid requests or server issues.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (Node Package Manager)
- A valid API key from WeatherAPI

### Installing

A step-by-step guide to get a development environment running.

1. Clone the repo to your local machine:

```bash
git clone https://github.com/ArielAmzallag/weather.git
```

2. Navigate to the project directory:

```bash
cd weather
```

3. Install the necessary npm packages:

```bash
npm install
```

4. Create a `.env` file in the root of your project and add your WeatherAPI key:

```env
API_KEY=8f7764f30c914759951151004240602
```

5. Start the development server:

```bash
npm start
```

The server will start running on `http://localhost:3000`.

## Usage

To get the current weather data for a city, send a GET request to the `/weather/:city` endpoint, where `:city` is the name of the city you want information for.

Example request using `curl`:

```bash
curl http://localhost:3000/weather/Paris
```

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [dotenv](https://www.npmjs.com/package/dotenv) - Module to load environment variables from a `.env` file

## Authors

- **Ariel Amzallag** - *Initial work* - [ArielAmzallag](https://github.com/ArielAmzallag)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- WeatherAPI for providing the weather data API.
- Express.js documentation and community for guidance.
- All the npm package maintainers whose packages made this project possible.