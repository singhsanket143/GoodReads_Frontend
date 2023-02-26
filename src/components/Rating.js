import { useState } from "react"

const Rating = function () {
    const [rating,setRating] = useState(0);

    console.log(rating)

    return(
        <div className="rating">
            {[...Array(5)].map((star,index) => {
                index++;
                return (
                    <button type="button" key={index} onClick={()=>setRating(index)}><span className="star">&#9733;</span></button>
                )
            })}
        </div>
    )
}

export default Rating