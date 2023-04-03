import { useState } from "react";

const Login = (props) => {
    const {onLogin} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    }

    return (
        <section className="root root__auth">
            <h2 className="root__title">Вход</h2>
            <form action="#" className="root__form" onSubmit={handleSubmit}>
                <div className="root__input-wrapper">
                <label htmlFor="email" className="root__label" />
                <input
                    type="email"
                    className="root__input"
                    id="email"
                    placeholder="Email"
                    onChange={(evt) => setEmail(evt.target.value)}
                />
                </div>
                <div className="root__input-wrapper">
                <label htmlFor="password" className="auth__label" />
                <input
                    type="password"
                    className="root__input"
                    id="password"
                    placeholder="Пароль"
                    onChange={(evt) => setPassword(evt.target.value)}
                />
                </div>
                <button className="root__submit">Войти</button>
            </form>
        </section>
    )
}

export default Login;
