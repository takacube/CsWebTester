import React, { FC, useEffect, useState } from 'react';

type Forecast = {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

type State = {
  forecasts: Forecast[];
};

const Weather: FC = () => {
    const [state, setState] = useState<State>({ forecasts: [] });
    
    useEffect(() => {
        fetchWeatherData();
    }, []);
    const fetchWeatherData = async () => {
        const res = await fetch("https://takanaotestweather.azurewebsites.net/weatherforecast");
        const data = await res.json();
        setState({ forecasts: data });
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>TemperatureC</th>
                        <th>TemperatureF</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {state.forecasts.map((forcast) => (
                        <tr>
                            <td>{forcast.date.toString()}</td>
                            <td>{forcast.temperatureC}</td>
                            <td>{forcast.temperatureF}</td>
                            <td>{forcast.summary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Weather