const cityInput = document.querySelector(".change-location")

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
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    
})