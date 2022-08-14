import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container/styles";
import userContext from "../../contexts/userContext";
import {
    Logo,
    Form
} from "./styles";

function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setToken, setUser } = React.useContext(userContext);
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5500/sign-in", {
                email,
                password
            });
            setToken(data.token);
            setUser(data.user);

            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.user.permission === 'gerente') {
                navigate("/manager")
            }

        } catch (e) {
            alert(e.response.data.message)
            console.log("error", e.response.data.message);
        }
    }

    return (
        <Container onSubmit={handleLogin}>
            <Logo src="logo.svg" />
            <Form>
                <label htmlFor="input-email">Seu melhor email</label>
                <input
                    id="input-email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />

                <label htmlFor="input-password">Sua senha</label>
                <input
                    id="input-password"
                    type="password"
                    value={password}
                    placeholder="Senha"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                <button type="submit">Entrar</button>
                <span>Ainda não tem conta? <Link to="/sign-up">Criar conta</Link></span>
            </Form>
        </Container>
    )
}

export default SignIn;