import React,{Component} from 'react';
import Carousel from 'react-elastic-carousel';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import './Slider.css';

// const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

export default class Sliders extends Component  {
    state = {
        items: [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      }
     
      render () {
        const { items } = this.state;
        return (
          <Carousel breakPoints={breakPoints}>
            {items.map(item => <div key={item.id}>{item.title}</div>)}
          </Carousel>
        )
      }
  }