import React from 'react';
import { Element } from 'react-scroll'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import pic1 from "../media/KVC_5962.jpg"
import pic2 from "../media/KVC_6021.jpg"
import pic3 from "../media/KVC_6444.jpg"
import pic5 from "../media/BrianCaroline.jpg"
import pic6 from "../media/BrianHarpsichord.jpg"
import pic7 from "../media/brianHeadset.jpg"

import pic9 from "../media/BrianLuker.jpg"
import pic10 from "../media/BrianOrchestra.jpg"
import pic11 from "../media/BrianAtPiano.jpg"

import pic13 from "../media/Head1.jpg"
import pic14 from "../media/Head2.jpg"
import pic15 from "../media/Head3.jpg"
import pic16 from "../media/Head4.jpg"






const Media = () => {




  return (
    <Element name="media" class=" m-4 mt-20 mb-8 md:w-3/4 md:mx-auto">
    	
      <Carousel  autoPlay="true" centerMode="true" dynamicHeight="true" transitionTime="500" interval="4000" stopOnHover="true" centerSlidePercentage="50" height="60px" infiniteLoop="true" >
                <div class="h-64">
                    <img src={pic1} alt="media1"/>
                </div>
                
                <div>
                    <img src={pic2} alt="media1" />
                </div>
                <div>
                    <img src={pic3} alt="media2" /> 
                </div>
                <div>
                    <img src={pic6} alt="media4" />
                </div>
                <div>
                    <img src={pic5} alt="media5" />
                </div>
                <div>
                    <img src={pic7} alt="media6" />
                </div>
               
                <div>
                    <img src={pic9} alt="media7" />
                </div>
                <div>
                    <img src={pic10} alt="media8" />
                </div>
                <div>
                    <img src={pic11} alt="media9" />
                </div>
                <div>
                    <img src={pic13} alt="media10" />
                </div>
                <div>
                    <img src={pic14} alt="media11" />
                </div>
                <div>
                    <img src={pic15} alt="media12" />
                </div>
                <div>
                    <img src={pic16} alt="media13" />
                </div>
                
                
            </Carousel>
      </Element>
   
  );
};

export default Media;