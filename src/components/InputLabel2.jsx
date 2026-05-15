
export const InputLabel2 = ({ id, label, size, value, onChange }) => {

    return (
        <div class={`col-md-${size}`}>
            <label for={id} class="form-label">{label}</label>
            <input
                type="text"
                class="form-control"
                id={id}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    )
}
