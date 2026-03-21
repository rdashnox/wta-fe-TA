export async function getWeatherRange({ location }) {
  const url = `https://wttr.in/${encodeURIComponent(location)}?format=j1`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = await res.json();

  return data.weather.map((day) => {
    const midday = day.hourly.find((h) => h.time === "1200") || day.hourly[4];

    return {
      date: day.date,
      maxTemp: day.maxtempC,
      minTemp: day.mintempC,
      avgTemp: day.avgtempC,
      condition: midday?.weatherDesc?.[0]?.value ?? "N/A",
      icon: midday?.weatherIconUrl?.[0]?.value ?? null,

      // Environmental factors
      chanceOfRain: midday?.chanceofrain ?? "0",
      humidity: midday?.humidity ?? "N/A",
      windSpeed: midday?.windspeedKmph ?? "N/A",
      uvIndex: midday?.uvIndex ?? "N/A",
      sunrise: day.astronomy?.[0]?.sunrise,
      sunset: day.astronomy?.[0]?.sunset
    };
  });
}
