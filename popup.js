
const locate = document.getElementById("selectLocation");
const tem = document.getElementById("temp-value");
const feelsLike = document.getElementById("feelsLike-value")
const country = document.getElementById("selCountry");

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

fetch('./data/countries.json')
.then(response => response.json())
.then(data =>{
  //console.log(data.Pakistan);
  for(let counter in data){
    const selectCountry = [counter];
   // console.log(cities);
    selectCountry.forEach(value =>{
      const options = document.createElement("option");
      options.value = value ;
      options.textContent = value;
      country.appendChild(options);
      

    })
    
  }
    })
  .catch(error => ('Error fetching data', error));

  country.addEventListener('change', ()=>{
    console.log("Current country is " , country.value);
    locate.innerHTML = '<option disabled selected >Select City</option>'
    fetch('./data/countries.json')
    .then(response => response.json())
    .then(data=> {
      const cities = data[country.value];
      cities.forEach(city =>{
        const options = document.createElement("option");
        options.value = city;
        options.textContent = city;
        locate.appendChild(options);


      })
      
    })
    .catch(error => ('error fetching data', error))
    
  })












