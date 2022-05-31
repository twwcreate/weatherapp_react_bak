import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

// OpenWeatherMap API Key:
// 3d97cd2d10a966276b87cc83af9b8a8d

const API_KEY = "3d97cd2d10a966276b87cc83af9b8a8d";

// function App() {
//   getWeather = async () => {
//     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=3d97cd2d10a966276b87cc83af9b8a8d&units=metric`);
//     const data = await api_call.json();
//   }

//用3.0是不行的
// const data = await api_call.json();-->>>將data轉變成json格式
//以下寫法只係單純declare緊呢個做法****咁點樣可以call呢個function呢???
//可以用props來call function!! :D
// Form的props係getWeather,value就係expression:this係指App
//加個(e)係event object,可以避免全頁reload
//e.target.elements.city.value;--->elements後面的city/country即係Form.js的name的值
class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {

    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div >
    );
  }
}

export default App;

// Using APIs in React - Create a Weather Application - Part 1 | React tutorial for Beginners
// https://youtu.be/204C9yNeOYI : 34:03
