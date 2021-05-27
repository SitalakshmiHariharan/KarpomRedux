import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

const Products = (props) => {

    const RenderProduct = ({prodata}) =>{
        console.log("This is the prodata");
        console.log({prodata});
        if(prodata){
            return prodata.map((data) =>{
                return(
                    <div>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>      
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="warning"><Link to='/enquire'> Enquire </Link></Button>
                                </Card.Footer>
                            </Card>  
                        </CardDeck>
                    </div>
                )
            })

        }
    }
    return(
        <div>
            {RenderProduct(props)}
        </div>
    )
}

export default Products;


        