import axios from 'axios';

export const getAutoComplete = async (queryParams) => {
    const url = `https://rsapi.goong.io/place/autocomplete`;
    try {
        const options = {
            method: 'GET',
            url: url,
            params:{
                input: queryParams.input,
                location: queryParams.location,
                limit: 10,
                radius: 1000,
                api_key: process.env.EXPO_PUBLIC_GOONGMAP,
                more_compound: false
            },
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};

export const getPlaceDetail = async (place_id) => {
    const url = `https://rsapi.goong.io/place/detail`;
    try {
        const options = {
            method: 'GET',
            url: url,
            params:{
                place_id: place_id,
                api_key: process.env.EXPO_PUBLIC_GOONGMAP,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};

export const getReverseGeoCode = async (latlng) => {
    const url = `https://rsapi.goong.io/geocode`;
    try {
        const options = {
            method: 'GET',
            url: url,
            params:{
                latlng: latlng,
                api_key: process.env.EXPO_PUBLIC_GOONGMAP,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};