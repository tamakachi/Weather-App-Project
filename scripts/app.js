const cityInput = document.querySelector(".change-location")
const details = document.querySelector(".details")
const card = document.querySelector(".card")
const updateCity = async(city) =>{

    const cityData = await getCity(city)
    const weatherData = await getCurrentConditions(cityData.Key)

    return {
        cityData: cityData,
        weatherData: weatherData
    }

}

cityInput.addEventListener("submit", e =>{
    e.preventDefault()

    const city = cityInput.city.value.trim()
    cityInput.reset()

    updateCity(city)
        .then(data=>updateUI(data))
        .catch(err=>console.log(err))
    
})

const updateUI = (data) =>{

    details.innerHTML = `
    <h5 class="my-3">${data.cityData.EnglishName}</h5>
    <div class="my-3">${data.weatherData[0].WeatherText}</div>
    <div class="display-4 my-4">
        <span>temp</span>
        <span>${data.weatherData[0].Temperature.Metric.Value}&deg;</span>
    </div>
    `

    if (card.classList.contains("d-none"))
    {card.classList.remove("d-none")}
    
}