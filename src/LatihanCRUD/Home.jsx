import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import swal from "sweetalert";
import AddEditUser from './Modal/AddEditUser'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            datas : [],
            per_page : '5',
            current_page : '',
            total_pages : '',
            formName : '',
            userId : '',
            status : '',
            search: "",

        }
        console.log('constructor')
    }

    onPreviousHandle =() =>{
        console.log('tombol sebelumnya sudah di Klik')
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page-1}`
        Axios
        .get(url)
        .then (response => {
            console.log('Data Berhasil didapatkan', response)
            this.setState({
                datas : response.data.data,
                per_page : response.data.meta.per_page,
                current_page : response.data.meta.current_page,
                total_pages : response.data.meta.total_pages
            })
            console.log('Anda berada di data yang ke-', response.data.meta.current_page)
        })
        .catch(error => {
            console.log(error)
        })
    }

    onNextHandle =() => {
        console.log('tombol selanjutnya sudah di klik')
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page+1}`
        Axios
        .get(url)
        .then (response => {
            console.log('Data Berhasil didapatkan', response)
            this.setState({
                datas : response.data.data,
                per_page : response.data.meta.per_page,
                current_page : response.data.meta.current_page,
                total_pages : response.data.meta.total_pages
            })
            console.log('Anda berada di data yang ke-', response.data.meta.current_page)
        })
        .catch(error => {
            console.log(error)
        })
    }

    onSelectItem =(event) => {
        console.log('Value', event.target.value)
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${event.target.value}`
        Axios
        .get(url)
        .then (response => {
            console.log('Select item', response)
            this.setState({
                datas : response.data.data,
                per_page : response.data.meta.per_page,
                current_page : response.data.meta.current_page,
                total_pages : response.data.meta.total_pages
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    
    delete = (e) => {
        e.preventDefault();
        const sc = e.target.value;
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${sc}`;
        console.log("data id", sc);
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                Axios.get(url)
                .then((resources) => {
                    console.log("kehapus", sc);
                    this.componentDidMount()
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success"
                    });
                })
                .catch((error) => {
                    console.log(error);
                    swal("Maaf, Error!");
                });
            }
        });
    };
    
    
    componentDidMount(){
        console.log('componentDidMount')
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}`
        Axios
        .get(url)
        .then (response => {
            console.log('Data Berhasil didapatkan', response)
            this.setState({
                datas : response.data.data,
                per_page : response.data.meta.per_page,
                current_page : response.data.meta.current_page,
                total_pages : response.data.meta.total_pages
            })
            console.log('Anda berada di data yang ke-', response.data.meta.current_page)
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    updateTable =() => {
        this.componentDidMount()
    }

    change = (event) => {
        const sc = event.target.value;
        this.setState({
          search: sc
        });
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/cari/${sc}`;
        console.log("keyword", sc);
        Axios.get(url).catch((error) => {
          return (error = false);
        });
      };

    render(){
        return(
            <Fragment>
                <div className="container mt-3 mb-3">
                    <h2 className="text-center font-weight-bold mb-3">Latihan CRUD</h2>
                    <div className="row">
                        <div className="col-3">
                            <button onClick={()=> {
                                this.setState({
                                    formName : 'Form Registrasi',
                                    status : 'Add',
                                    userId : ''
                                })
                            }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                <i className="fas fa-plus-circle"></i>&nbsp; Tambah Data
                            </button>
                            <button onClick={this.updateTable} className="btn btn-danger ml-3">R</button>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-1 col-sm-1 col-md-1 col-lg-1 mb-3">
                            <select onChange={this.onSelectItem} className="form-select">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <input
                            type="text"
                            className="form-control border border-light inputtt"
                            placeholder="Who's in your mind?"
                            onChange={this.change}
                        />
                        </div>
                    <table className="table table-hover table-responsive">
                        <thead>
                            <tr className="table-primary">
                            <th scope="col" className="text-center">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Jenis Kelamin</th>
                            <th scope="col">Tanggal Buat</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.datas
                        .filter(
                            (data) =>
                              data.name
                                .toLowerCase()
                                .includes(this.state.search.toLowerCase()) ||
                              data.email
                                .toLowerCase()
                                .includes(this.state.search.toLowerCase()) ||
                              data.username
                                .toLowerCase()
                                .includes(this.state.search.toLowerCase())
                          )
                        .map((data, index) =>  
                                <tr key={data.id}>
                                    <th scope="row" className="text-center">{index+1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.jenis_kelamin}</td>
                                    <td>{data.stored_at}</td>
                                    <td><button onClick={()=> {
                                        this.setState({
                                            formName : 'Form Update',
                                            userId : data.id,
                                            status : 'Update'
                                        })
                                    }} className="btn btn-success" data-toggle="modal" data-target="#exampleModal">Update</button></td>
                                    <td><button  onClick={this.delete} value={data.id}  className="btn btn-danger">Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="d-flex float-right">
                        <nav>
                            <ul className="pagination">
                                <li className="page-item"><button onClick={this.onPreviousHandle} className="page-link"><i className="fas fa-chevron-left fa-xs"></i> Previous</button></li>
                                <li className="page-item"><button onClick={this.onNextHandle} className="page-link">Next <i className="fas fa-chevron-right fa-xs"></i></button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Modals */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                                <AddEditUser updateTable={this.updateTable} status={this.state.status} userId={this.state.userId} formName = {this.state.formName} />
                        </div>
                    </div>
                </div>
                {/* Akhir Modal */}
            </Fragment>
        )
    }
}

export default Home