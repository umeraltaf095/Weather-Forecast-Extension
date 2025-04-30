
const locate = document.getElementById("selectLocation");
const tem = document.getElementById("temp-value");
const feelsLike = document.getElementById("feelsLike-value")

locate.addEventListener('change',()=>{
    console.log('Current location is ', locate.value);
  const loca = locate.value;
  const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=2909ba420cd66f3878854604c3d0a67a&units=metric`)
.then(response => response.json())
.then(data=> {
    console.log(data)
    console.log(data.main.temp);
    tem.textContent = data.main.temp;
    feelsLike.textContent = data.main.feels_like;

    
})
.catch(error => console.error('Error:', error));
    
});












