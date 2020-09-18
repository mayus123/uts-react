import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import AllPopuler from './AllPopuler';
import './Style.css';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories : [],
            categories_id : ''

        }
        console.log('constructor')
    }

    componentDidMount(){
        console.log("componentDidMount")
        const urlAllCategory = 'https://belajar-react.smkmadinatulquran.sch.id/api/category/all'
        Axios
        .get(urlAllCategory)
        .then(response => {
            console.log('response', response)
            this.setState({
                categories: response.data.data
            })
        })
        .catch(error => {
            console.log('error', error)
        })
    }

    render(){
        return(
            <Fragment>
                <div className="container-fluid float-left">
                    <div className="row">
                        <div className="col-9 halaman-pertama">
                            <nav className="navbar py-3 px-4">
                                <div className="row">
                                    <div className="col-3 text-left">
                                        <div className="navbar-brand text-dark">
                                        <span className="fa fa-bars">
                                        </span>
                                        &nbsp;
                                        <span className="font-weight-bold">MyKantin</span>
                                        </div>
                                    </div>
                                    <div className="col-8 float-right">
                                        <div className="input-group p-1 rounde bg-light">
                                        <input
                                            type="text"
                                            name="in"
                                            id="in"
                                            className="form-control bg-transparent m-0 rounded border-0 text-capitalize"
                                            placeholder=""
                                        />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="tagline row mt-5 rounded">
                                <div className="col-4">
                                    <img src="https://i.ibb.co/hVbvd4p/undraw-breakfast-psiw-2.png" class="img-fluid" alt="Responsive image" width="250" height="250"></img>
                                </div>
                                <div className="col mt-3">
                                    <h3 className="utama font-weight-bold">Promo Hari Ini</h3>
                                    <p className="child-utama">Perut Kenyang, Hati Senang</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <h4 className="font-weight-bold">Kategori</h4>
                            </div>
                            <div className="row" id="isi-kategori">
                                <div className="col-3 mt-3 bungkus" >
                                    <a href="">
                                        <img src="https://cdn.downtoearth.org.in/library/large/2019-03-05/0.89399200_1551782137_fast1.jpg" alt="semua" className="rounded card image"  width="200" height="120"/>
                                        <div className="overlay">
                                            <div className="text">Semua</div>
                                        </div>
                                    </a>
                                </div>
                                {this.state.categories.map((data, index) =>
                                <div className="col-3 mt-3 bungkus" key={data.id}>
                                    <a href="">
                                        <img src={data.img} alt={data.name} className="rounded card image"  width="200" height="120" id={index+1}/>
                                        <div className="overlay">
                                            <div className="text">{data.name}</div>
                                        </div>
                                    </a>
                                </div>
                                )}
                            </div>
                            <div className="row mt-5">
                                <h4 className="font-weight-bold">Populer</h4>
                                <AllPopuler />
                            </div>
                        </div>
                        <div className="col-3 fixed-right halaman-kedua">
                            <div className="row float-right">
                                <div className="col mt-3">
                                    <span className="fa fa-heart"></span>
                                </div>
                                <div className="col mt-3">
                                    <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnUIgT752RoB4mdWD7vPD_mmx7hT2pqQG_Ug&usqp=CAU" className="rounded-circle" alt="" width="20" height="20"/></span>
                                </div>
                            </div>
                            <div className="row pesanan-saya">
                                <h3 className="font-weight-bold">Pesanan Saya</h3>
                            </div>
                            <div className="row">
                                <div className="col kredit-pulsa">
                                    <p className="mt-2" >Mr Rizqi</p>
                                    <h4 className="mt-5">Rp. 1.000,000,-</h4>
                                    <h6 className="mt-5 mb-2">3 5 7 8 * * * * * * * * * * 8 9 1 3</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col jumlah-harga-makanan">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus laboriosam voluptate corporis harum, fugit totam hic incidunt quia mollitia, facilis inventore neque modi culpa. Ipsum minima nostrum illum blanditiis!</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col total-harga-makanan">
                                    <div className="row">
                                        <p className="font-weight-bold mt-3">Total: </p>
                                        <h3 className="font-weight-bold text-right mt-2">Rp. 690.000</h3>
                                        <button type="submit" className="btn btn-warning pesan-submit font-weight-bold mt-4">Pesan &#x3e;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Home;