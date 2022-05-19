import {useFilter} from "../../context"
import "./CategoryChip.css"

export const CategoryChip = ({categoryName}) => {
    const {setCategory} = useFilter()
    
    return(
        <div className="chip-container border-radius-xs margin-xs" >
            <p onClick={()=>setCategory(categoryName)} 
               className="head-sm font-weight-semibold">
                {categoryName}
            </p>
        </div>
    )
}