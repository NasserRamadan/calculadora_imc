import styles from './Section.module.css';

const Section = () => {
    return (
        <section className={styles.section}>
            <h2>O que é o IMC?</h2>
            <p>
                O Índice de Massa Corporal (IMC) é uma ferramenta que oferece uma
                visão geral da relação entre peso e altura de uma pessoa.
            </p>
            <h2>Classificação do IMC</h2>
            <ul>
                <li>Abaixo de 18,5: Abaixo do peso</li>
                <li>18,5 a 24,9: Peso normal</li>
                <li>25 a 29,9: Sobrepeso</li>
                <li>30 a 34,9: Obesidade grau 1</li>
                <li>35 a 39,9: Obesidade grau 2</li>
                <li>40 ou mais: Obesidade grau 3</li>
            </ul>
        </section>
    );
}

export default Section;
