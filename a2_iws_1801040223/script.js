var app = new Vue({
    el: '#app',
    data: { 
        date: "2021",
        day_icon: 0,
        day_iconPhrase: "",
        night_icon:0,
        night_iconPhrase: "", 
        maxTemp: 0,
        minTemp: 0,
        location: '',
        text: ''
    },
    created: function() {

        getIp().then((res) => {
            // console.log(res.ip);
            getLocationKey(res.ip).then((res) => {
                // console.log(res);
                this.location = res.AdministrativeArea.LocalizedName + ', ' + res.Country.LocalizedName
                getWeatherDetail(res.Key).then((resp) => {
                    // console.log(resp);
                    let d = new Date(resp.DailyForecasts[0].Date)
                    this.date = d.toUTCString().slice(0, 16)
                    if(resp.DailyForecasts[0].Day.Icon < 10)
                        this.day_icon = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${resp.DailyForecasts[0].Day.Icon}-s.png`
                    else
                        this.day_icon = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${resp.DailyForecasts[0].Day.Icon}-s.png`
                    this.day_iconPhrase = resp.DailyForecasts[0].Day.IconPhrase
                    if(resp.DailyForecasts[0].Night.Icon < 10)
                        this.night_icon = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${resp.DailyForecasts[0].Night.Icon}-s.png`
                    else
                    this.night_icon = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${resp.DailyForecasts[0].Night.Icon}-s.png`
                    this.night_iconPhrase = resp.DailyForecasts[0].Night.IconPhrase
                    this.maxTemp = resp.DailyForecasts[0].Temperature.Maximum.Value
                    this.minTemp = resp.DailyForecasts[0].Temperature.Minimum.Value
                    this.text = resp.Headline.Text
                })
            })
        })
    }
})