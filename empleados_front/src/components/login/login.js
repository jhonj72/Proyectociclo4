import React from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import {APIHOST as host} from "../../app.json";
import "./login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:"",
            pass:"",
        };
    }
    iniciarSesion() {
        axios.post(`${host}/usuarios/login`,{
            usuario:this.state.usuario,
            pass:this.state.pass,
        })
        .then((Response)=> {
            console.log(Response);
        })
        .catch((err)=> {
            console.log(err);
        });
        //alert("Botón de iniciar sesion") //Al dar click al bot{on de iniciar sesión sale el mensaje de alerta
        //alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`)
    }
    render() {
        return (
            <Container id="login-container" >
                <Row>
                    <Col>
                    <Row>
                        <h2> Iniciar Sesión </h2>
                    </Row>
                    <Row>
                        <Col
                        sm ="12"
                        xs ="12"
                        md = {{span: 4, offset:4}}
                        lg = {{span: 4, offset:4}}
                        xl = {{span: 4, offset:4}}>
                    <Form>
                    <Form.Group>
                        <Form.Label >Usuario</Form.Label>
                        <Form.Control 
                        onChange={(e)=>
                        this.setState({usuario:e.target.value})
                        }
                        />
                       
                    </Form.Group>

                    <Form.Group >
                        <Form.Label >Contraseña</Form.Label>
                        <Form.Control type="password" 
                            onChange={(e) =>
                            this.setState({pass: e.target.value})
                            }
                        />
                       
                    </Form.Group>
                    
                    <Button 
                        variant="danger"  
                        onClick ={() =>{
                            this.iniciarSesion()
                        }                        
                        }                        
                        >
                        Iniciar Sesión
                    </Button>
                </Form>
                </Col>
                </Row>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}
