# MovieFinder - A React Movie Search App Prototype

This is a basic prototype of a movie search web application built with React.js. It allows users to search for movies using the OMDB API and view details about them.

## Features

* **Homepage:** Displays a search bar and a default list of popular movies.
* **Search Functionality:** Fetches and displays movie search results (title and year) from the OMDB API.
* **Movie Details Modal:** Shows detailed information (plot, genre, ratings, etc.) when a movie is selected.

## Live Demo 

https://moviiesearch.netlify.app/

## API Key

This project uses the OMDB API. The API key used in this prototype is `4462d54d`.
You can obtain your own API key from [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).

## Technical Stack

* **Frontend:** React.js
* **State Management:** React Hooks (`useState`, `useEffect`),Custom Hooks
* **Styling:** Basic CSS (no external CSS framework used in this core prototype)
* **API:** OMDB API

## Getting Started

### Prerequisites

* Node.js (v14 or later recommended)
* npm (v6 or later) or yarn

### Installation & Running Locally

1. **Clone the repository:**
```bash
git clone https://github.com/Akhiil222/Movie-Search (https://github.com/Akhiil222/Movie-Search)
cd Movie-Search
```

2. **Install dependencies:**
```bash
npm install
```
or
```bash
yarn install
```

3. **The API key is already included in the source code (`src/App.jsx`).**
If you wish to use your own, replace the `API_KEY` constant in `src/App.jsx`.

4. **Start the development server:**
```bash
npm start
```
or
```bash
yarn start
```
The application will open in your default browser at `http://localhost:3000`.

## How to Test

1. **Homepage Load:**
* Verify that a list of popular movies is displayed by default.
* Ensure the search bar is present.

2. **Search Functionality:**
* Enter a movie title (e.g., "Inception", "The Matrix") into the search bar.
* By Use of custom Hook debouncing there is no need to CLICK SEARCH Button
* Confirm that search results are displayed, showing movie titles and release years.
* Test with movie titles that yield no results to see the "No movies found" message.
* Clearing the search bar and searching should ideally bring back the popular movies list.

3. **Movie Details Modal:**
* Click on any movie title/card from the list.
* A modal should appear displaying more details: Plot, Genre, IMDb Rating, Poster, etc.
* Close the modal by clicking the "×" button or outside the modal content.

4. **Responsiveness:**
* Resize your browser window to ensure the layout adapts to different screen sizes (desktop, tablet, mobile).

5. **Loading/Error States:**
* Observe loading indicators during data fetching.
* (If possible to simulate) Check if error messages are displayed for API issues or no results.

## Project Structure
```movie-search-app/
├── public/
│   └── index.html
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   ├── MovieModal.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/                 # Custom React hooks
│   │   └── useDebounce.jsx
│   ├── App.css                # Main app styles
│   ├── App.jsx                # Main application component
│   └── index.js               # Entry point of the React app
├── .gitignore
├── package.json
└── README.md
```



## Screenshots 
![image](https://github.com/user-attachments/assets/05e0f230-6d24-40e3-a56c-873856d2863a)



![image](https://github.com/user-attachments/assets/870de090-e63d-461e-bad7-fdc9eddd858a)


