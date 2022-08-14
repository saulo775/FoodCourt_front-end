import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container/styles";
import userContext from "../../../contexts/userContext";
import SignIn from "../../signIn";

import { Logo, ContainerLinks } from "./styles";

function Gerency() {
    const { token } = React.useContext(userContext)
    return token ? (
        <Container>
            <Logo src="logo.svg" />
            <ContainerLinks>
                <Link to={"/manager/insert/tables"} >Mesas</Link>
                <Link to={"/manager/insert/category"}>Categoria</Link>
                <Link to={"/manager/insert/product"}>Produto</Link>
            </ContainerLinks>
        </Container>
    ) : <SignIn />
}

export default Gerency;