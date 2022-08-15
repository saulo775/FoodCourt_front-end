import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../../components/Container/styles";
import config from "../../../config/config";
import userContext from "../../../contexts/userContext";
import SignIn from "../../signIn";
import { TableContainer } from "./styles";

function Hall() {
    const navigate = useNavigate();
    const { token } = React.useContext(userContext);
    const [tables, setTables] = React.useState([]);
    const { setTable } = React.useContext(userContext);

    React.useEffect(() => {
        const promise = axios({
            method: "GET",
            url: `${config.baseUrl}/tables`,
            headers: { Authorization: `Bearer ${token}` }
        });

        promise.then(({ data }) => {
            setTables(data);
        });
        promise.catch((e) => {
            console.log(e);
        })

    }, [token]);

    function handleSelectTable(table) {
        setTable(table);
        navigate("/waiter/menu");
    }

    return token ? (
        <Container>
            <TableContainer>
                {
                    tables.map((table) => {
                        return (
                            <div
                                key={table.id}
                                className={table.isBusy ? 'is_busy' : ''}
                                onClick={() => {
                                    handleSelectTable(table)
                                }}
                            >{table.numberTable}</div>
                        )
                    })
                }
            </TableContainer>
        </Container>
    ) : <SignIn />
}

export default Hall;