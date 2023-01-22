import React from 'react'
import coverPic from '../media/Cover.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Element } from 'react-scroll'

import quote1 from '../media/quote1.jpg'
import quote2 from '../media/quote2.jpg'
import quote3 from '../media/quote3.jpg'
import quote4 from '../media/quote4.jpg'
import quote5 from '../media/quote5.jpg'
import quote6 from '../media/quote6.jpg'
//import quote7 from '../media/quote7.jpg'
//import quote8 from '../media/quote8.jpg'
//import quote9 from '../media/quote9.jpg'



const items = [
  {
    quote: `Brian worked with us on episode 409 of HBO’s Doom Patrol, which is a musical.  Brian handled 10 to 15 actors, some who were not totally comfortable as singers, with such professionalism and insight that I believe we absolutely could not have completed the episode without him.  He was so essential to the actor’s learning their parts and performing them, that I just cannot thank him enough.  Great keyboard player, great vocal coach, great singer, straight up fantastic, professional MUSICIAN, I cannot say enough good things about Brian!!
    I work with the best musicians in LA every day, and Brian outshines many of them!!!
    `,
    sig: "-Kevin Kiner, composer and Emmy nominated and BMI Award winner",
    photo: `${quote1}`,
  },
  {
    quote: "Brian was my coach and music director for my first “Mrs. Lovett.” He was one of the best music directors I’ve ever worked with.  I could have never done Mrs. Lovett without him!!  He was so patient and kind.",
    sig: "-Elin Bhaird, Actor",
    photo: `${quote2}`,
  },
  {
    quote: "During my college training at Oklahoma City University, Brian Osborne was one of the first people at OCU to truly make me feel comfortable in my skin. This allowed me to focus more on the performance aspect of the song and not spend so much time in my head. Brian’s heart and passion shines through his profound knowledge and depth of guidance, which will enable any and all of his students to be the best vocalist they could possibly be.",
    sig: "-Christin Byrdsong, The Lion King National Tour",
    photo: `${quote3}`,
  },
  {
    quote: "I’ve had the absolute pleasure of working with Brian as an audition coach. He has helped me find new material, create audition cuts, and completely revamped my character development and story telling. He has an amazing way at pulling things out of you that you didn’t know you had, and I leave every session with confidence and a clear direction for my audition. Having successfully used his coaching, I highly recommend him when preparing for your next audition!",
    sig: "-Brian Slayton, Atlanta area actor",
    photo: `${quote4}`,
  },
  {
    quote: "Brian has helped me unlock so much with my voice in the last few months. I have been singing dream songs that I knew I could but couldn’t figure out how the magic placement and he’s helped me do that. I always feel a jolt of energy and confidence after working with him.",
    sig: "-Courtney Morgan, Atlanta area actor",
    photo: `${quote5}`,
  },
  {
    quote: "I’ve been working with Brian for about 6 years now. I truly feel like I have grown as an artist with his coaching. He teaches performers to think for themselves and how to use the music as a catalyst for the acting. He’s professional and dedicated to his student’s success. Highly recommend.",
    sig: "-Victoria Staley, Atlanta area actor",
    photo: `${quote6}`,
  },
//  {
//   quote: " Brian is a natural talent and has a way of bringing strong balance of calm and professionalism to the room. He goes beyond what’s written in the page to help actors connect their hearts to the music. He respects the work and challenges those he coaches to connect their technical training with their humanity- training true artists with a real understanding of what they’re singing. I love collaborating with him as a director and a performer.",
//    sig: "-Stephanie Earl, Director, Director, Five Course Love and Lucky Stiff at Marietta Theatre Company",
//    photo: `${quote7}`,
//  },
//  {
//    quote: "Brian is a dream to work with. I’ve had the honor to collaborate with him as both a director and actor on multiple theatre projects, and I’m always impressed with the immense care and skill he brings to the rehearsal and performance process. He cares equally about the experience of the individual as he does the quality of the performance, and the result is pure magic!",
//    sig: "-Lillian Shaw, Atlanta actor",
//    photo: `${quote8}`,
//  }
  
];

const renderedQuotes = items.map((item, index) => {
    return (
      <React.Fragment key={item.sig}>
        <div classname="w-full">
          <div class=" lg:w-64 lg:h-64 md:w-48 md:h-48 w-40 h-40 mx-auto ">
            <img src={item.photo} alt="item" className="h-full object-cover object-top"/>
          </div>
          <div class="mt-8 mx-auto px-4">
            <span class="mt-8">
              {item.quote}
            </span>
            <h3 class="italic pt-4">
              {item.sig}
            </h3>
          </div>
        </div>
      </React.Fragment>
    );
  });

const Landing = () => {
  return (
    <Element name="home" class=" sm:bg-prim text-4xl">
      <div class="pt-20 lg:pt-16"></div>
      <div class="sm:grid sm:grid-cols-4 min-h-400px">


        <div class="block sm:hidden sm:col-span-2 flex justify-end">
          <img src={coverPic} alt="cover" class=" max-h-[50rem] align right" />
        </div>
      	

				      	
      	<div class="sm:col-span-2 font-bold font-sarif relative text-xs sm:text-xs md:text-sm lg:text-md text-deep-100 text-center p-4">
          <div class="my-auto sm:absolute sm:z-10 ">
            <div class="sm:mx-auto mt-4 lg:mt-20 w-full mb-8 flex justify-center">
            <Carousel 
              autoPlay="true"
              transitionTime="1000" 
              interval="12000" 
              infiniteLoop="true" 
              animationHandler="fade"
              showThumbs
              showArrows 
              stopOnHover
              showStatus={false} 
              showIndicators={false} 
              swipeable={false}
              width="100%"
              height="100%"
            >
              {renderedQuotes}

              

            </Carousel>
            </div>


            
          </div>
        </div>

      	<div class="sm:block hidden col-span-2 flex justify-end">
      		<img src={coverPic} alt="cover" class="object-cover object-top w-full max-h-[50rem]" />
      	</div>
      </div>


    </Element>

  );
};

export default Landing;

