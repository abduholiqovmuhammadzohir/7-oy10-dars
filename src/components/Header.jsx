import "./index.css"
import { SlBasket } from "react-icons/sl";
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"

function Header() {

    const cartCount = useSelector(state => state.cart);
    const dispatch = useDispatch()

    function getData() {
        let data = [];
        if (localStorage.getItem("products")) {
            data = JSON.parse(localStorage.getItem("products"))
        }
    }

    useEffect(() => {
        let data = getData()
        if (data.length) {
            let c = 0;
            data.forEach(el => {
                c += Number(el.count)
            });

            dispatch({type:"DEC", payload:c})
        }else {
            dispatch({type:"DEC", payload:0})
        }

    }, [])

  return (
    <div className="container">
        <div className="header">
            
            <Link to="/">Produts</Link>
            <Link to="/cart">Cart</Link>

            <h3><SlBasket />{cartCount}</h3>
        </div>
    </div>
  )
}

export default Header