import React from "react";
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

function Cart() {
    const { cart, setCart, token, table } = React.useContext(userContext);
    const navigate = useNavigate();

    async function handleSaveFoodRequisition() {

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
                <button onClick={handleSaveFoodRequisition}>Fazer Pedido</button>
            </Container>
        </>
    ) : <SignIn />
}

export default Cart;