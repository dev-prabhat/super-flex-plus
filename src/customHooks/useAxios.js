import axios from "axios"
import {useState} from "react"

axios.defaults.baseURL = ""

export const useAxios = () => {
    const [response , setResponse] = useState(undefined)
    const [error , setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const operation = async (params) => {
      try {
          setIsLoading(true)
          const result = await axios.request(params)
          setResponse(result.data)
      } catch (error) {
          setError(error)
      }
      finally{
          setIsLoading(false)
      }
    }

    return {response,error,isLoading,operation}
}