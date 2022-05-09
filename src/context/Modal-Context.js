import React,{createContext,useState,useContext} from "react"

const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [isModal , setIsModal] = useState(false)
   return(
       <ModalContext.Provider value={{setIsModal,isModal}}>
           {children}
       </ModalContext.Provider>
   )
}

const useModal = () => useContext(ModalContext)

export {ModalProvider,useModal}