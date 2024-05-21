import React from 'react';
import { Button, Card } from 'react-bootstrap'
import '../css-sheets/signin.css';



function Admin_signin() {
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
                            ADMIN SIGN IN
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


export default Admin_signin;