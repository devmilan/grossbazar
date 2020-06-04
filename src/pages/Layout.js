import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
            <ToastContainer />
        </div>
    )
}
export default Layout;