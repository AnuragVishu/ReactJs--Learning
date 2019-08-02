import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const TaskCards = (props) => {

  

    function getRandomColor(){
        const min = 1;
    const max = 999;
    const rand = min + Math.random() * (max - min);
    console.log("#" + toString(rand))

    const colorHash = "#" + toString(rand)
    return colorHash
 
    }

    return (
        <div>
            <Card body inverse >
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button style={{ backgroundColor: "#" + toString( Math.random() * (999 - 1)), borderColor: getRandomColor }}>Button</Button>
            <Button color="secondary">Button</Button>
            </Card>
        </div>
  );
};

export default TaskCards;