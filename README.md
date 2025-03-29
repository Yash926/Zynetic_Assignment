# Weather Dashboard

The **Weather Dashboard** is a React-based web application that provides real-time weather information and a 5-day forecast for any city. It features a clean and responsive design, supports light and dark themes, and includes additional functionalities like recent searches and error handling.

---

## Features

- **Real-Time Weather Data**: Displays current weather conditions, including temperature, humidity, wind speed, and a description.
- **5-Day Forecast**: Provides a 5-day weather forecast with daily summaries.
- **Search Functionality**: Search for weather data by city name.
- **Recent Searches**: Keeps track of the last 5 searched cities for quick access.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Fully responsive and optimized for all screen sizes.
- **Loading and Error Handling**: Displays a loader while fetching data and user-friendly error messages for invalid inputs or API issues.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS, Framer Motion
- **API**: OpenWeatherMap API
- **Build Tool**: Vite
- **Utilities**: Axios for API requests
---
## Folder Structure

```
weather-dashboard/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── services/          # API service functions
│   ├── utils/             # Utility functions and icons
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles
│   └── App.css            # Component-specific styles
├── .env                   # Environment variables
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## Usage

1. **Search for a City**: Enter a city name in the search bar and press "Search Weather" to view the current weather and 5-day forecast.
2. **Recent Searches**: Click on a recently searched city to quickly view its weather data.
3. **Refresh Data**: Use the "Refresh" button to fetch the latest weather data for the current city.
4. **Toggle Theme**: Click the theme toggle button to switch between light and dark modes.

---

## API Integration

The application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. The following endpoints are utilized:

- **Current Weather**: `/weather`
- **5-Day Forecast**: `/forecast`

Ensure you have a valid API key and add it to the `.env` file as `VITE_WEATHER_API_KEY`.

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

---

## Customization

### Tailwind CSS
The application uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

### Icons
Weather icons are fetched from the OpenWeatherMap API. The application ensures only day icons are used by replacing any night icons (`n`) with day icons (`d`).

---

## License

This project is licensed under the [MIT License](../LICENSE).

---

## Screenshots

### Welcome Screen
![Welcome Screen](/screenshots/image1.png)

### Light Mode
![Light Mode Screenshot](/screenshots/image3.png)

### Dark Mode
![Dark Mode Screenshot](/screenshots/image2.png)

---

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
