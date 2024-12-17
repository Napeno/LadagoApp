import axios from 'axios';

export const getForecastModel = async (steps) => {
    const url = 'http://172.16.23.9:5000/forecast'; 
    try {
        const options = {
            method: "POST",
            url: url,
            data: { steps }, 
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        return [];
    }
};