import { carsSlice, useDispatch } from '@/lib/redux';

export const fetchApiFipe = async (
  ) => {
  const dispatch = useDispatch();
  const result = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
  .then(response => response.json())
  .then((data) => dispatch(carsSlice.actions.getMarcas(data)));
  return result;
}
