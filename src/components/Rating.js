import { useState } from "react"

const Rating = function (props) {
    const [rating, setRating] = useState(0);

    return (
        <div className=" rating">
            <p className="ml-6">{props.rating}</p>
            {[...Array(5)].map((star, index) => {
                index++;
                return (
                    <button type="button" className="hover:bg-gray-50" key={index} onClick={() => setRating(index)}><span className="star">&#9733;</span></button>
                )
            })}
        </div>
    )
}

export default Rating