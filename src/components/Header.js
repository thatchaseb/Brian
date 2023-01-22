import React from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);

    this.state = {
        menuOpen: false,
    };
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToTopM() {
    if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })}
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 2000,

      smooth: 'easeInOutQuart',
      offset: 500
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleMenuClick = () => {
     if (this.state.menuOpen === false) {this.setState({ menuOpen: true })} else {this.setState({ menuOpen: false })} 
  }


  render() {
    return (
      <div>
        <div class="fixed w-screen z-20">
          <div class="p-4 bg-gray-100 flex justify-between">
            <div class="lg:grid grid-cols-2">
              <a to="/" className="text-navy lg:ml-2 text-2xl lg:text-4xl font-bold">
                Brian Osborne
              </a>
              <div class="italic lg:mt-3 lg:ml-3">
                Vocal Coach - Music Director - Pianist
              </div>
            </div>
            <div className="hidden delay-75 sm:flex text-kack-800 justify-evenly text-md cursor-pointer text-gray-600">
              <a to="/" onClick={this.scrollToTop} className="mx-2 lg:mt-3 mt-4 px-2  hover:text-blue-700 transition ease-out duration-300">Home</a>              
              <Link className=" delay-75 mx-2 lg:mt-3 mt-4 px-2  hover:text-blue-700 cursor-pointer transition ease-out duration-300" to="about" offset={-65} smooth={true} duration={800} >About</Link>
              <Link className="delay-75 mx-2 lg:mt-3 mt-4 px-2  hover:text-blue-700 cursor-pointer transition ease-out duration-300" to="media"  offset={-105} smooth={true} duration={800} >Media</Link>
              <Link className="mx-2 delay-75 lg:mt-3 mt-4 px-2 cursor-pointer hover:text-blue-700 transition ease-out duration-300" to="contact"  offset={-65} smooth={true} duration={800} >Contact</Link>
            </div>

            <div className="block sm:hidden mr-6 mt-2" onClick={this.handleMenuClick.bind()}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </div>


          </div>
        </div>

        <div style={{display: `${this.state.menuOpen ? 'block' : 'none'}`}} class="fixed w-48 z-20 bg-gray-100 border-solid border-gray-600 border-2 rounded right-4 top-28 ">
          <div class="w-3/4 mx-auto my-1 divide-y divide-dashed divide-gray-600">
            
            <div class="text-center w-full py-2 ">
              <Link onClick={this.handleMenuClick.bind()} className="w-full delay-75 mx-2 lg:mt-3 mt-4 px-2  hover:text-gray-400 cursor-pointer transition ease-out duration-300" to="home" offset={-65} smooth={true} duration={800} >Home</Link>
            </div>
            <div class="text-center py-2">
              <Link onClick={this.handleMenuClick.bind()} className="mx-2 lg:mt-3 mt-4 px-2  hover:text-gray-400 cursor-pointer transition delay-75 ease-out duration-300" to="about" offset={-65} smooth={true} duration={800} >About</Link>
            </div>
            <div class="text-center py-2">
              <Link onClick={this.handleMenuClick.bind()} className="mx-2 lg:mt-3 mt-4 px-2  hover:text-gray-400 cursor-pointer transition delay-75 ease-out duration-300" to="media"  offset={-105} smooth={true} duration={800} >Media</Link>
            </div>
            <div class="text-center py-2">
              <Link onClick={this.handleMenuClick.bind()} className="mx-2 lg:mt-3 mt-4 px-2 cursor-pointer hover:text-gray-400 transition ease-out delay-75 duration-300" to="contact"  offset={-65} smooth={true} duration={800} >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Header;
