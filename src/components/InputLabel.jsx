import { forwardRef } from "react"

//export const InputLabel = ({ id, label, value, onChange,size }) => {
export const InputLabel = forwardRef(({ id, label, value, onChange,size }, ref) => {
    return (
        <div className={`col-md-${size}`}>
            <label className='form-label' htmlFor={id}>
                {label}
            </label>
            <input
                ref={ref} //Adicionar para termos o ref
                type="text"
                className='form-control'
                required
                id={id}
                /* propriedades para pegar o valor do input de forma generica */
                value={value}
                onChange={onChange}
            />
        </div>
    )
})