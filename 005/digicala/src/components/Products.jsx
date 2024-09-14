import { useEffect, useState } from "react"

const Products = ({ DATA, getProducts, isLoding , setCart ,  setSum }) => {

    const [isDetail, setDetail] = useState(false)


    const handelCart = (title , price , image )  => {
        setCart(prev => [...prev,{price:price , title:title , image:image}])
        setSum(prev => prev + price)
    }


    useEffect(() => {
        getProducts("https://fakestoreapi.com/products")
    }, [])


    return (
        <>
            <div className="products">
                {isLoding ? <h2>Loding...</h2> : DATA.map(item => (
                    <div className="product" key={item.id}>
                        <img src={item.image} />
                        <h2>{item.title}</h2>
                        <br />
                        <span>{item.category}</span>
                        <br />
                        {isDetail ? <p onClick={() => { setDetail(false) }}>{item.description}</p> :
                            <>
                                <h3>price : {item.price} $</h3>
                                <br />
                                <span onClick={() => { setDetail(true) }}>read more</span>
                                <br /><br /><br />
                                <button onClick={() => {
                                    handelCart(item.title , item.price ,item.image)
                                }}>ADD TO CART</button>
                            </>
                        }

                    </div>
                ))}
            </div>
        </>
    )
}


export default Products