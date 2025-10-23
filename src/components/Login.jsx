import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputUI from './ui/InputUI';
import ButtonUI from './ui/ButtonUI';
import SplitText from "../react-bits-animation/SplitText";
import { login } from "../services/authService";
import ParagraphUI from './ui/ParagraphUI';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //login
    const handleSubmit = async (e) => {
        console.log("HandleSubmit");
        console.log("Email:", email, "Password:", password);

        e.preventDefault();
        if (!email || !password) {
            alert("Compila tutti i campi");
            return;
        }
        // Qui metteremo la logica di autenticazione
        try {
            const data = await login(email, password);
            console.log("Login riuscito:", data);
            console.log("Navigate to dashboard")
            navigate("/dashboard")
        } catch (err) {
            console.error(err.message);
            alert(err.message);
        }
        
    };


    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-400">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center px-5 py-24">
                {/* Testo lato sinistro */}


                <div className="lg:w-3/5 md:w-1/2 mb-10 lg:mb-0 lg:pr-16">

                    <SplitText
                        text="Più tempo per ascoltare, meno per gestire."
                        className="text-4xl font-medium text-white mb-4"
                        delay={80}
                        duration={1}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text="Una piattaforma pensata per gli psicologi: gestisci sedute, pazienti, calendario e fatture in modo semplice e sicuro."
                        className="leading-relaxed text-gray-400"
                        delay={80}
                        duration={0.4}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />

                </div>

                {/* Form lato destro */}
                <div className="lg:w-2/6 md:w-1/2 w-full bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto">
                    <h2 className="text-white text-xl font-semibold mb-6">Login</h2>

                    <ParagraphUI
                        textProp={
                            <>
                                Non hai ancora un account?{" "}
                                <span
                                    className="text-yellow-500 cursor-pointer hover:underline"

                                >
                                    <Link to="/signup">
                                        Registrati
                                    </Link>
                                </span>

                            </>
                        }
                    />


                    <form
                        onSubmit={handleSubmit}
                        className="w-full"
                    >

                        {/* Email */}
                        <div className="mb-4 text-left">

                            <label htmlFor="email" className="block text-sm mb-1">
                                Email
                            </label>

                            <InputUI
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Inserisci la tua email"
                                widthProp="w-full"
                                paddingProp="px-3 py-2"
                                bgColorProp="bg-gray-700"
                            />

                        </div>

                        {/* Password */}
                        <div className="mb-4 text-left">
                            <label htmlFor="password" className="block text-sm mb-1">
                                Password
                            </label>
                            <InputUI
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                paddingProp="px-3 py-2"
                                bgColorProp="bg-gray-700"
                                textColorProp="text-gray-100"
                                widthProp="w-full"
                            />
                        </div>



                        {/* Bottone */}
                        <ButtonUI
                            textProp="Login"
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-medium transition-colors"
                            widthProp="w-full"

                        />

                    </form>

                    <p className="text-xs text-gray-400 mt-3 cursor-pointer">
                        Password dimenticata?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
