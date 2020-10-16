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
      <div>
        <div className='row mb-3'>
          <div className='col'>
            <p class='ui horizontal divider header'>TRENDING ITEM</p>
          </div>
        </div>
        <div className='row d-flex'>
          {this.state.containers.map((container) => (
            <div className='col my-1 mx-1'>
              <div class='ui four card'>
                <a class='red card'>
                  <div class='image'>
                    <img style={{ height: "15vh" }} src={container.src} />
                  </div>
                </a>
              </div>

              <div class='ui animated button' tabindex='0'>
                <div class='visible content'>Next</div>
                <div class='hidden content'>
                  <i class='right arrow icon'></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
