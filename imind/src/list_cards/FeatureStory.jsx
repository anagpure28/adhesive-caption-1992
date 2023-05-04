import React from 'react';
import { GridCard } from './GridCard';
import styled from 'styled-components';

let arr = [
  {
    id: 1,
    image: "https://wellbeingtrust.org/wp-content/uploads/2019/01/post-image-009-800x600-1.jpg",
    date: "28 April 2023",
    text: "Transforming national mental health system: Best practices from WHO Special Initiative for Mental Health",
    link: "https://www.who.int/news-room/feature-stories/detail/transforming-national-mental-health-systems--best-practices-from-the-who-special-initiative-for-mental-health"
  },
  {
    id: 2,
    image: "https://cdn.who.int/media/images/default-source/funding/searo_exr_entomology.jpg?sfvrsn=e5487a46_3",
    date: "28 April 2023",
    text: "Donors making a difference: building skills, building capacity",
    link: "https://www.who.int/news-room/feature-stories/detail/donors-making-a-difference--building-skills--building-capacity"
  },
  {
    id: 3,
    image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/03/609849-mental-health-hub-1200x675-twitter.jpg",
    date: "18 May 2020",
    text: "Scaling-up mental health and psychosocial services in war-affected regions: best practices from Ukraine",
    link: "https://www.who.int/news-room/feature-stories/detail/scaling-up-mental-health-and-psychosocial-services-in-war-affected-regions--best-practices-from-ukraine"
  },
  {
    id: 4,
    image: "https://www.unaids.org/sites/default/files/styles/webstory_ptohogallerytopimage/public/MHEE_Chanthaburi-296%20%283%29.jpg?itok=Se9j-1Aj",
    date: "9 December 2022",
    text: "NCD Lab series: Working with children, families, and schools to tackle childhood obesity in Chile",
    link: "https://www.who.int/news-room/feature-stories/detail/ncd-lab-series-working-with-children-families-and-schools-to-tackle-childhood-obesity-in-chile"
  },
]

export const FeatureStory = () => {
  return (
    <DIV>
      <div className='p'>
        <p>Featured Videos</p>
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