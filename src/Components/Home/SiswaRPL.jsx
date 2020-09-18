import React from 'react'

class SiswaRPL extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            namaDaftar : 'Daftar Siswa RPL',
            namaSiswas : [
                {nama : 'Yusuf' , nisn : '003482912', jurusan : 'Rekayasa Perangkat Lunak'},
                {nama : 'Ican' , nisn : '003459421', jurusan : 'Rekayasa Perangkat Lunak'},
                {nama : 'Halo' , nisn : '003459421', jurusan : 'Rekayasa Perangkat Lunak'},
            ]
        }
    }

    onClickHandler = () => {
        // {event}
        console.log("Ok, tombol sudah di Klik")
        this.setState({
            namaDaftar : 'Daftar Siswa TKJ',
            namaSiswas : [
                {nama : 'Hanip' , nisn : '003482912', jurusan : 'Teknik Komputer Jaringan'},
                {nama : 'Dapa' , nisn : '003459421', jurusan : 'Teknik Komputer Jaringan'},
            ]
        })
    }
    render(){
        return (
            <div className="container">
                <button onClick={this.onClickHandler} className="btn btn-success form-control">Ganti Daftar</button>
                <h3 className="text-center mt-3">{this.state.namaDaftar}</h3>
                {this.state.namaSiswas.map ((namaSiswa , index) =>
                    <div className="card mt-4 mb-4" key={index}>
                        <img src="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png" height="150" width="150" alt=""/>
                        <div className="card-body">
                            <div className="card-title">Nama : {namaSiswa.nama}</div>
                            <p className="card-text">NISN : {namaSiswa.nisn}</p>
                            <p className="card-text">Jurusan : {namaSiswa.jurusan}</p>
                            <p>{index +1}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default SiswaRPL;

// Foreach ($datas as $data) {

// }