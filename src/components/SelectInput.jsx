export const SelectInput = ({
    id,
    label,
    value,
    onChange,
    size,
    options = [],
    optionLabel = 'label',
    optionValue = 'value',
    placeholder = 'Selecione'
}) => {

    return (
        <div className={`col-md-${size}`}>

            <label htmlFor={id} className='form-label' >
                {label}
            </label>

            <select
                id={id}
                className='form-select'
                required
                value={value || ''}
                onChange={onChange}
            >
                <option value="">{placeholder}</option>

                {options.map((option) => (
                    <option key={option[optionValue]} value={option[optionValue]} >
                        {option[optionLabel]}
                    </option>
                ))}

            </select>

            <div className="invalid-feedback">
                Selecione uma opção válida.
            </div>

        </div>
    )
}