import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Container from "../../../components/Container/styles";
import userContext from "../../../contexts/userContext";
import SignIn from "../../signIn";
import { Form } from "../../../components/Form/styles";
import config from "../../../config/config";
import { Logo } from "./styles";

function InsertTable() {
    const { token, user } = React.useContext(userContext)
    const [numTables, setNumTables] = React.useState(2);
    const navigate = useNavigate();

    async function handleInsertTables(e) {
        e.preventDefault();
        try {
            await axios.post(
                `${config.baseUrl}/tables/${user.id}/insert`,
                { quantityTables: numTables },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            navigate("/manager")
        } catch (e) {
            alert(e.response.data.message)
            console.log("error", e.response.data.message);

            if (e.response.status === 401) {
                navigate("/manager");
            }
        }
    }


    return token ? (
        <Container>
            <Logo src="logo.svg" />
            <Form onSubmit={handleInsertTables}>
                <label htmlFor="quantity-tables">Quantidade de mesas</label>
                <input
                    id="quantity-tables"
                    type="number"
                    min={2}
                    placeholder="Quantas mesas quer cadastrar?"
                    value={numTables}
                    onChange={(e) => {
                        setNumTables(e.target.value)
                    }}
                />
                <button>Salvar</button>
                <Link to="/manager">Voltar</Link>

            </Form>
        </Container >
    ) : <SignIn />
}

export default InsertTable;