import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../api/service";
import prisma from "../api/db";

interface YourResponseType {
  success: boolean;
}

interface DataBahan {
  name: string;
  img: string;
  description: string;
  total: Number;
}

export const fetchDataBahan = async () => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/api/bahan`);
    const responseData: YourResponseType = response.data;
    return responseData;
  } catch (error) {
    return error;
  }
};

export const inputDataBahan = async (data: DataBahan) => {
  const form = JSON.stringify(data);
  console.log("form", form);

  try {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}/api/bahan`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    const responseData: YourResponseType = response.data;
    return responseData;
  } catch (error) {
    return error;
  }
};
