import React, { useState } from 'react';

const Section = () => {
    // Definiamo uno stato locale per il componente
    const [count, setCount] = useState(0);

    // Funzione per incrementare il conteggio
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <section className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p>
                Qui apparirà il contenuto principale (grafici, elenco pazienti,
                ecc.)
            </p>
        </section>
    );
};

export default Section;