const key = 'UiGTGmssIlmchGjr5c6zbit4PS714Cd1'


 // Get city information and returns the data

const getCity = async (location) =>{

    const baseEndpoint = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${location}`

    const response = await fetch(baseEndpoint + query)
    const data = await response.json()

    return data[0]

}

// Get current weather conditions for city and returns the data

const getCurrentConditions = async(locationkey) =>{
    const endpoint = `http://dataservice.accuweather.com/currentconditions/v1/${locationkey}?apikey=${key}`

    const response = await fetch(endpoint)
    const data = await response.json()
    return data
}

// Fires function to get city location key and passes the returned key into getcurrentweatherconditions which returns the data
// Then logs it to the console

// getCity("Durban")
//     .then(data=>{
//         return getCurrentConditions(data.Key)
//     }).then (data=>{console.log(data)})
//     .catch(error=>console.log(error))