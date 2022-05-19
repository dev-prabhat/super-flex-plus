import React from "react"
import { useFilter } from "../context"
import { Link } from "react-router-dom"

export const Category = ({category}) => {
    const {setCategory} = useFilter()
    const {categoryName} = category
    return(
        <>
          <div className="single-category text-center padding-xs">
              <Link to="/explore" className="category-link" 
                    onClick={()=>setCategory(categoryName)}>
                <h2 className="head-lg">{categoryName}</h2>
              </Link>
          </div>
        </>
    )
}