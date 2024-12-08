import axios from "axios";

export const getStaticQR = async (requestBody = {}) => {
  const url = `https://api.vietqr.io/v2/generate`;
  try {
    const options = {
      method: "POST",
      url: url,
      data: requestBody,
      headers: {
        "x-client-id": process.env.CLIENT_ID,
        "x-api-key": process.env.API_KEY,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    return [];
  }
};
