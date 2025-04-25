import Button from './Button'
import style from './BookCard.module.css'

const BookCard = ({cod_livro, nome_livro, autor_livro, imagem}) => {
    return(
        <div className={style.bookCard}>
            <h3 className={style.title}>{nome_livro}</h3>
            <p className={style.author}>{autor_livro}</p>
            <img src={imagem} alt="Capa: As Cavernas de Aço"/>
            <Button label='DETALHE' />
        </div>
    )
}

export default BookCard