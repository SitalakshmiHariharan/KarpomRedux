import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class EnquireForm extends Component{
    constructor(){
        super()
        this.state={
            usrname:"",
            usremail:"",
            interest:"",
            message:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let nam = event.target.name;
        let val = event.target.value;        
        this.setState({[nam]:val})        
    }

    handleSubmit(event) {        
        event.preventDefault();
        console.log("Inside the submit method");
        const requestOptions={
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{'Content-Type': 'application/json'}
        }
        console.log(requestOptions);
        fetch('http://localhost:6700/users',requestOptions)
        .then ((response) => response.text())
        .then ((text) => this.setState({message:"Your enquiry has been submitted successfully!!"}))        
    }
    
    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <br/>
                <h3 style={{color: "green"}}> Thank you for your interest. Please leave your details below. We will reach out to you shortly </h3>
                <br/>
                <Form.Group as={Row} controlId="Name">
                    <Form.Label column sm={1}>Name</Form.Label>
                    <Col sm={15}>
                    <Form.Control type="text" name="usrname" placeholder= "Please enter your name" onChange={this.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="Email">
                    <Form.Label column sm={1}>Email</Form.Label>
                    <Col sm={15}>
                    <Form.Control type="email" name="usremail" placeholder="Please enter your email" onChange={this.handleChange}/>
                    </Col>                
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>            
                <fieldset>
                    <Form.Group as={Row} controlId="Form.ControlSelect">
                        <Form.Label as="legend" column sm={1}>Interested In </Form.Label>
                        <Col sm={15}>
                            <Form.Control as="select" name="interest" onChange={this.handleChange}>
                                <option value="aws">AWS Architect</option>
                                <option value="angular">Angular Certification Training</option>
                                <option value="react">React Certification Training</option>
                                <option value="java">Java</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </fieldset> 
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 1 }}>
                    <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
                <p style={{color: "blue"}}>{this.state.message}</p>
            </Form>
        )
    }
}

export default EnquireForm;

