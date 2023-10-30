import { useDispatch } from '@/lib/redux';

export const fetchApiFipe = async (
) => {
  const dispatch = useDispatch();
  const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json();
  return result;
}
