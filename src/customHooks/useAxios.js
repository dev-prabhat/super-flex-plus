import axios from "axios"
import {useState} from "react"

axios.defaults.baseURL = ""

export const useAxios = () => {
    const [response , setResponse] = useState(undefined)
    const [error , setError] = useState("")

    const operation = async (params) => {
      try {
          const result = await axios.request(params)
          setResponse(result.data)
      } catch (error) {
          setError(error)
      }
    }

    return {response,error,operation}
}