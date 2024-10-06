import { useNavigate } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate()

    const handelrandom = () => {
        navigate("./contact")
    }

    const handellist = () => {
        navigate("./contacts")
    }


    return (
        <>
            <button onClick={handelrandom} className="goContact">go to random contact</button>
            <button onClick={handellist} className="goContact">go to contact list</button>
        </>
    )
}



export default Layout;