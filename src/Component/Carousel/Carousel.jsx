import './Carousel.css';
const Carousel = () => {
  return (
    <div>
<div className="carousel w-screen height">
  <div id="item1" className="carousel-item w-full height">
    <img src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full height">
    <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full height">
    <img src="https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full height">
    <img src="https://images.pexels.com/photos/62389/pexels-photo-62389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
      
    </div>
  );
};

export default Carousel;