import axios from "axios"
import {useState} from "react"
import toast from "react-hot-toast"

axios.defaults.baseURL = ""

export const useAxios = () => {
    const [response , setResponse] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)

    const operation = async (params) => {
      try{
          setIsLoading(true)
          const result = await axios.request(params)
          setResponse(result.data)
        }catch (error) {
          console.log(error.response)
          if(error.response.status === 500 ) toast.error("Something went wrong, retry after login...",{duration:2000})
          if(error.response.status === 409) toast.success(error.response.data.errors[0],{duration:1000})
          if(error.response.status === 404) toast.error(error.response.data.errors[0],{duration:2000})
        }finally{
          setIsLoading(false)
        }
    }

    return {response,isLoading,operation}
}