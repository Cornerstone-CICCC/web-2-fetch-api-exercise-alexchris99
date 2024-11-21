// YOUR JS CODE HERE

//section
const infoSection = document.querySelector(".Weather")

// 
const getWeaterdata = async () => {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1")
    const data = await response.json()
    return data
}

const loadHtml = async () =>{
    const data = await getWeaterdata()
    const currtime = new Date(data.current.time).toLocaleString()
    infoSection.innerHTML = `
        <h2>Today's Weather</h2>
        <h1>${data.current.temperature_2m}${data.current_units.temperature_2m}<h1>
        <h3>Wind speed: ${data.current.wind_speed_10m}${data.current_units.wind_speed_10m}</h3>
        <h2>${data.timezone}</h2>
        <h3>Last updated: ${currtime}</h3>`

}

loadHtml()

//refresh the page
const btnRefresh = document.querySelector('.refresh')

btnRefresh.addEventListener("click",()=>{
    infoSection.innerHTML = " "
    console.log(true)
    loadHtml()
})