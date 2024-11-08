const search=async ()=>{
    console.log(country.value);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)

    response.json().then((data) => {
        console.log(data);


        const tempKelvin=data.main.temp;
        const tempCelsius=(tempKelvin-273.15).toFixed(2);
        console.log(tempCelsius);
    
        const feelKelvin=data.main.feels_like;
        const feelCelsius=(feelKelvin-273.15).toFixed(2)
        console.log(feelCelsius);
    
        const time = new Date()
        console.log(time);
        
        let country=data.sys.country
        console.log(country);
        
        let place=data.name
        console.log(place);
    
        let Humidity=data.main.humidity
        console.log(Humidity);
    
        let wind=data.wind.speed
        console.log(wind); 
    
        let pressure=data.main.pressure
        console.log(pressure);

        result.innerHTML= `  
     <div>
        <h1 style="margin-top: 140px;">${tempCelsius}℃</h1>
        <p class="fs-5">feels like ${feelCelsius} ℃</p>
        <h1 class="fs-1">${place}</h1>
        <p class="fs-6 mt-2 text-white">${time}</p>
        <div class="mt-4">
            <img src="https://cdn-icons-png.flaticon.com/512/376/376325.png" alt=" no image" height="35px" width="35px" >
            <img src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-sun-cloud-icon-weather-png-image_8508243.png" alt="no image" height="50px" width="50px">
        </div>
    </div> `
        

    })
    
}