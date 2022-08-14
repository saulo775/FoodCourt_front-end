import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

import Container from "../../../components/Container/styles";
import userContext from "../../../contexts/userContext";
import SignIn from "../../signIn";
import { Form } from "../../../components/Form/styles";
import config from "../../../config/config";
import { Logo } from "./styles";

function InsertProduct() {
    const { token, user } = React.useContext(userContext)
    const [categories, setCategories] = React.useState([]);
    const [record, setRecord] = React.useState({
        title: '',
        price: 0,
        description: '',
        productImage: '',
    });
    const [categoryId, setCategoryId] = React.useState(0);

    React.useEffect(() => {
        const promise = axios.get(
            `${config.baseUrl}/category/all-categories`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        promise.then(({ data }) => {
            setCategories(data)
        });
        promise.catch((e) => {
            console.log(e);
        })
    }, []);

    async function handleInsertCategory(e) {
        e.preventDefault();
        try {
            await axios.post(
                `${config.baseUrl}/products/create/${user.id}`,
                {
                    title: record.title,
                    price: record.price,
                    description: record.description,
                    productImage: record.productImage,
                    categoryId
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert(`Cadastro do produto ${record.title} realizado com sucesso!`);
            setRecord({
                title: '',
                price: 0,
                description: '',
                productImage: '',
            });
            setCategoryId(0);
        } catch (e) {
            alert(e.response.data.message)
            console.log("error", e.response.data.message);
        }
    }

    const handleFormChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }

    return token ? (
        <Container>
            <Logo src="./logo.svg" />
            <Form onSubmit={handleInsertCategory}>
                <label htmlFor="title-product">Nome do produto</label>
                <input
                    id="title-product"
                    type="text"
                    name="title"
                    min={4}
                    placeholder="ex.: porção de batata"
                    value={record.title}
                    onChange={handleFormChange}
                />

                <label htmlFor="price-product">Valor do produto</label>
                <input
                    id="price-product"
                    type="number"
                    step="0.010"
                    name="price"
                    min={4}
                    placeholder="ex.: 25.90"
                    value={record.price}
                    onChange={handleFormChange}
                />

                <label htmlFor="description-product">Descrição do produto</label>
                <input
                    id="description-product"
                    type="text"
                    name="description"
                    min={10}
                    placeholder="ex.: Batata frita com bacon e queijo"
                    value={record.description}
                    onChange={handleFormChange}
                />

                <label htmlFor="productImage-product">Imagem do produto</label>
                <input
                    id="productImage-product"
                    type="url"
                    name="productImage"
                    min={4}
                    placeholder="https://"
                    value={record.productImage}
                    onChange={handleFormChange}
                />

                <label htmlFor="category-product">Nome do produto</label>
                <select
                    id="category-product"
                    name="categoryId"
                    onChange={(e) => {
                        setCategoryId(e.target.value);
                    }}
                >
                    <option value="null">Selecione uma categoria</option>
                    {
                        categories ? categories.map((item) => {
                            return (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >{item.title}
                                </option>
                            )
                        }) : <h1>hello</h1>
                    }

                </select>

                <button>Salvar</button>
                <Link to="/manager">Voltar</Link>

            </Form>
        </Container >
    ) : <SignIn />
}

export default InsertProduct;