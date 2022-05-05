import React from "react"

export const Category = ({category}) => {
    const {categoryName} = category
    return(
        <>
          <div className="single-category text-center padding-xs">
              <h2 className="head-lg">{categoryName}</h2>
          </div>
        </>
    )
}