import { createStore } from "vuex";

export default createStore({
    state: {
        // count: 0,
        weatherData: {
            icon: "icon",
            temp: 0,
            text: "text",
            location: "location",
            city: "busan",
        },
    },
    mutations: {
        // updateCount(state, payload) {
        //     state.count += payload;
        // }

        updateWeather(state, payload) {
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = dapayloadta.name;
        }
    },
    actions: {
        // addCount(context) {
        //     $context.commit('updateCount', payload)
        // }

        getWeather(context) {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=e50164aa9b86794f0abf1f9d63a7f473`;
            fetch(API_URL)
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data);
                    // context.state.weatherData.icon = data.weather[0].icon;
                    // context.state.weatherData.temp = data.main.temp;
                    // context.state.weatherData.text = data.weather[0].description;
                    // context.state.weatherData.location = data.sys.country;
                    // context.state.weatherData.city = data.name;

                    context.commit('updateWeather', data);
                }).catch(err => {
                    alert('에러가 발생하였습니다.잠시 후 다시 시도해주십시요');
                })
        },
    },
},

)