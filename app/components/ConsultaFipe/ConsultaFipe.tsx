'use client'

import { carsSlice, selectCars, useDispatch, useSelector, fetchDataFromApi } from '@/lib/redux'


export const ConsultaFipe = () => {
  const dispatch = useDispatch()
  const marcas = useSelector(selectCars)
  console.log(marcas);
  
  return (
    <div>
      <h1>Tabela Fipe</h1>
      <h3>Consulte o valor de um veículo de forma gratuita</h3>
      <button onClick={() => dispatch(fetchDataFromApi())}>click</button>
      <button onClick={() => dispatch(carsSlice.actions.getMarcas())}>click</button>

    </div>
  )
}
