import React from 'react';
import { Card, Button } from 'react-bootstrap'
import '../css-sheets/signin.css';



function Student_signin() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState(''); 


    return (
        <div className="page_forms">
            <div className="form_area">
                <Card  className='signin-card'>
                    <Card.Header className='signin-head'>
                        <h2>
                            STUDENT SIGN IN
                        </h2>
                    </Card.Header>
                    <Card.Body>
                        <Button className='signin-button'>Signin</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )


    }


export default Student_signin;