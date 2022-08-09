import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Container from "../../components/Container/styles.js";
import {
    Logo,
    Form
} from "./styles";

function SignUp() {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [avatarURL, setAvatarURL] = React.useState();
    const [permission, setPermission] = React.useState();
    const navigate = useNavigate();


    async function handleRegisterUser(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5500/sign-up", {
                name,
                email,
                password,
                avatarURL,
                permission
            });

            setName('');
            setEmail('');
            setPassword('');
            setAvatarURL('');
            setPermission('');
            navigate("/sign-in");
        } catch (e) {
            console.log("error", e.response.data)
        }
    }

    return (
        <Container>
            <Logo src="logo.svg" alt="logo food court" />
            <Form onSubmit={handleRegisterUser}>
                <label htmlFor="input-name">Nome Completo</label>
                <input
                    id="input-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="Seu nome"
                />

                <label htmlFor="input-email">E-Mail</label>
                <input
                    id="input-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Seu e-mail"
                />

                <label htmlFor="input-password">Senha</label>
                <input
                    id="input-password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Sua senha"
                />

                <label htmlFor="input-avatar">Sua Foto</label>
                <input
                    id="input-avatar"
                    type="url"
                    value={avatarURL}
                    onChange={(e) => {
                        setAvatarURL(e.target.value);
                    }}
                    placeholder="Sua linda foto"
                />

                <label
                    htmlFor="select-permission" >Seu Cargo</label>
                <select
                    name="permission"
                    id="select-permission"
                    onChange={(e) => {
                        setPermission(e.target.value);
                    }}
                >
                    <option value="garçom">Garçom</option>
                    <option value="caixa">Caixa</option>
                    <option value="gerente">Gerente</option>
                </select>

                <button type="submit">Cadastrar</button>
                <span>
                    Já é cadastrado?
                    <Link to={"/sign-in"}> Login</Link>
                </span>
            </Form>
        </Container>
    )
}

export default SignUp;