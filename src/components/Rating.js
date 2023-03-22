import { useState } from "react"

const Rating = function () {
    const [rating,setRating] = useState(0);

    console.log(rating)

    return(
        <div className=" rating">
            <p className="ml-6">{rating}</p>
            {[...Array(5)].map((star,index) => {
                index++;
                return (
                    <button type="button" className="hover:bg-gray-50" key={index} onClick={()=>setRating(index)}><span className="star">&#9733;</span></button>
                )
            })}
        </div>
    )
}

export default Rating