function ProductItem({ arr }) {
    return (
        <div className="ProductItem">
            <div>
                <img src={arr.picture} />
                <h3>{arr.type}</h3>
                <h4>{arr.product}</h4>
                <h5>{arr.money}</h5>
            </div>
        </div>
    )
}

export default ProductItem