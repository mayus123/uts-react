import React from 'react';

const Siswa = (props) =>{
    return (
        <table className="mb-3 mt-1">
            <thead>
                <tr>
                    <th>Nama</th>
                    <td>:</td>
                    <td>{props.nama}</td>
                </tr>
                <tr>
                    <th>NISN</th>
                    <td>:</td>
                    <td>{props.nisn}</td>
                </tr>
                <tr>
                    <th>Jurusan</th>
                    <td>:</td>
                    <td>{props.jurusan}</td>
                </tr>
            </thead>
        </table>
    );
}

export default Siswa;