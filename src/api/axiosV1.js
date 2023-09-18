import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
console.log(baseURL)
console.log(process.env)
const AxiosV1 = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  // data: { header: { token: localStorage.token || '' } },
})
AxiosV1.CancelToken = axios.CancelToken
AxiosV1.isCancel = axios.isCancel
export const fetchData = async (apiConfig) => {
  const response = await AxiosV1(apiConfig)
  if (response.data.success) {
  } else {
    throw new Error(response.data)
  }
}

export default AxiosV1
