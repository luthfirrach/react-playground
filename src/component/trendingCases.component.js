import React from "react";
import { Card, Button } from "react-bootstrap";

export default class TrendingCases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      containers: [
        {
          src:
            "https://www.pngitem.com/pimgs/m/51-519956_20ft-shipping-container-png-transparent-png.png",
        },
        {
          src:
            "https://lh3.googleusercontent.com/proxy/f_Masogy3aIkIMXalRMY-zkIj3QHlx0nzkgNaznR9SGsrAB4f5R7SSGpedBMztfA-BXL0VAkACY2qJ47dT3ymbIhEISgGQ",
        },
        {
          src:
            "https://www.pngitem.com/pimgs/m/31-313299_refurbished-shipping-containers-shipping-container-png-transparent-png.png",
        },
        {
          src:
            "https://www.vippng.com/png/detail/33-332452_storage-container-sizing-options-shipping-container-clip-art.png",
        },
        {
          src:
            "https://atlas-content-cdn.pixelsquid.com/stock-images/red-shipping-container-cargo-w1OXLL5-600.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='container'>
          <h3>Trending Cases</h3>
        </div>
        <div className='d-flex container'>
          {this.state.containers.map((container) => (
            <Card style={{ width: "18rem" }} className='bg-transparent'>
              <Card.Img variant='top' src={container.src} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
