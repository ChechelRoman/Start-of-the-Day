import React from "react";
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, Image } from "react-native";
import axios from "axios";
import { TemperatureInfo } from "../TemperatureInfo";
import { DateInfo } from "../DateInfo";
import { WeatherInfo } from "../WeatherInfo";
import { APPODInfo } from "../APODInfo";
import { getColorScheme } from "../../util/getColorScheme";
import { capitalizeWords } from "../../util/capitalizeWords";

const apiWeather = {
  key: '778b61bd3d325b79a20c2a2f81816b44',
  base: 'http://api.openweathermap.org/data/2.5/',
};

const apiApod = {
  key: 'OYfkBccssDGF6nebXuoXEOTCBKVfiDCWa5ZXdept',
  base: 'https://api.nasa.gov/planetary/',
};

type WeatherData = {
  clouds: {
    all: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  timezone: number;
  weather: [{
    main: string;
    description: string;
    icon: string;
  }];
  wind: {
    speed: number;
  };
}

type APODDAta = {
  explanation: string;
  title: string;
  url: string;
}


export const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [apodData, setApodData] = useState<APODDAta>();
  const [isDataUploaded, setIsDataUploaded] = useState<boolean>(false);
  const [city, setCity] = useState<string | undefined>('Tomsk');
  const [date, setDate] = useState<Date>();

  const prevCityRef = useRef<string>();
  const prevCity = prevCityRef.current;

  useEffect(() => {
    prevCityRef.current = city;
  });
  
  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await axios.get(`${apiWeather.base}weather?q=${city}&units=metric&appid=${apiWeather.key}`);
  
        if (response.status === 200) {
          const newDate = new Date();

          setWeatherData(response.data);
          setDate(new Date((newDate.getTime() + newDate.getTimezoneOffset() * 60000) + (response.data.timezone * 1000)))
          setIsDataUploaded(true);
        }

      } catch (error) {

        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
          setCity(prevCity);
        }
      }

    };

    fetchWeatherData();
  }, [city]);

  useEffect(() => {
    async function fetchApodData() {
      try {
        const response = await axios.get(`${apiApod.base}apod?api_key=${apiApod.key}`);

        if (response.status === 200) {
          setApodData(response.data);
        }
      } catch (error) {

        if (axios.isAxiosError(error)) {
          alert(error.response?.data.message);
        }
      }
    };

    fetchApodData();
  }, []);

  let colorScheme;

  if (date !== undefined) {
    colorScheme = getColorScheme(date);
  }

  if (isDataUploaded) {
    return (
      <ScrollView style={[styles.container, { backgroundColor: colorScheme?.background_main }]}>
        <TextInput
          style={[styles.searchBar, { backgroundColor: colorScheme?.background_secondary, borderColor: colorScheme?.background_secondary, color: colorScheme?.text_info }]}
          placeholder='Search City'
          placeholderTextColor={colorScheme?.text_header}
          onSubmitEditing={(event) => {
            setCity(event.nativeEvent.text);
            setIsDataUploaded(!isDataUploaded);
            event.nativeEvent.text = '';
          }}
        />
        <Image
          style={styles.weatherIcon}
          source={{uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}}
        />
        <Text style={[styles.weatherDesciption, { color: colorScheme?.text_primary }]}>{capitalizeWords(weatherData?.weather[0].description)}</Text>
        <Text style={[styles.city, { color: colorScheme?.text_primary }]}>{city}</Text>
        <TemperatureInfo  
          feels_like={weatherData?.main.feels_like}
          temp={weatherData?.main.temp}
          colorScheme={colorScheme}
        />
        <DateInfo
          colorScheme={colorScheme}
          dateInitial={date !== undefined ? date : new Date()}
        />
        <WeatherInfo
          cloudiness={weatherData?.clouds.all !== undefined ? weatherData.clouds.all : ''}
          humidity={weatherData?.main.humidity !== undefined ? weatherData.main.humidity : ''}
          wind_speed={weatherData?.wind.speed !== undefined ? weatherData.wind.speed: ''}
          colorScheme={colorScheme}
        />
        <APPODInfo
          explanation={apodData?.explanation !== undefined ? apodData.explanation : ''}
          title={apodData?.title !== undefined ? apodData.title : ''}
          url={apodData?.url !== undefined ? apodData.url : ''}
          colorScheme={colorScheme}
        />
      </ScrollView>
    );
  }

  return null;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'System',
  },
  searchBar: {
    width: '90%',
    height: 35,
    borderWidth: 1,
    borderRadius: 12,
    marginTop: '10%',
    paddingLeft: 20,
    alignSelf: "center",
  },
  weatherIcon: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    marginTop: '5%',
    alignSelf: "center",
  },
  weatherDesciption: {
    fontSize: 20,
    textAlign: "center",
  },
  city: {
    fontSize: 40,
    fontWeight: '600',
    marginTop: '5%',
    textAlign: "center",
  },
});
