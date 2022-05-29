import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

// OpenWeatherMap API Key:
// 3d97cd2d10a966276b87cc83af9b8a8d

const API_KEY = "3d97cd2d10a966276b87cc83af9b8a8d";

// function App() {
//   getWeather = async () => {
//     const api_call = await fetch(`https://api.openweathermap.org/data/3.0/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
//     const data = await api_call.json();
//   }

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/3.0/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {

    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div >
    );
  }
}

export default App;

// Using APIs in React - Create a Weather Application - Part 1 | React tutorial for Beginners
// https://youtu.be/204C9yNeOYI : 34:03
