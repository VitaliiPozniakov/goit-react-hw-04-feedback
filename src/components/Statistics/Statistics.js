import React from "react";
import { Text, Value, } from './Statistics.styled.jsx';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return (
    <>
    <Text>
      Good: <Value>{good}</Value>
    </Text>
    <Text>
      Neutral: <Value>{neutral}</Value>
    </Text>
    <Text>
      Bad: <Value>{bad}</Value>
    </Text>
    <Text>
      Total: <Value>{total}</Value>
    </Text>
    <Text>
      Positive feedback: <Value>{positivePercentage ? positivePercentage : 0 }%</Value>
    </Text>
    </>
   )
}

export default Statistics

