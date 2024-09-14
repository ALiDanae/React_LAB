
const Filter = ({ getProducts }) => {

    const handelFilterCatrgory = (category) => {
        getProducts(`https://fakestoreapi.com/products/category/${category}`)
    }

    return (
        <>
            <div className="filterCategory">
                <button onClick={() => { getProducts("https://fakestoreapi.com/products") }}>all</button>
                <button onClick={() => { handelFilterCatrgory("women's clothing") }}>women's clothing</button>
                <button onClick={() => { handelFilterCatrgory("men's clothing") }}>men's clothing</button>
                <button onClick={() => { handelFilterCatrgory("jewelery") }}>jewelery</button>
                <button onClick={() => { handelFilterCatrgory("electronics") }}>electronics</button>
            </div>
        </>
    )

}


export default Filter