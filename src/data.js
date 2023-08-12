import axios from 'axios';

export const getData = async(city) => {
    try {
        const response = await axios.get(`https://jasiri.onrender.com/weather/location?city=${city}`);
        return response.data;
    } catch (e) {
        throw new Error(e.message)
    }
 
};

export const getforecast = async(city) => {
    try {
        const response = await axios.get(`https://jasiri.onrender.com/weather/forecast?city=${city}`);
        return response.data;
    } catch (e) {
        throw new Error(e.message)
    }
 
};


