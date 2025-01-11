# Movix and TV Show Explorer

**Movix and TV Show Explorer** is a web application that allows users to search, explore, and discover movies and TV shows from a vast database. It provides a seamless and responsive experience for browsing content, viewing detailed information, and finding recommendations based on user interests.

This app leverages **React**, **Redux** for state management, and integrates with the **TMDb API** to deliver an engaging user interface that supports infinite scrolling, filtering by genres, sorting by various parameters, and much more.

---

## Overview

In this digital era, finding the right movie or TV show to watch can sometimes be overwhelming. **Movix and TV Show Explorer** simplifies this process by allowing users to easily browse through movies and TV shows from multiple genres and filter results by popularity, rating, release date, and more. The app offers features like search functionality, recommendations, and similar content for an immersive discovery experience.

The application is fully responsive, ensuring a smooth browsing experience across different devices. Users can explore content by categories, search for their favorite titles, and view detailed information, including release dates, ratings, and genres.

### Key Features:
- **Search**: Easily search for movies or TV shows by their titles.
- **Explore**: Browse and filter content based on genres, popularity, release dates, ratings, and more.
- **Recommendations**: Discover similar content based on your preferences.
- **Infinite Scroll**: Dynamically load more results as users scroll down.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

---

## Tech Stack

- **Frontend**: React, React Router, React Redux, React Icons
- **State Management**: Redux (with Redux Toolkit)
- **API**: TMDb API (The Movie Database)
- **Styling**: SCSS for modern and modular styling
- **Other Libraries**:
  - `react-infinite-scroll-component` for lazy loading
  - `react-select` for dropdowns
  - `axios` for HTTP requests

---

## Installation and Setup

### Prerequisites

Before setting up the project, ensure you have **Node.js** and **npm** installed.

### Steps to Run the App

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SanjayvVarma/movies-app.git

   cd movie-tv-show-explorer
   ```

2. **Install dependencies**:

   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Setup API Key**:
   - To fetch movie and TV show data, you need to obtain an API key from [TMDb](https://www.themoviedb.org/).
   - Once you have your API token, add it to your `.env` file:

     ```
     REACT_APP_TMDB_TOKEN=your_api_token_here
     ```

4. **Run the application**:

   After setting up the API key, start the app by running:

   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---


## How to Use

- **Search Movies/TV Shows**: Use the search bar to find movies or TV shows by title.
- **Explore Section**: You can filter the content by genres, sort by different criteria such as popularity or rating, and view content in a variety of ways.
- **Recommendations**: After selecting a movie or TV show, similar recommendations are displayed to help you discover more content.
- **Infinite Scroll**: As you scroll down, new results are automatically loaded to keep the experience smooth and uninterrupted.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- **TMDb API**: Provides the movie and TV show data.
- **React**: The JavaScript library used to build the user interface.
- **Redux Toolkit**: Simplifies state management.
- **SASS**: Used for modular and efficient styling.