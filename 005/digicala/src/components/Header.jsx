import { useState } from "react";


const Header = ({ cart, sum }) => {

    const [showCart, setShow] = useState(false)

    return (
        <div className="header" >
            <img src="https://www.digikala.com/brand/full-horizontal.svg" />
            {showCart ?
                <div className="cart">
                    <button onClick={() => { setShow(false) }}>Continue shopping</button>
                    <div className="cartItems">
                        {cart.map(item => (
                            <>
                                <div className="cartItem">
                                    <h4>{item.title}</h4>
                                    <h3>{item.price}</h3>
                                    <img src={item.image} />
                                </div>
                                <hr />
                            </>
                        ))}
                        <span>total : {sum}</span>
                    </div>
                </div>
                : <i class="fa fa-shopping-cart  fa-5x" aria-hidden="true" onClick={() => { setShow(true) }}></i>}
        </div>

    )

}

export default Header;