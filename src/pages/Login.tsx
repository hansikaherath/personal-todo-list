import React, {Component, FormEvent} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import LoadingScreen from "./common/LoadingScreen";

import {userLogin} from '../services/authService/UserLogin';
interface IProps {
}

interface IState {
    email?: String,
    password?: String,
    stayLoggedIn?: Boolean,
    loading?: Boolean
}

export default class Login extends Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            email:'',
            password:'',
            stayLoggedIn:false,
            loading: false
        }
    }

    onEmailChange = (value: String) => {
        this.setState({email: value});
    }

    onPasswordChange = (value: String) => {
        this.setState({password: value});
    }

    onStayLoggedInChange = () => {
        this.setState({stayLoggedIn: !this.state.stayLoggedIn});
    }

    onSubmit = async (event: any) => {
        event.preventDefault();
        this.setState({loading:true});
        try{
            await userLogin(this.state.email, this.state.password, this.state.stayLoggedIn);
            alert("Login success");
        }catch (e) {
            alert("Login failed");
        }finally {
            this.setState({loading:false});
        }
    }

    render(){
        return (
            <Container className={"bg-light p-4 "}>
                <div className={"col-lg-6"}>
                    <h2>User Login</h2><br/><br/>
                    <Form onSubmit={(e) => this.onSubmit(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                               onChange={(e) => this.onEmailChange(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                onChange={(e) => this.onPasswordChange(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Stay logged in"
                            onChange={()=> this.onStayLoggedInChange()}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>

                {this.state.loading==true?
                <LoadingScreen/>
                : null
                }
            </Container>
           );

    };
}