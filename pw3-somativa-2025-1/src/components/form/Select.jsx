import style from './Select.module.css';

function Select({text, name, id, handlerChange}){
    return(
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
                <option value="">Selecione uma categoria</option>
                <option value="">Ficção científica</option>
                <option value="">Fantasia heróica</option>
                <option value="">Suspense</option>
                <option value="">Terror</option>
            </select>

        </div>
    )
}

export default Select;