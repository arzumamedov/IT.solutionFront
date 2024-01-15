import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

    const [detail, setDetail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch("http://localhost:4040/" + id)
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])



    return (
        <>
            <ul>
                <li><img src={detail.img} alt="" /></li>
                <li>{detail.name}</li>
                <li>{detail.category}</li>
            </ul>
        </>
    )
}

export default Detail