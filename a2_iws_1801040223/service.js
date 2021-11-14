const API_KEY = "oWdPaH9BkmWnaU1f29UkyZYZsVc681Eg";

const getLocationKey = async (ip_address) => {
    const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${API_KEY}&q=${ip_address}`);
    return response.json();
}

const getWeatherDetail = async (locations_key) => {
    const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locations_key}?apikey=${API_KEY}`);
    return response.json();
}

const getIp = async () => {
    const response = await fetch('https://api.ipify.org/?format=json');
    return response.json();
}