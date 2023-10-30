// No seu componente ConsultaFipe:
import { useEffect } from 'react'


import { CarsSliceState, selectCars, useDispatch, useSelector } from '@/lib/redux'
import { fetchDataFromApi } from '@/lib/redux/slices/carsSlice/thunks'


export const ConsultaFipe = () => {
  const marcas = useSelector(selectCars)
  const dispatch = useDispatch()
  console.log(marcas);
  

  
    


  return (
    <div>
      <h1>Tabela Fipe</h1>
      <h3>Consulte o valor de um veículo de forma gratuita</h3>
      <button onClick={() => dispatch(fetchDataFromApi())}>click</button>
    </div>
  )
}
