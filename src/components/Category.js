import React from "react"
import { useFilter } from "../context"
import { Link } from "react-router-dom"

export const Category = ({category}) => {
    const {setCategory} = useFilter()
    
    return(
        <>
          <div className="single-category text-center padding-xs">
              <Link to="/explore" className="category-link" 
                    onClick={()=>setCategory(category)}>
                <h2 className="single-category-name">{category}</h2>
              </Link>
          </div>
        </>
    )
}