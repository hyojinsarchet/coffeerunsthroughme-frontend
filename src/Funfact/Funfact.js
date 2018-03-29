import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./Funfact.css";

class Funfact extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear",
      pauseOnHover: true
    };

    return (
      <div className="funcfact">
        <h1>Want to know some fun facts?</h1>
        <Slider {...settings}>
          <div>
            <h3>
              A Starbucks Grande coffee has 320 mg of caffeine, which is over
              four times the amount of caffeine in a Red Bull.
            </h3>
          </div>
          <div>
            <h3>Decaf isn't the same as caffeine free.</h3>
          </div>
          <div>
            <h3>The average american consumes 200mg of caffeine daily.</h3>
          </div>
          <div>
            <h3>Women metabolize caffeine about 25% faster than men.</h3>
          </div>
          <div>
            <h3>
              A 12-oz can of Sunkist Orange has 41 mg of caffeine, which is more
              caffeine than in a similar amount of Coca-Cola or Pepsi.
            </h3>
          </div>
          <div>
            <h3>Caffeine doesn’t dehydrate you.</h3>
          </div>
          <div>
            <h3>
              Smokers metabolize caffeine at a rate of 50% faster than
              nonsmokers and, consequently, require more frequent cups of coffee
              to feel the same effects.
            </h3>
          </div>
          <div>
            <h3>
              Caffeine is the earth’s most widely used drug. Alcohol is second
              and nicotine is third."
            </h3>
          </div>
          <div>
            <h3>
              Caffeine can be found in unusual places such as jelly beans,
              breath mints, peanut butter and chewing gum.
            </h3>
          </div>
          <div>
            <h3>
              Dark roasted coffees actually have less caffeine than lighter
              roasts. The process of roasting burns off the caffeine.
            </h3>
          </div>
          <div>
            <h3>
              Between 10 and 20 grams of caffeine will kill a person. This is
              equivalent to 4.69 gallons of coffee.
            </h3>
          </div>
          <div>
            <h3>
              Scientist discovered caffeine pollution from human waste in the
              Pacific Ocean near the coast of Oregon.
            </h3>
          </div>
          <div>
            <h3>
              Soldiers during World Wars I and II carried caffeine in the form
              of tablets to combat exhaustion.
            </h3>
          </div>
          <div>
            <h3>
              Finland consumes more caffeine than any other country, with the
              average adult consuming 400 mg each day.
            </h3>
          </div>
          <div>
            <h3>
              Two cups of coffee a day may improve a man’s sex life; however,
              benefits decline after two cups.
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Funfact;

// learned about the React Slick from this link below.
// https://react-slick.neostack.com/
