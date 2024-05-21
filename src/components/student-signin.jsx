import React from 'react';
import { Card, Button } from 'react-bootstrap'
import '../css-sheets/signin.css';



function Student_signin() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState(''); 

    return (
        <div className="page_forms">
            <div className="form_area">
                <Card
                    bg={'secondary'}
                    key={'secondary'}
                    text={'light'}
                    style={{ width: '25rem', padding: '10px', margin: "auto" }}
                >
                    <Card.Header>
                        <h2 style={{ textAlign: 'center'}}>
                            STUDENT SIGN IN
                        </h2>
                    </Card.Header>
                    <Card.Body>
                        <Button>Signin</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )


    }


export default Student_signin;