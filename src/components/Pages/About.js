import React, { useState } from "react";
import splash from "../media/splash2.png";
import LS from "../media/LittleShop.jpg";
import VC1 from "../media/BrianCaroline.jpg";
import VC2 from "../media/BrianKyle.jpg";
import BrainPiano from "../media/BrianAtPiano.jpg";
import BrianHarp from "../media/BrianHarpsichord.jpg";
import { Element } from "react-scroll";

import RM from "../media/resume.pdf";
import CV from "../media/CV.pdf";
import pic16 from "../media/Head4.jpg";

const items = [
  {
    title: "About Brian",
    photo: `..media/BrianHarpsichord.jpg`,
  },
  {
    title: "Vocal Coaching",
    photo: `..media/BrianHarpsichord.jpg`,
  },
  {
    title: "Music Direction",
    photo: `${splash}`,
  },
  {
    title: "Pianist",
    photo: { LS },
  },
  {
    title: "Resume",
    photo: `..media/BrianHarpsichord.jpg`,
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const selected =
      index === activeIndex ? "border-blue-300" : "border-gray-100";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`cursor-pointer font-bold delay-75 select-none px-4 py-2 border-b-4  ${selected} hover:border-blue-500 transition ease-out duration-300 hidden sm:block `}
          onClick={() => onTitleClick(index)}
        >
          {item.title}
        </div>
      </React.Fragment>
    );
  });

  const renderedContent = items.map((item, index) => {
    const active = index === activeIndex ? "" : "hidden";

    const about = 0 === activeIndex ? "" : "fade sm:hidden";
    const vocal = 1 === activeIndex ? "" : "fade sm:hidden";
    const music = 2 === activeIndex ? "" : "fade sm:hidden";
    const audition = 3 === activeIndex ? "" : "sm:hidden";
    const resume = 4 === activeIndex ? "" : "sm:hidden";

    return (
      <React.Fragment key={item.content}>
        <div class={`m-4 ${active} anim`}>
          <div
            class={`font-bold text-red-900  md:text-3xl text-xl mb-6 uppercase ${vocal} sm:block hidden`}
          >
            {item.title}
          </div>

          <div
            class={`font-bold text-red-900  md:text-3xl text-xl mb-6 uppercase ${music} sm:block hidden`}
          >
            {item.title}
          </div>

          <div>
            <div className="flex flex-col justify-center gap-2 md:flex-row">
              <div class={` ${about} w-full `}>
                <img
                  src={splash}
                  className={` max-w-md w-full mx-auto `}
                  alt="Music"
                />
              </div>

              <div
                class={`${about} delay-1000 min-h-[26rem] md:p-12 md:pt-4 md:mx-auto `}
              >
                <div
                  class={`font-bold text-red-900  md:text-3xl text-xl m-4 uppercase md:text-center`}
                >
                  Hello from Brian
                </div>
                <div class="">
                  I am so excited to work with you! I have been a part of the
                  Atlanta musical theatre and opera scenes for over seven years,
                  and I am so happy to be a part of this vibrant and diverse
                  community of artists. I work mainly as a vocal coach, music
                  director, and pianist, but I also like to perform as a singer.
                </div>
                <div class="mt-4">
                  Please let me know how I can be of assistance to you in your
                  company or you as a performer. As a performer, I will meet you
                  at your level and will help you find your most authentic
                  presentation. Looking forward to helping you take it to the
                  next level!
                </div>
                <div class="mt-4">
                  I coach out of my home in Woodstock, but I am willing to come
                  to you! I can’t wait!
                </div>
                <div class="m-4 text-lg">- Brian</div>
              </div>

              <div
                class={`font-bold text-red-900  md:text-3xl text-xl mt-8 mb-4 uppercase ${music} block sm:hidden`}
              >
                Vocal Coaching
              </div>
              <div class={`w-full ${vocal}`}>

              <div className="float-right object-contain w-1/2 mb-4 ml-4 sm:w-1/3 lg:w-1/4">

                <img
                  src={VC1}
                  className="object-cover w-full aspect-square"
                  alt="splash"
                />
              </div>

              <div class={`${vocal} `}>
                <div class={`${vocal} `}>
                  Brian is an experienced dramatic coach of both musical theatre
                  and opera. He is an accomplished pianist and singer, having
                  performed various musical roles on stage. He is an avid
                  sight-reader of all styles of pop and musical theatre, and a
                  cabaret pianist. But most of all, he brings to coaching the
                  fact that he is a singer himself.
                </div>
                <div class="mt-6">
                  He loves to work with all levels of experience. In his
                  coachings, he seeks to help actors find the essence of their
                  work by digging deeply into characterization, exploring both
                  the text and the music, and allowing them to all work
                  seamlessly together. He will help you find your voice through
                  whatever the composer and lyricist gave us!
                </div>
                <div class="mt-6">
                  His goal is to give actors the tools they need so they can
                  make their singing authentic and impactful and their auditions
                  memorable and unique. He applies a variety of approaches,
                  structure, and helps you add your own personal stamp to your
                  auditions. He tailor-fits his coaching to meet individual
                  needs.{" "}
                </div>
                <div class="mt-6 ml-4">-Role preparation</div>
                <div class="mt-2 ml-4">-Audition prep/call-back prep</div>
                <div class="mt-2 ml-4">
                  -Building/changing/adapting your audition book
                </div>
                <div class="mt-2 ml-4">-Vocal lessons and tune-ups</div>
                <div class="mt-6">
                  <iframe
                    className="w-full max-w-xl aspect-video"
                    allowfullscreen="allowfullscreen"
                    src="https://www.youtube.com/embed/gGyxmJHXG_o"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              </div>

              <div
                class={`font-bold text-red-900  md:text-3xl text-xl mt-8 mb-4 uppercase ${music} block sm:hidden`}
              >
                Music Directing
              </div>


              <div class={`${music} `}>
              <div className={` ${music}float-left object-contain w-1/2 mb-4 ml-4 sm:w-1/3  mr-4`}>
                <img
                  src={LS}
                  className={` ${music} float-left object-cover object-left aspect-square w-full inline-block`}
                  alt="Music"
                />
              </div>
                <div class="">
                  Brian has music directed over 70 productions in many styles,
                  and has coordinated, music-directed and staged numerous themed
                  cabarets. He is comfortable working with a variety of
                  different types of actors, from non-singers to Broadway
                  performers.
                </div>
                <div class="mt-6">
                  He most recently coached the cast of HBOMax's Doom Patrol, the
                  cast of the ABBA/Bee Gees Revue at The Strand Theatre, music
                  directed at Stagedoor Manor, a production of Rent at Vanguard
                  Theatre, and is a regular music director at The Marietta
                  Theatre Company.
                </div>
                <div class="mt-6">
                  He has worked with a number of professional companies and
                  summer theatre programs, college BFA programs and has
                  extensive experience directing and working with high school
                  summer intensives. He is interested in continuing to connect
                  with Atlanta area theatres in need of a passionate, dedicated,
                  team-oriented music directors.
                </div>
                <div class="mt-4">
                  Brian loves collaborating with dedicated directors, producers
                  and crew from the audition/call back process to opening night.
                  Having worked with a numbers of pit orchestras or various
                  sizes, he can accommodate your theatre with the resources you
                  have available. He can also help arrange instrumental parts to
                  adjust to a specific number of players, in addition to cueing
                  from Cuelab and Mainstage software.
                </div>

                <div className="flex justify-start gap-4 mt-10 lg:mt-12">
                  <div className="w-full aspect-video">
                    <iframe
                      className="aspect-video w-full m-auto lg:h-[24rem] h-[16rem]"
                      allowfullscreen="allowfullscreen"
                      src="https://www.youtube.com/embed/0-F9KaY-aKs"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <div className="w-full aspect-video">
                    <iframe
                      className="aspect-video w-full mt-8 md:mt-0 m-auto lg:h-[24rem] h-[16rem]"
                      allowfullscreen="allowfullscreen"
                      src="https://www.youtube.com/embed/mN41Cqb12d0?start=37"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div class={`${audition} sm:grid sm:grid-cols-3 gap-6 mt-6`}>
                <div class={`${audition}`}>
                  <div class="font-bold text-center text-red-900  md:text-xl text-lg mt-6 mb-4 uppercase">
                    audition pianist
                  </div>
                  <img
                    src={VC2}
                    className={`p-4 sm:w-full mx-auto w-full max-w-[24rem] lg:h-[24rem] sm:h-64 h-[24rem] sm:object-left object-center object-cover`}
                    alt="audition"
                  />
                  <div class="mt-4 p-4">
                    Brian is available for work as audition pianist for musical
                    theatre, pop, and opera. He has played for countless
                    auditions for twenty-five years. He is comfortable reading
                    from sheet music, cuts, iPad, chord charts and simple
                    modulations.
                  </div>
                </div>

                <div class={`${audition}`}>
                  <div class="font-bold text-center text-red-900  md:text-xl text-lg mt-6 mb-4 uppercase">
                    Pit Keyboardist
                  </div>
                  <img
                    src={BrianHarp}
                    className={`p-4 w-full mx-auto max-w-[24rem] lg:h-[24rem] sm:h-64 h-[24rem] object-left object-cover`}
                    alt="audition"
                  />
                  <div class="mt-4 p-4">
                    Brian is an experienced pit keyboardist, having worked in a
                    number of professional musical theatre pit orchestras. He
                    has experience working with Mainstage and click-tracks, and
                    has also worked as a sub pianist for pit work.
                  </div>
                </div>

                <div class={`${audition}`}>
                  <div class="font-bold text-center text-red-900  md:text-xl text-lg mt-6 mb-4 uppercase">
                    Rehearsal/Cabaret Pianist
                  </div>
                  <img
                    src={BrainPiano}
                    className={`p-4 sm:w-full mx-auto w-[24rem] lg:h-[24rem] sm:h-64 h-[24rem] object-right object-cover`}
                    alt="audition"
                  />
                  <div class="mt-4 p-4">
                    Brian has a vast knowledge of all genres of musical theatre
                    and opera. He often serves as audition pianist for Atlanta
                    theatre companies and Georgia State Opera. He is available
                    to prepare call-back musical sides, and can manage a singing
                    call-back audition easily. He has arranged and directed
                    various themed cabaret performances, and loves collaborating
                    with others on such projects.
                  </div>
                </div>
              </div>

              <div
                class={`${resume} transition ease-out duration-300 delay-150 w-full`}
              >
                <div className="w-full">
                  <div>
                    <img
                      src={pic16}
                      className={`p-4 mx-auto w-full max-w-lg aspect-square object-top object-cover`}
                      alt="audition"
                    />
                  </div>

                  <div class="flex justify-evenly w-full flex-wrap items-center gap-4 mt-8">
                    <div>
                      <a
                        href={RM}
                        className="px-5 py-3 font-bold transition duration-300 ease-out delay-150 bg-blue-200 rounded cursor-pointer hover:text-blue-700 hover:scale-105"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Resume
                      </a>
                    </div>
                    <div>
                      <a
                        href={CV}
                        className="px-5 py-3 font-bold transition-all duration-300 ease-out delay-150 bg-blue-200 rounded cursor-pointer hover:scale-105 hover:text-blue-700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download Curriculum Vita
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <Element name="about" class="bg-gray-100 pb-12 w-full" >
      <div class="max-w-7xl mx-auto w-full">
        <div class="pt-12 mb-12 w-full sm:flex sm:justify-between">
          <div className="flex pr-8 text-sm text-gray-600 justify-evenly text-md pointer sm:text-md">
            {renderedItems}
          </div>
        </div>

        {renderedContent}
      </div>
    </Element>
  );
};

export default About;
