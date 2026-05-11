import axios from 'axios'
import { useEffect, useState } from 'react'
import { InputLabel } from './components/InputLabel'


function App() {
  const [cep, setCep] = useState({})
  const [dataForm, setDataForm] = useState({})

  const handleChange = (event) => {
    const { id, value } = event.target

    console.log('id', id);
    console.log('value', value);


    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [id]: value,
    }))
  }

  const buscarCep = async (cep) => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    console.log('bucarCep', response.data);

    // setar os campos que vem da api no dataForm
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      logradouro: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
      cidade: response.data.localidade,
      uf: response.data.uf,
    }))


    setCep(response.data)
  }


  useEffect(() => {

    console.log('cep Useeffect', dataForm.cep);

    if (dataForm.cep?.length === 8) {
      buscarCep(dataForm.cep)
    }


  }, [dataForm.cep])


  return (
    <div className='container mt-5'>

      <div className="row justify-content-center">
        <div className="col-sm-2 col-md-10">
          <div className="card shadow p-4">
            <h2 className="mb-4 text-center">Consulta CEP</h2>

            <form className="row g-3 needs-validation" novalidate>
              {/* <div className="col md-2">
                <label className='form-label' htmlFor="cep">CEP</label>
                <input type="text" className='form-control' required id='cep' />
              </div>

              <div className="col md-4">
                <label className='form-label' htmlFor="logradouro">Logradouro</label>
                <input type="text" className='form-control' required id='logradouro' />
              </div> */}

              <InputLabel
                id="cep"
                size={2}
                label="CEP"
                value={dataForm.cep || ''}
                onChange={handleChange}
              />

              <InputLabel
                id="logradouro"
                size={6}
                label="Logradouro"
                value={dataForm.logradouro || ''}
                onChange={handleChange}
              />

              <InputLabel
                id="numero"
                size={2}
                label="Nº"
                value={dataForm.numero || ''}
                onChange={handleChange}
              />

              <InputLabel
                id="complemento"
                size={10}
                label="Complemento"
                value={dataForm.complemento || ''}
                onChange={handleChange}
              />

              <InputLabel
                id="bairro"
                size={6}
                label="Bairro"
                value={dataForm.bairro || ''}
                onChange={handleChange}
              />

              <InputLabel
                id="uf"
                size={2}
                label="UF"
                value={dataForm.uf || ''}
                onChange={handleChange}
              />

              <InputLabel
                id="cidade"
                size={2}
                label="Cidade"
                value={dataForm.cidade || ''}
                onChange={handleChange}
              />

              <button type="button" class="btn btn-primary">Primary</button>


            </form>


          </div>

        </div>
      </div>

    </div>
  )
}

export default App
