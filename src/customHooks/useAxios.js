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
          toast.error(error.response.data.message,{duration:1000})
        }finally{
          setIsLoading(false)
        }
    }

    return {response,isLoading,operation}
}