import styles from '../styles/Enunciado.module.css'

interface EnunciadoPorps {
    texto: string
}

export default function Enunciado(props: EnunciadoPorps) {
    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>
                {props.texto}
            </span>
        </div>
    )
}