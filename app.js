// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de76839ce1msh6864c7a1ef08c5cp1ce285jsn57999a991a33',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// async function getdata(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
    
//         cloud_pct = response.cloud_pct
//         temp = response.temp
//         feels_like = response.feels_like
//         humidity = response.humidity
//         min_temp = response.min_temp
//         max_temp = response.max_temp
//         wind_speed = response.wind_speed
//         wind_degrees = response.wind_degrees
//         sunrise = response.sunrise
//         sunset = response.sunset
// } catch (error) {
// 	console.error(error);
// }
// }
// console.log(getdata());

const getweather=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response)=>  {
        
        
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(city.value)
})
getweather("Delhi");