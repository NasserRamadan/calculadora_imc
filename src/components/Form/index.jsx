import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [result, setResult] = useState("");
    const [categoria, setCategoria] = useState("");

    const calculaImc = () => {
        const imc = peso / (altura * altura);
        const imcFormatado = imc.toFixed(2);
        setResult(imcFormatado);
        setCategoria(getCategoriaImc(imc));
    };

    const getCategoriaImc = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc < 24.9) return "Peso normal";
        if (imc < 29.9) return "Sobrepeso";
        if (imc < 34.9) return "Obesidade grau 1";
        if (imc < 39.9) return "Obesidade grau 2";
        return "Obesidade grau 3";
    };

    return (
        <form className={styles.form}>
            <h2 className={styles.titulo}>Peso</h2>
            <input
                className={styles.input}
                value={peso}
                onChange={(e) => setPeso(+e.target.value)}
                type="number"
                placeholder="80kg"
            />
            <h2 className={styles.titulo}>Altura</h2>
            <input
                className={styles.input}
                value={altura}
                onChange={(e) => setAltura(+e.target.value)}
                type="number"
                placeholder="1.78"
            />
            <div className={styles.btnContainer}>
                <button
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
                        calculaImc();
                    }}
                >
                    Calcular
                </button>
                <button
                    className={styles.button}
                    onClick={(e) => {
                        e.preventDefault();
                        setPeso("");
                        setAltura("");
                        setResult("");
                        setCategoria("");
                    }}
                >
                    Resetar
                </button>
            </div>

            {result ? (
                <p className={styles.resultado}>
                    Seu IMC é de: {result} ({categoria})
                </p>
            ) : (
                <p className={styles.resultado}>
                    Digite os valores para aparecer o resultado
                </p>
            )}
        </form>
    );
};

export default Form;
