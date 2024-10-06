import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Contact = () => {




    const [userData, setData] = useState({ "results": [] })

    const navigate = useNavigate()


    useEffect(() => {
        getData()

    }, [])


    const handellist = () => {
        navigate("/contacts")
    }



    const getData = () => {
        fetch(`https://randomuser.me/api/?results=1`)
            .then(res => res.json())
            .then(data => setData(data))
    }

    return (
        <>
            {userData.results.map(item =>
            (<div className="contact1">
                <img src={item.picture.large} />
                <div >
                    <h1>Name : {item.name.title} . {item.name.first} {item.name.last}</h1>
                    <h2>location : {item.location.city} ({item.location.country})</h2>
                    <h2>Email : {item.email}</h2>
                    <h2>Age : {item.dob.age}</h2>
                    <h2>Phone : {item.phone}</h2>
                </div>
            </div>))}

            <button onClick={handellist} className="goContact">go to contact list</button>
        </>
    )

}

export default Contact