import React from "react"
import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../context"
import "./modal.css"

export const Modal = ({children}) => {
    const {setIsModal,isModal} = useModal()
    if(isModal === false) return null
    return (
        <>
          <div className="modal-wrapper"> 
               <div className="modal-content padding-sm">
                    {children}
                   <AiOutlineClose className="close-btn" onClick={() => setIsModal(prev => !prev)}/>
               </div>
          </div>
        </>
    )
}