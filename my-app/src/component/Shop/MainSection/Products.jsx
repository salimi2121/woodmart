import { useEffect, useState } from "react"

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        products.length === 0 && fetch("src/component/Shop/products.json").then((response) => response.json()).then((res) => setProducts(res))
    }, [])

    return (
        <section className="my-3">
            <div className="row">
                {products.map((item) => (
                    <div className="col-6 col-md-3" key={item.id}>
                        <img src={item.img} alt="product-img" className="product-img" />
                        <h6>{item.name}</h6>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}