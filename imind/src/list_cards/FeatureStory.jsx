import React, { useState } from 'react';
import { GridCard } from './GridCard';
import styled from 'styled-components';

export const FeatureStory = ({data, title}) => {
  const [arr] = useState(data)

  return (
    <DIV>
      <div className='p'>
        <p>{title}</p>
      </div>
      <div className='grid'>
        {arr.length > 0 && arr.map((el,i)=> {
          return <GridCard key={i} {...el}/>
        })}
        </div>
    </DIV>
  )
}

const DIV = styled.div`
  .grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 90%;
    margin: auto;
  }
  .p{
    text-align: left;
    margin: 1% 0 1% 5%;
    font-size: 25px;
    font-weight: 600;
  }
`