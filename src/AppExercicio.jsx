import { useEffect, useState } from "react"
import { InputLabel2 } from "./components/InputLabel2"
import { buscarCep } from "./services/cep.service"


function AppExercicio() {
    const [data, setData] = useState({
        cep: '',
        logradouro: ''
    })

    const onChange = (e) => {
        console.log('onChange', e.target.id, e.target.value);
        const value = e.target.value;
        const id = e.target.id

        setData(values => ({ ...values, [id]: value }))
    }

    const carregarCep = async (cep) => {
        const response = await buscarCep(cep)
        console.log('carregarCep', response);

        setData({
            ...data,
            logradouro: response.logradouro,
            bairro: response.bairro
        })
        
    }

    useEffect(() => {
        /* só busca na api se o tamanho do cep for 8, pois é o tamanho do cep completo */
        if (data.cep.length === 8) {
            carregarCep(data.cep)
        }
    }, [data.cep])

    return (
        <div className='container mt-5'>
            <p>{JSON.stringify(data, null, 2)}</p>
            {
                console.log(JSON.stringify(data, null, 2))
            }
            <h2 className="mt-5">Pesquisar CEP</h2>
            <form class="row g-3 needs-validation" novalidate>
                <InputLabel2
                    id='cep'
                    size={2}
                    label='CEP'
                    value={data.cep}
                    onChange={onChange}
                />
                {/* <div class="col-md-2">
                    <label for="cep" class="form-label">CEP</label>
                    <input type="text" class="form-control" id="cep" required />
                </div> */}

                <InputLabel2
                    id='logradouro'
                    size={8}
                    label='Logradouro'
                    value={data.logradouro}
                    onChange={onChange}
                />
                {/* <div class="col-md-4">
                    <label for="logradouro" class="form-label">Logradouro</label>
                    <input type="text" class="form-control" id="Logradouro" required />
                </div> */}

                <InputLabel2
                    id='numero'
                    size={2}
                    label='Nº'
                />

                <InputLabel2
                    id='complemento'
                    size={12}
                    label='Complemento'
                />

                <InputLabel2
                    id='bairro'
                    size={4}
                    label='Bairro'
                    value={data.bairro}
                    onChange={onChange}
                />

                <InputLabel2
                    id='estado'
                    size={4}
                    label='Estado'
                />

                <InputLabel2
                    id='Município'
                    size={4}
                    label='Municipio'
                />

                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">State</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="validationCustom05" required />
                    <div class="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>

            </form>

        </div>
    )
}

export default AppExercicio
