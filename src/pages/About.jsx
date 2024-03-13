import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import "../pages/about.css"
function About() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [active, setActive] = useState(0)
    const [color, setColor] = useState('')
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) {
            navigate("/")
        } else {
            fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
                .then(res => res.json())
                .then(data => {
                    setProduct(data.data.attributes)
                    setColor(data.data.attributes.colors[0])
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])

    function getData() {
        let data = [];
        if (localStorage.getItem("products")) {
            data = JSON.parse(localStorage.getItem("products"))
        }
    }

    function handleClick() {
        const fur = {
            id,
            color,
            count,
            image:product.image,
            title:product.title,
            company:product.company,
            price:product.price
        }
    }

    let data = getData();

    if (data.length) {
        let exist = data.map(el => {
            return el.id == fur.id && el.color == fur.color
        })

        if (exist) {
            let copied = JSON.parse(JSON.stringify(data))

            copied.map((el) => {
                if (el.id == fur.id && el.color == fur.color) {
                    el.count = Number(el.count)
                    el.count += Number(fur.count)
                }
                return el
            })
            localStorage.setItem("products", JSON.stringify(copied))

        } else {
            data.push(fur);
            localStorage.setItem("products", JSON.stringify(data))
            dispatch({type:"ADD" , payload: fur.count})
        }
    } else {
        data.push(fur);
        localStorage.setItem("products", JSON.stringify(data))
        dispatch({type:"ADD" , payload: fur.count})
    }

    return (
        <div className="container mt-5 d-flex gap-4">
            <div className="image">
                <img className="rounded" src={product.image} width={400} height={500} />
            </div>

            <div className="info">
                <h3>{product.title}</h3>
                <h4>{product.company}</h4>
                <h5>${product.price}</h5>
                <p className="des">{product.description}</p>
                <p>Colors</p>

                {
                    product?.colors && product?.colors.map((el, index) => {
                        return <span style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: el,
                            borderRadius: "50%",
                            display: "inline-block",
                            marginRight: "8px",
                            cursor: "pointer",
                            border: index == active ? "2px solid black" : "none"
                        }}
                            onClick={() => {
                                setActive(index)
                                setColor(el)
                            }}
                            key={index}></span>
                    })
                }

                <p>Amount</p>
                <select class="form-select" aria-label="Default select example" value={count} onChange={(e) => { setCount(e.target.value) }}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button onClick={handleClick} className="btn btn-primary mt-4">Addd to Bag</button>
            </div>
        </div>
    )
}

export default About