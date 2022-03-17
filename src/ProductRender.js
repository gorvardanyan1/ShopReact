import ProductItem from "./ProductItem"
function ProductRender({ products }) {
    return (
        <div className="productAllDiv">
            {products.map((arg, index) => {
                return (
                    <ProductItem key={index} arr={arg} />
                )
            })}
        </div>
    )
}

export default ProductRender