import React, { useContext, useEffect, useState } from 'react'
import './JobCard.scss'
import { SearchContext } from '../context/SearchContext'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'
function JobCard() {
    const [data, setData] = useState([])
    // const { addBasket } = useContext(BasketContext)
    const {addBasket} = useContext(BasketContext)

    const { search, handleSearch } = useContext(SearchContext)

    useEffect(() => {
        fetch("http://localhost:4040/")
            .then((res) => res.json())
            .then((api) => setData(api))
    }, [])



    return (
        <>
            <div className='jobCard'>
                <div className="jobCardTop">
                    <p>OUR CASE STUDY</p>
                    <h2>We work with global brands</h2>
                    <input type="text" onChange={(e) => handleSearch(e)} />
                </div>
                <div className="jobCardBottom">
                    {data
                        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                        .map((x) => (
                            <div className='card'>
                                <img src={x.img} alt="" />
                                <h3>{x.name}</h3>
                                <p>{x.category}</p>
                                <Link to={'detail/' + x._id}><span>Learn More</span></Link>
                                <i onClick={() => addBasket(x)} class="fa-solid fa-basket-shopping"></i>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default JobCard