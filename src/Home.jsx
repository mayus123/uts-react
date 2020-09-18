import React from 'react'
import LogoImage from './img/logo.png'
import Siswa from './Components/Home/Siswa'
import SiswaRPL from './Components/Home/SiswaRPL'
import LifeCycle from './Components/Home/LifeCycle'

class Home extends React.Component
{
    render(){
        return (
            <div className="container">
                <img className="d-block mx-auto" src={LogoImage} height="100" alt="logo.png"/>
                <h4 className="text-center">Daftar Siswa <br/> SMK MADINATULQURAN</h4>
                <div>
                    {/* <SiswaRPL /> */}
                    <LifeCycle />
                    {/* <Siswa nama={"Yusuf"} nisn={"0034123123"} jurusan={"RPL"} /> */}
                </div>
            </div>
        );
    }
}

export default Home;