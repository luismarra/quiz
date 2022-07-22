import styles from '../styles/Botao.module.css'
import Link from 'next/link'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}
//não faz sentido fazer reaproveitamento de componentes que irá usar apenas 1 vez ou que não vai ter evolução

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button className={styles.botao}
                onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }

    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : renderizarBotao()
}