import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Contactlist= () => {


    const navigate = useNavigate()

    const [userData, setData] = useState({ "results": [] })

    useEffect(() => {
        getData()

    }, [])

    const handelrandom = () => {
        navigate("/contact")
    }


    const getData = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then(res => res.json())
            .then(data => setData(data))
    }

    return (
        <div className="lists">
            {userData.results.map(item =>
            (<div className="contactlist" onClick={handelrandom}>
                <img src={item.picture.large} />
                <div >
                    <h1>Name : {item.name.title} . {item.name.first} {item.name.last}</h1>
                    <h2>location : {item.location.city} ({item.location.country})</h2>
                    <h2>Email : {item.email}</h2>
                    <h2>Age : {item.dob.age}</h2>
                    <h2>Phone : {item.phone}</h2>
                </div>
            </div>))}
        </div>
    )

}

export default Contactlist