import React from 'react'

const Card = (props) => {
    const { title, img, desc } = props;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Card
