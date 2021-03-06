import React from "react";
import { Jumbotron, Card } from "react-bootstrap";
import Slider from "react-slick";

export default class RecentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { title: "TOTAL OPENED", count: 0 },
        { title: "KNIVES", count: 0 },
        { title: "COVERT", count: 0 },
        { title: "CLASSIFIED", count: 0 },
        { title: "RESTRICTED", count: 0 },
        { title: "MIL-SPEC", count: 0 },
      ],
      recentItems: [
        {
          title: "dodge",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb32qwb3tcd1qP1HtYziMPQyyTJfIAIEx4iQ&usqp=CAU",
        },
        {
          title: "mitshubisi",
          src:
            "https://pbs.twimg.com/profile_images/636676153915273216/cEwa73Xv_400x400.jpg",
        },
        {
          title: "nissan",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvqWyrjVRFntgaEo0SEcalMmwrk2bofL-wIA&usqp=CAU",
        },
        {
          title: "camaro",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY91VMTZPuZVhqBo-z2B__g-GW0wxYSvHCrw&usqp=CAU",
        },
        {
          title: "acura",
          src:
            "https://is3-ssl.mzstatic.com/image/thumb/Purple62/v4/4e/a8/31/4ea831cd-add0-7ad4-667a-3ebd2440b05c/source/256x256bb.jpg",
        },
        {
          title: "subaru",
          src:
            "https://cdn178.picsart.com/223339521028202.jpg?type=webp&to=crop&r=256",
        },
        {
          title: "bmw",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6pCmfyXzrQbfriZSiuNLDc3I9LdNfF7HbA&usqp=CAU",
        },
        {
          title: "toyota",
          src:
            "https://cdn140.picsart.com/331842257081201.jpg?type=webp&to=crop&r=256",
        },
        {
          title: "copper",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQN63o_oTjRnHDE0rIMNSyHr9JQPLh5mtS-5g&usqp=CAU",
        },
      ],
      slickSetting: {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
      },

      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.updateSlickSetting = this.updateSlickSetting.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("resize", this.updateSlickSetting);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  updateSlickSetting() {
    var { slickSetting } = { ...this.state };
    if (window.innerWidth > 700) {
      slickSetting.slidesToShow = 8;
      this.setState({ slickSetting });
    } else {
      slickSetting.slidesToShow = 5;
      this.setState({ slickSetting });
    }
  }

  render() {
    return (
      <div className='mt-5'>
        <div className='row d-flex justify-content-around mb-3'>
          {this.state.counters.map((counter) => (
            <div className='col border border-success border-left-0 border-right-0 shadow-sm mx-1'>
              <p className='mb-0'>{counter.title}</p>
              <p className='mb-0'>{counter.count}</p>
            </div>
          ))}
        </div>

        <div className='row mb-3'>
          <div className='col'>
            <p class='ui horizontal divider header'>RECENT ITEM</p>
          </div>
        </div>

        <div className='mb-3'>
          <Slider {...this.state.slickSetting}>
            {this.state.recentItems.map((Item) => (
              <div class='ui card'>
                <div class='image'>
                  <img style={{ height: "20vh" }} src={Item.src} />
                </div>
                <div class='content'>
                  <a class='header'>{Item.title} </a>
                  <div class='meta'>
                    <span class='date'>Joined in 2013</span>
                  </div>
                  <div class='description'>This is description...</div>
                </div>
                <div class='extra content'>
                  <a>
                    <i class='user icon'></i>
                    22 Friends
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}
