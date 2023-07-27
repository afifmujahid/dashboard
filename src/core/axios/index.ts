import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

type QueryParams = Record<
  string,
  string | number | boolean | null | undefined | string[]
>;

type AxiosWrapperArgs = {
  url: string;
  method?: AxiosRequestConfig["method"];
  queryParams?: QueryParams;
  data?: unknown;
  headers?: AxiosRequestConfig["headers"];
};

const axiosWrapper = async <T>({
  data,
  headers = {},
  method = "GET",
  queryParams = {},
  url,
}: AxiosWrapperArgs): Promise<T> => {
  const config: AxiosRequestConfig = {
    method,
    url: `${url}?${qs.stringify(queryParams, {
      encodeValuesOnly: true,
    })}`,
    data,
    headers: { "Content-Type": "multipart/form-data", ...headers },
  };

  try {
    const response: AxiosResponse<T> = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data ?? error;
    } else {
      throw error;
    }
  }
};

export default axiosWrapper;
