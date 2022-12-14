import React from "react";
import axios from "axios";
import { FiCornerDownLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import userContext from "../../../contexts/userContext";
import SignIn from "../../signIn";


import {
    Header,
    Container,
    AllProducts,
    Product,
    Infos
} from "./styles"
import config from "../../../config/config";

function Cart() {
    const { cart, setCart, token, table } = React.useContext(userContext);
    const navigate = useNavigate();

    async function handleSaveFoodRequisition() {
        const foods = [];
        cart.forEach((product) => {
            foods.push(product.id);
        });

        try {
            await axios({
                method: "POST",
                url: `${config.baseUrl}/order`,
                data: {
                    productsOrder: foods,
                    table
                },
                headers: { Authorization: `Bearer ${token}` }
            });

            alert("Pedido feito");
            setCart([]);
            navigate(`/waiter/menu`);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return token ? (
        <>
            <Header>
                <h1>Mesa {table.numberTable}</h1>
                <FiCornerDownLeft
                    onClick={() => {
                        navigate("/waiter/menu")
                    }}
                />
            </Header>
            <Container>
                <AllProducts>
                    {
                        cart ? cart.map((product) => {
                            return (
                                <Product key={product.id}>
                                    <Infos>
                                        <img src={product.productImage} alt="" />
                                        <div>
                                            <h2>{product.title}</h2>
                                            <h4>R$ {product.price}</h4>
                                        </div>
                                    </Infos>
                                </Product>
                            )
                        }) : <h1>carregando</h1>
                    }
                </AllProducts>
                <button disabled={cart.length > 0 ? false : true} onClick={handleSaveFoodRequisition}>Fazer Pedido</button>
            </Container>
        </>
    ) : <SignIn />
}

export default Cart;