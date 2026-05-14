import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { InputLabel } from './components/InputLabel'
import { listarEstados, listarMunicipiosPorUF } from './services/ibge.service'
import { SelectInput } from './components/SelectInput'
import { buscarCep } from './services/cep.service'


function App() {
  const [cep, setCep] = useState({})
  const [dataForm, setDataForm] = useState({})

  const [estados, setEstados] = useState([])
  const [cidade, setCidade] = useState([])

  const numeroRef = useRef(null)

  const handleChange = (event) => {
    const { id, value } = event.target

    console.log('id', id);
    console.log('value', value);


    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [id]: value,
    }))
  }

  const carregarCep = async (cep) => {
    try {
      const response = await buscarCep(cep)

      setDataForm((prevDataForm) => ({
        ...prevDataForm,
        logradouro: response.logradouro,
        complemento: response.complemento,
        bairro: response.bairro,
        cidade: response.localidade,
        uf: response.uf,
      }))

      // foco no input número
      numeroRef.current?.focus()

    } catch (error) {

      console.error(error)
    }
  }

  const carregarEstados = async () => {
    try {
      const response = await listarEstados()
      console.log('carregarEstados');

      setEstados(response)
    } catch (error) {
      console.error(error)
    }
  }

  const carregarMunicipios = async (uf) => {
    try {
      const response = await listarMunicipiosPorUF(uf)
      setCidade(response)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    carregarEstados()
  }, [])

  useEffect(() => {
    if (dataForm.uf) {
      carregarMunicipios(dataForm.uf)
    }

  }, [dataForm.uf])

  useEffect(() => {
    console.log('cep Useeffect', dataForm.cep);

    if (dataForm.cep?.length === 8) {
      carregarCep(dataForm.cep)
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
                ref={numeroRef}
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

              {/* <InputLabel
                id="uf"
                size={2}
                label="UF"
                value={dataForm.uf || ''}
                onChange={handleChange}
              /> */}

              <SelectInput
                id="uf"
                label="UF"
                size={3}
                value={dataForm.uf || ''}
                onChange={handleChange}
                options={estados}
                optionLabel="nome"
                optionValue="sigla"
                placeholder="Selecione o estado"
              />

              {/* <InputLabel
                id="cidade"
                size={2}
                label="Cidade"
                value={dataForm.cidade || ''}
                onChange={handleChange}
              /> */}

              <SelectInput
                id="cidade"
                label="Cidade"
                size={3}
                value={dataForm.cidade || ''}
                onChange={handleChange}
                options={cidade}
                optionLabel="nome"
                optionValue="sigla"
                placeholder="Selecione a cidade"
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
