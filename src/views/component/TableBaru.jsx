import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         arr: [
            { id: 1, nama: 'Agus', pekerjaan: 'Developer'},
            { id: 2, nama: 'Andi', pekerjaan:'Designer' },
            { id: 3, nama: 'Tono', pekerjaan:'Business Analyst' },
         ]
      }
   }
   renderTableData=()=> {
    return this.state.arr.map((arr) => {
       const { id, nama, pekerjaan } = arr
       return (
          <tr>
             <td>{id}</td>
             <td>{nama}</td>
             <td>{pekerjaan}</td>
          </tr>
       )
    })
 }
   render=()=> { 
    return (
        <div>
        <table >
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Pekerjaan</th>
                </tr>
            </thead>
           <tbody>
                  {this.renderTableData()}
           </tbody>
        </table>
     </div>
     )
 }
}
export default Table