import React from 'react'
import { Button, Card } from 'react-bootstrap'
const Profilecomponent= (props) => {
  const handleName=(e)=>alert(e)
    return (
        <Card style={{ width: '20rem', height:'30rem',backgroundColor:'burlywood', borderRadius:'20px'}}>
 <Card.Body>
    <Card.Text>{props.children}
    </Card.Text>
    <Card.Title className='title'>{props.fullName}</Card.Title>
    <Card.Text className='bioo'> {props.bio} 
    </Card.Text>
    <Card.Text style={{color:'brown', fontWeight:'lighter'}}>
    {props.profession}
    </Card.Text>
    <Button variant="primary" onClick={() => handleName(props.fullName)} style={{backgroundColor:'blue', fontSize:'16px', borderRadius:'20px', color:'burlywood'}}> Visit profile</Button>
  </Card.Body>
</Card>);
};

Profilecomponent.defaultProps={

  fullName:'mariem',
  bio:'hlhzada',
  profession:'haldah',

};
export default Profilecomponent