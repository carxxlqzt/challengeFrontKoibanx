import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
export const Table = () => {
    async function getApi() {
        try {
          const response = await axios.get('https://api.propublica.org/congress/v1/113/senate/members.json', {
            headers:{"X-API-Key":"M6WzaYlhrGpoA8tvu2DJnyw0yXsJO5bXXyQ3kxqc"}
          });
            console.log(response)
          return response.data
        } catch (error) {
          return 'An error has ocurred'
        }
      }
      const { isLoading, error, data } = useQuery('datos',getApi)
      if (isLoading) return <div>Loading</div>
 
      if (error) return <div>An error has ocurred</div>
      console.log(data)
    return (
        <div>
            <table>
 
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Comercio</th>
      <th scope="col">CUIT</th>
      <th scope="col">Concepto 1</th>
      <th scope="col">Concepto 2</th>
      <th scope="col">Concepto 3</th>
      <th scope="col">Concepto 4</th>
      <th scope="col">Concepto 5</th>
      <th scope="col">Concepto 6</th>
      <th scope="col">Balance Actual</th>
      <th scope="col">Activo</th>
      <th scope="col">Ultima Venta</th>
 </tr>
  </thead>
  <tbody>
{data.results[0].members.map(e=>{return  <tr>
        <td>{e.id}</td>
        <td>{e.title}</td>
</tr>})}
    
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Número total de álbumes</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
     
        </div>
    )
}
