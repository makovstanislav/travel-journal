import React from 'react'

export default function Main(props) {
    console.log(props.img)
    return (
        <div>
            <img src={props.img}/>
            <div>
                <p>{props.name}</p>
                <p>{props.country}</p>
                <p>{props.name}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}