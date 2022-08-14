import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Container from "../../../components/Container/styles";
import userContext from "../../../contexts/userContext";
import SignIn from "../../signIn";
import { Form } from "../../../components/Form/styles";
import config from "../../../config/config";
import { Logo } from "./styles";

function InsertCategory() {
    const { token, user } = React.useContext(userContext)
    const [title, setTitle] = React.useState('');

    async function handleInsertCategory(e) {
        e.preventDefault();
        try {
            await axios.post(
                `${config.baseUrl}/category/create/${user.id}`,
                { title: title },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert(`Cadastro da categoria ${title} realizado com sucesso!`);
            setTitle('');
        } catch (e) {
            alert(e.response.data.message)
            console.log("error", e.response.data.message);
            setTitle('');
        }
    }


    return token ? (
        <Container>
            <Logo src="logo.svg" />
            <Form onSubmit={handleInsertCategory}>
                <label htmlFor="title-category">Nome da categoria</label>
                <input
                    id="title-category"
                    type="text"
                    min={4}
                    placeholder="ex.: porções"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <button>Salvar</button>
                <Link to="/manager">Voltar</Link>

            </Form>
        </Container >
    ) : <SignIn />
}

export default InsertCategory;