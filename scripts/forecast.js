const key = 'UiGTGmssIlmchGjr5c6zbit4PS714Cd1'


 // Get city information 

const getCity = async (location) =>{

    const baseEndpoint = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${location}`

    const response = await fetch(baseEndpoint + query)
    const data = await response.json()

    return data[0]

}

// Get curent weather conditions for city and log to console

const getCurrentConditions = async(locationkey) =>{
    const endpoint = `http://dataservice.accuweather.com/currentconditions/v1/${locationkey}?apikey=${key}`

    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)
}


getCity("Durban")
    .then(data=>getCurrentConditions(data.Key))
    .catch(error=>console.log(error))