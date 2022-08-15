import axios from "axios";
import React from "react";
import { FiShoppingCart, FiCornerDownLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import config from "../../../config/config";
import userContext from "../../../contexts/userContext";
import SignIn from "../../signIn";

import {
    Container,
    Header,
    Categories,
    AllProducts,
    Product,
    Infos

} from "./styles";

function Menu() {
    const navigate = useNavigate();
    const { table, token, cart, setCart } = React.useContext(userContext);
    const [categories, setCategories] = React.useState([]);
    const [products, setProducts] = React.useState();
    const [categorySelect, setCategorySelect] = React.useState(0);

    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: `${config.baseUrl}/category/all-categories`,
            headers: { Authorization: `Bearer ${token}` }
        });
        promise.then(({ data }) => {
            setCategories(data);
            setCategorySelect(data[0].id);
        });
        promise.catch((e) => {
            console.log(e);
        });
    }, [token]);

    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: `${config.baseUrl}/products/${categorySelect}`,
            headers: { Authorization: `Bearer ${token}` }
        });
        promise.then(({ data }) => {
            setProducts(data);
        });
        promise.catch((e) => {
            console.log(e);
        });
    }, [categorySelect, token])

    if (!table) {
        navigate("/waiter/tables");
    }
    return token ? (
        <>
            <Header>
                <h1>Mesa {table.numberTable}</h1>
                <div>
                    <FiShoppingCart
                        onClick={() => {
                            navigate("/waiter/cart")
                        }}
                    />
                    <FiCornerDownLeft
                        onClick={() => {
                            navigate("/waiter/tables")
                        }}
                    />
                </div>
            </Header>
            <Container>
                <Categories>
                    {
                        categories.map((category) => {
                            return (
                                <li
                                    key={category.id}
                                    onClick={() => { setCategorySelect(category.id) }}
                                >{category.title}</li>
                            )
                        })
                    }
                </Categories>

                <AllProducts>
                    {
                        (products && categories) ? products.map((product) => {
                            return (
                                <Product key={product.id}>
                                    <Infos>
                                        <img src={product.productImage} alt="" />
                                        <div>
                                            <h2>{product.title}</h2>
                                            <h3>{product.description}</h3>
                                            <h4>R$ {product.price}</h4>
                                        </div>
                                    </Infos>
                                    <button onClick={() => {
                                        setCart([...cart, product]);
                                    }}>Add</button>
                                </Product>
                            )
                        }) : <h1>carregando</h1>
                    }
                </AllProducts>

            </Container>
        </>

    ) : <SignIn />

}

export default Menu