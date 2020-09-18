import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class AllPopuler extends Component{
    constructor(props){
        super(props)
        this.state = {
            populers : [],
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log("componentDidMount from all populer")
        const url = "https://belajar-react.smkmadinatulquran.sch.id/api/populer/all"
        Axios
        .get(url)
        .then(response => {
            console.log('response', response)
            this.setState({
                populers: response.data.data
            })
        })
        .catch(error => {
            console.log('error', error)
        })
    }
    
    render(){
        return (
            <Fragment>
                <div className="row">
                    {this.state.populers.map((populer, index) => 
                    <div className="col-3 mt-3">
                        <img src={populer.image} alt={populer.name} className="rounded" width="190" height="120"/>
                        <h5 className="">{populer.name}</h5>
                        <p className="harga">&#9734; {populer.rating} Rp.{populer.harga}</p>
                    </div>
                    )}
                    
                </div>
            </Fragment>
        )
    }
}

export default AllPopuler;