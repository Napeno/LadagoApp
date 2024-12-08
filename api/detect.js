import axios from "axios";

export const openDetect = async () => {
  const url = `http://192.168.1.5:5000/detect-camera`;
  try {
    const options = {
      method: "GET",
      url: url,
      headers: {
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
