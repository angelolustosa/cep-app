export const InputLabel = ({ id, label, value, onChange,size }) => {
    return (
        <div className={`col-md-${size}`}>
            <label className='form-label' htmlFor={id}>
                {label}
            </label>
            <input
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
}