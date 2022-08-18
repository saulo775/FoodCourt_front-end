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
    Infos,
    Total
} from "./styles"
import config from "../../../config/config";

function TableAccount() {
    const { token, table } = React.useContext(userContext);
    const [products, setProducts] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: `${config.baseUrl}/order/cashier/${table.id} `,
            headers: { Authorization: `Bearer ${token}` }
        });
        promise.then(({ data }) => {
            setProducts(data.allOrders);
            setTotal(data.total);
        });
        promise.catch((e) => {
            console.log(e);
        })
    }, [table.id, token]);

    async function handleCloseAccount(tableId) {
        try {
            await axios({
                method: "POST",
                url: `${config.baseUrl}/order/cashier/close-account/${tableId}`,
                headers: { Authorization: `Bearer ${token}` }
            });
            navigate("/cashier/tables");
        } catch (error) {
            console.log(error);
        }
    }

    return token ? (
        <>
            <Header>
                <h1>Mesa {table.numberTable}</h1>
                <FiCornerDownLeft
                    onClick={() => {
                        navigate("/cashier/tables");
                    }}
                />
            </Header>
            <Container>
                <AllProducts>
                    {
                        products ? products.map((product) => {
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
                <Total>Total R$ {total}</Total>
                <button
                    disabled={products.length > 0 ? false : true}
                    onClick={() => {
                        handleCloseAccount(table.id);
                    }}
                >Encerrar conta</button>
            </Container>
        </>
    ) : <SignIn />
}

export default TableAccount;