import React, {useState} from "react"
import moment from "moment"

import "./owm-panel.css"

const axios = require("axios")


const fetchWetterdaten = (resolver) => {
    const lat    = process.env.GATSBY_LOLA_LAT
    const lng    = process.env.GATSBY_LOLA_LNG
    const apiKey = process.env.GATSBY_OWM_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric&lang=de`

    return axios(url)
    .then(r => { return resolver(r.data)})
}

export default function OwmPanel({beginn}) {
    const [wetterdaten, setWetterdaten] = useState(null)
    moment.locale('de')
    var record = null
    const eventBeginn = moment(beginn)

    if(!wetterdaten) {
            fetchWetterdaten(setWetterdaten)
    } else {
        wetterdaten.hourly.forEach(wd => {
            const d = moment(new Date(wd.dt*1000))
            const diff_min =  Math.abs(d.diff(eventBeginn, 'minutes'))
            if(diff_min<31) {
                record = {
                    ...wd,
                    fuer: moment(new Date(wd.dt*1000)).format("dd., D.M.yyyy HH:mm"),
                    vom: moment(new Date()).format("D.M.yyyy HH:mm"),
                }
            }
        })
        if(!record) {
            wetterdaten.daily.forEach(wd => {
                const d = moment(new Date(wd.dt*1000))
                const diff_min =  Math.abs(d.diff(eventBeginn, 'hours'))
                if(diff_min<13) {
                    record = {
                        ...wd,
                        fuer: moment(new Date(wd.dt*1000)).format("dd., D.M.yyyy"),
                        vom: moment(new Date()).format("D.M.yyyy HH:mm"),
                        temp: wd.temp.eve,
                        feels_like: wd.feels_like.eve
                    }
                }
            })
            }
    }

    const t1 = record && parseInt(record.temp)
    const t2 = record && parseInt(record.feels_like)

    const feels_like = t1===t2 ? '' : `(gefühlt ${t2} °C) `
    const desc = record && `am ${record.fuer} - ${t1} °C ${feels_like}${record.humidity} % rel. Luftf. - Vorhersage vom ${record.vom}`
    return <div className="float-right">
        {record ?
            <div>{record.weather.map(w => <img key={w.id} width={100} height={100} src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt={`${w.description} - ${desc}`} title={`${w.description} - ${desc}`}/>)}</div>
         : <p>leider keine Wetterdaten vorhanden</p>}
        </div>
}


