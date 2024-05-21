import React from 'react';
import {Carousel } from 'react-bootstrap'
//import { UserContext } from '../App';
import '../css-sheets/home.css';
import { useNavigate } from "react-router-dom";

function HomeScreen(){
    const navigate = useNavigate();

    return(
        <div className="home_area" >
            
            <h1>
                <img className="title_logo" src='M_flag_left.png'></img>
                &nbsp;WELCOME&nbsp;
                <img className="title_logo" src='M_flag_right.png'></img>
            </h1>
            <h4>PLEASE CREATE ACCOUNT OR SIGN IN</h4>
            <Carousel  className="home_carousel">
                <Carousel.Item interval={5000}>
                    <img
                    className = "home_image" onClick={()=>{navigate('/student_signin')}} src="Student_logo.png"
                    />
                    <Carousel.Caption>
                    <h3 className='home_caption'>STUDENTS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className = "home_image" onClick={()=>{navigate('/teacher_signin')}} src="Pencil.png"
                    />

                    <Carousel.Caption>
                    <h3 className='home_caption'>TEACHERS</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div>
                    <img className = "home_image" onClick={()=>{navigate('/admin_signin')}}src="Admin_logo.png"></img> 
                    </div>
                    <Carousel.Caption>
                    <h3 className='home_caption'>ADMIN</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            
                

        </div>
    )
    
}
export default HomeScreen;