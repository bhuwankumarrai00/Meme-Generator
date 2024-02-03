import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = (props) => {
  const navigate = useNavigate();

  const cardStyle = {
    width: '18rem',
    margin: '25px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const imageStyle = {
    objectFit: 'cover',
    height: '200px',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={props.img} style={imageStyle} />
      <Card.Body>
        <Card.Title style={titleStyle}>{props.title}</Card.Title>
        <Button
          onClick={(e) => navigate(`/edit?url=${props.img}`)}
          variant="primary"
          style={{ marginTop: '15px' }}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemeCard;
