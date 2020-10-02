import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Recepie = ({title, calories, image, source}) => {
  return(
      <Card>
        <CardImg top src={image} alt={title} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{source}</CardSubtitle>
        </CardBody>
      </Card>
  )
}

export default Recepie;