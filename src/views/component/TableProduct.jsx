import React from "react";
// import './App.css';

const TableProduct = () => {
    let arr = [{ nama: 'Agus', pekerjaan: 'Developer' },
    { nama: 'Wahyu', pekerjaan: 'Designer' },
    { nama: 'Ana', pekerjaan: 'Business Analyst' }]

    const renderRows=()=>{
        return arr.map((val, index)=>{
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{val.nama}</td>
                    <td>{val.pekerjaan}</td>
                </tr>
            )
        })
    }

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Pekerjaan</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    </div>
)  
}    

export default TableProduct