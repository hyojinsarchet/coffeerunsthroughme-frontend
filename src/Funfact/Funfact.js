import React, { Component } from "react";
import "./Funfact.css";

class Funfact extends Component {
  render() {
    const funfact = [
      "Death from too much caffeine is rare, but possible.",
      "Caffeine withdrawal is a real condition",
      "Caffeine can be found in unusual places such as jelly beans, breath mints, peanut butter and chewing gum.",
      "Caffeine in plants acts as a natural pesticide and herbicide",
      "Decaf isn't the same as caffeine free.",
      "Energy drinks have less caffeine than coffee.",
      "Dark roasted coffees actually have less caffeine than lighter roasts. The process of roasting burns off the caffeine.",
      "The average american consumes 200mg of caffeine daily.",
      "Between 10 and 20 grams of caffeine will kill a person. This is equivalent to 4.69 gallons of coffee.",
      "The word “caffeine” is from the German Kaffe (“coffee”).",
      "Scientist discovered caffeine pollution from human waste in the Pacific Ocean near the coast of Oregon.",
      "Soldiers during World Wars I and II carried caffeine in the form of tablets to combat exhaustion.",
      "Finland consumes more caffeine than any other country, with the average adult consuming 400 mg each day.",
      "Women metabolize caffeine about 25% faster than men.",
      "Asians metabolize caffeine more slowly than Caucasians.",
      "A Starbucks Grande coffee has 320 mg of caffeine, which is over four times the amount of caffeine in a Red Bull.",
      "Pure caffeine is a bitter, highly toxic white powder.",
      "Caffeine kicks in after 15–20 minutes. The effects usually last 8–14 hours, depending on a person’s gender, age, weight, and even race.",
      "Two cups of coffee a day may improve a man’s sex life; however, benefits decline after two cups.",
      "Caffeine helps muscle burn fat as an energy source rather than a glycogen (carbohydrate). However, too much caffeine will actually decrease athletic performance.",
      "Coffee consumption is associated with a decreased risk of type 2 diabetes and heart disease.",
      "Smokers metabolize caffeine at a rate of 50% faster than nonsmokers and, consequently, require more frequent cups of coffee to feel the same effects.",
      "A 12-oz can of Sunkist Orange has 41 mg of caffeine, which is more caffeine than in a similar amount of Coca-Cola or Pepsi.",
      "Studies show that coffee can help fight depression. However, overconsumption of caffeine, or consuming more than 400 mg per day, is linked to an increased risk of depression.",
      "Diet pills typically contain caffeine. For example, taking a daily dose of Zantrex-3 is like drinking 12 cups of coffee.",
      "Caffeine is the earth’s most widely used drug. Alcohol is second and nicotine is third.",
      "Studies show that those who drink at least a cup of coffee a day have between 20% and 36% lower rates of suicide, and those who drink less than a cup have 36% higher rates.",
      "Caffeine can boost your endurance.",
      "Caffeine doesn’t dehydrate you.",
      "Caffeine can increase your mental focus."
    ];

    const randomFunfact = funfact[Math.floor(Math.random() * funfact.length)];

    return <div>{randomFunfact}</div>;
  }
}

export default Funfact;
