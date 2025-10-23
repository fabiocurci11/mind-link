import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputUI from './ui/InputUI';
import ButtonUI from './ui/ButtonUI';
import { signup } from "../services/authService";
import ParagraphUI from './ui/ParagraphUI';



const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLastname] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        console.log("HandleSubmit");

        e.preventDefault();
        if (!first_name || !last_name || !email || !password) {
            alert("Compila tutti i campi");
            return;
        }
        // Qui metteremo la logica di autenticazione
        try {
            const data = await signup(first_name, last_name, email, password);
            console.log("Registrazione riuscita:", data);
            console.log("Navigate to login")
            navigate("/login")
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
                    <h1 className="text-4xl font-medium text-white mb-4">
                        Più tempo per ascoltare, meno per gestire.
                    </h1>
                    <p className="leading-relaxed text-gray-400">
                        Una piattaforma pensata per gli psicologi: gestisci sedute, pazienti, calendario e fatture in modo semplice e sicuro.
                    </p>
                </div>

                {/* Form lato destro */}
                <div className="lg:w-2/6 md:w-1/2 w-full bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto">
                    <h2 className="text-white text-xl font-semibold mb-6">Registrati</h2>

                    <ParagraphUI
                        textProp={
                            <>
                                Hai gia un account?{" "}
                                <span
                                    className="text-yellow-500 cursor-pointer hover:underline"

                                >
                                    <Link to="/login">
                                        Accedi
                                    </Link>

                                </span>
                            </>
                        }
                    />

                    <form
                        onSubmit={handleSubmit}
                        className="w-full"
                    >
                        {/* first_name */}
                        <div className="mb-4 text-left">

                            <label htmlFor="first_name" className="block text-sm mb-1">
                                Nome
                            </label>

                            <InputUI
                                id="first_name"
                                name="first_name"
                                type="text"
                                value={first_name}
                                onChange={(e) => setFirst_name(e.target.value)}
                                placeholder="Inserisci il tuo nome"
                                widthProp="w-full"
                                paddingProp="px-3 py-2"
                                bgColorProp="bg-gray-700"
                            />

                        </div>

                        {/* last_name */}
                        <div className="mb-4 text-left">

                            <label htmlFor="last_name" className="block text-sm mb-1">
                                Cognome
                            </label>

                            <InputUI
                                id="last_name"
                                name="last_name"
                                type="text"
                                value={last_name}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder="Inserisci il tuo cognome"
                                widthProp="w-full"
                                paddingProp="px-3 py-2"
                                bgColorProp="bg-gray-700"
                            />

                        </div>

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
                            textProp="Registrati"
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-medium transition-colors"
                            widthProp="w-full"

                        />

                    </form>

                </div>
            </div>
        </section>
    );
};

export default Signup;
