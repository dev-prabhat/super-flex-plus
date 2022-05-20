import {useFilter} from "../../context"
import "./CategoryChip.css"

export const CategoryChip = ({category}) => {
    const {setCategory} = useFilter()
    
    return(
        <div className="chip-container border-radius-xs margin-xs" >
            <p onClick={()=>setCategory(category)} 
               className="head-sm font-weight-semibold">
                {category}
            </p>
        </div>
    )
}