import React, { useState } from 'react';
import InputUI from './ui/InputUI';
import ButtonUI from './ui/ButtonUI';

import ParagraphUI from './ui/ParagraphUI';

const Login = ({ onSwitchToSignup }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        console.log("HandleSubmit");
        console.log("Email:", email, "Password:", password);

        e.preventDefault();
        if (!email || !password) {
            alert("Compila tutti i campi");
            return;
        }
        // Qui metteremo la logica di autenticazione
        console.log("Email e password");
        console.log({ email, password });
    };


    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-400">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center px-5 py-24">
                {/* Testo lato sinistro */}
                <div className="lg:w-3/5 md:w-1/2 mb-10 lg:mb-0 lg:pr-16">
                    <h1 className="text-4xl font-medium text-white mb-4">
                        Slow-carb next level ethical authentic, poko scenester
                    </h1>
                    <p className="leading-relaxed text-gray-400">
                        Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
                    </p>
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
                                    onClick={onSwitchToSignup}
                                >
                                    Registrati
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

                    <p className="text-xs text-gray-400 mt-3">
                        Literally you probably haven't heard of them jean shorts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
