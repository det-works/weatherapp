import './styles/WeatherCard.css';

export default function WeatherCard({cityName, temp, time}) {
    return (
        <div className='weather-card'>
            <div className='city-time-area'>
                <h2>{cityName}</h2>
                <p>{time}</p>
            </div>
            <div className='temp-area'>{temp}&deg;</div>
        </div>
    );
}