import React,{useEffect,useState} from 'react';
import sign from './images/Person 1.png';
import back from './images/Shape 2.png';
import shape7 from './images/shape7.png';
import shape1 from './images/shape 1.png';
import C from './images/C.png';
import html from './images/53.png';
import Time from './images/Time.png';
import person from './images/Person.png';
import js from './images/JS.png';
import js2 from './images/course5.png';
import react from './images/react.png';
import footer from './images/footer.png';
import logo from './images/logo.png'
import shape3 from './images/shape 3.png';
import shape4 from './images/Shape 4.png';
import $ from 'jquery'

function Site(){
  const [size,setSize]= useState([window.innerWidth]);
  useEffect(() => {
    const handleresize=()=>{
        setSize([window.innerWidth]);
    };
    window.addEventListener("resize",handleresize);
    if (size < 576) {
      $('.gg').css('display','none')
      $('.ma').css('marginTop','100px')
      $('#ff').css('display','block')
      $('#fg').css('display','block')
      $('.ti').css('visibility','visible')
      
    }
    if (size > 576) {
      $('.ma').css('marginTop','170px')
      $('.gg').css('display','block')
      $('#ff').css('display','none')
      $('#fg').css('display','none')
      $('.ti').css('visibility','hidden')
    }
  return ()=>{
    window.removeEventListener("resize",handleresize);
};


}, [size]);

return(
    <div>
    <nav class="navbar  navbar-expand-lg navbar-light  fixed-top p-0" style={{backgroundColor:'white'}}>
        <a class="navbar-brand" href="#" style={{marginLeft:'2rem'}}><img src={logo} width="118px" height="40px" alt="..."/></a>
        <img src={sign} class="rounded-circle" id='ff' alt="..." style={{height:'50px',width:'50px',display:'None',marginLeft:'70px'}}/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
        <div class=" navbar-collapse collapse" id="navbarNav">
            <ul class="navbar-nav  ml-auto mt-1" style={{marginRight:'15rem'}}>
                <li class="nav-item active p-2">
                    <a class="nav-link" href="/#">About Us <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item active p-2">
                    <a class="nav-link" href="/#advantages">Contact Us</a>
                </li>
                <li class="nav-item active p-2">
                    <a class="nav-link" href="/#features">Courses</a>
                </li>
                <li class="nav-item active p-2">
                    <a class="nav-link" href="/#features">Mentors</a>
                </li>
                <form class="form-group p-2" method='get' action='/search'  style={{display:'block',marginLeft:'auto',marginRight: 'auto'}}>
                       <div class="input-group">
                        <input class="form-control" style={{border:'None',backgroundColor:'#FBB03B',color:'white',borderRadius:'15px 0 0 15px'}} type="search" name="search" id="search" placeholder="Search" aria-label="Search" />
                        <div class="input-group-prepend mt-2">
                            <button id="button-addon2" type="submit" class="btn" style={{borderRadius: '0px 15px 15px 0',marginTop:'-8px',backgroundColor:'#FBB03B',color:'white'}}>
                              <i class="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
           <img src={sign} class="rounded-circle ml-3 gg" alt="..." style={{height:'50px',width:'50px'}}/>
            </ul>
        </div>
    </nav>
    <img src={shape3} alt="..." className='float-right gg' style={{height:'180px',width:'100px',marginTop:'-100px'}} />
    <img src={shape4} alt="..." className='float-left gg' style={{height:'60px',width:'60px',marginTop:'270px',marginLeft:'120px'}} />
  <main role="main" class="container ma" style={{marginTop:'170px'}}>
  <div class="row">
    <div class="col-lg-8 col-md-8 col-sm-8 col-12 blog-main">
    <div class="card w-100">
  <div class="card-body">
    <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-4 col-7'>
      <img src={back} className='' alt="..." style={{backgroundColor:'white', position:'absolute',height:'152px',width:'158px',top:'-8px'}} />
      <img src={sign} class="rounded-circle" alt="..." style={{position:'absolute',height:'136px',width:'138px'}} />
      </div>
      <div className='col-lg-8 col-md-8 col-sm-8 col-5'>
        <div className='row'>
        <div className='col-lg-8 col-md-8 col-sm-8 col-12 order-3'>
      <h4 class="card-title mt-2">Remus Lupin </h4></div>
      <div className='col-lg-4 col-md-4 col-sm-4 col-12 order-2 order-md-12'>
      <button type="button" class="btn btn-outline-dark float-right">Edit Profile</button>
      </div>
      </div>
      <p>JEE Aspirant <div id='fg' style={{display:'None'}}><div className='row mt-2 ml-2' style={{fontSize:'10px'}}><i class="fab fa-facebook fa-2x mr-lg-3 mr-2 hover-fb"></i>
      <i class="fab fa-instagram fa-2x mr-lg-3 mr-2 hover-insta"></i>
      <i class="fab fa-twitter fa-2x mr-lg-3 mr-2 hover-twitter"></i></div></div></p>
      </div>
      </div>
      <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-4 col-8 gg'>
      <div className='row ml-2' style={{marginTop:'100px'}}><i class="fab fa-facebook fa-2x mr-lg-3 mr-2 hover-fb"></i>
      <i class="fab fa-instagram fa-2x mr-lg-3 mr-2 hover-insta"></i>
      <i class="fab fa-twitter fa-2x mr-lg-3 mr-2 hover-twitter"></i></div>
        </div>
      <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
      <span class="badge badge-pill badge-light">JEE</span>
      <span class="badge badge-pill badge-light">Thermodyamics</span>
      <span class="badge badge-pill badge-light">Calcus</span>
      <span class="badge badge-pill badge-light">Mechanics</span>
      <span class="badge badge-pill badge-light">Btech</span>
      <span class="badge badge-pill badge-light">Organic</span>
      <span class="badge badge-pill badge-light">CSE</span>
      <span class="badge badge-pill badge-light">ECE</span>
      <span class="badge badge-pill badge-light">Programming</span>
      <span class="badge badge-pill badge-light">Java</span>
      <span class="badge badge-pill badge-light">c++</span>
      <span class="badge badge-pill badge-light">Python</span>
      <span class="badge badge-pill badge-light">PHP</span>
      <span class="badge badge-pill badge-light">Linux</span>
      <span class="badge badge-pill badge-light">Ubuntu</span>
      <span class="badge badge-pill badge-light">Aws</span>

      <hr></hr>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, turpis cras in pellentesque at blandit velit. Magna at lobortis lacus, ultricies in vel morbi adipiscing. Nibh purus a sollicitudin scelerisque. Integer eget dui orci, dis tellus.</p>
      </div>
    </div>
  </div>
</div>
<div class="card w-100 mt-4">
  <div class="card-body">
  <h2> <img src={shape7}  alt="..." style={{height:'32px',width:'32px'}}/> Upcoming Classes</h2>
  <br></br>
  <div style={{width: '100%', height:'20px', borderBottom:'1px solid black', textAlign:'left'}}>
  <span style={{fontSize: '20px', backgroundColor: 'white',padding:'0 10px'}}>
    Today
  </span>
</div>
<div className='row mt-5'>
  <div className='col-lg-3 col-md-3 col-sm-3 col-5'>
  <img src={C}  alt="..." className='w-100' style={{borderRadius:'10px',width:'100px',height:'100px'}}/> 
  </div>
  <div className='col-lg-9 col-md-9 col-sm-9 col-7'>
    <div className='row'>
      <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
      <h5 style={{fontSize:'19.8px'}}>Lorem ipsum sit</h5>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-4 col-12 gg'>
      <span class="badge badge-pill badge-danger" style={{background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>4:00-6:00 PM</span>
      </div>
    </div>
    <div className='row' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. </div>
    <div class='row'>
      <div className='col-lg-9 col-md-9 col-sm-9 col-5 ti' style={{visibility:'hidden'}}>
      <span class="badge badge-pill badge-danger" style={{fontSize:'7.9px',background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>4:00-6:00 PM</span>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-7'>
      <span><button type="button" class="btn btn-primary " style={{fontSize:'12.9px'}}>Join Now</button></span>
      </div>
      </div>
  
  </div>
</div>
<div className='row mt-5'>
  <div className='col-lg-3 col-md-3 col-sm-3 col-5'>
  <img src={html}  alt="..." className='w-100' style={{borderRadius:'10px',width:'100px',height:'100px'}}/> 
  </div>
  <div className='col-lg-9 col-md-9 col-sm-9 col-7'>
    <div className='row'>
      <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
      <h5 style={{fontSize:'19.8px'}}>Lorem ipsum sit</h5>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-4 col-12 gg'>
      <span class="badge badge-pill badge-danger" style={{background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>8:00-9:00 PM</span>
      </div>
    </div>
    <div className='row' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. </div>
    <div class='row'>
      <div className='col-lg-9 col-md-9 col-sm-9 col-5 ti' style={{visibility:'hidden'}}>
      <span class="badge badge-pill badge-danger" style={{fontSize:'7.9px',background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>8:00-9:00 PM</span>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-7'>
      <span><button type="button" class="btn btn-primary " style={{fontSize:'12.9px'}} disabled>Join Now</button></span>
      </div>
      </div>
  
  </div>
</div>
  <div style={{width: '100%', height:'20px', borderBottom:'1px solid black', textAlign:'left'}}>
  <span style={{fontSize: '20px', backgroundColor: 'white',padding:'0 10px'}}>
  16/09/21
  </span>
</div>
<div className='row mt-5'>
  <div className='col-lg-3 col-md-3 col-sm-3 col-5'>
  <img src={C}  alt="..." className='w-100' style={{borderRadius:'10px',width:'100px',height:'100px'}}/> 
  </div>
  <div className='col-lg-9 col-md-9 col-sm-9 col-7'>
    <div className='row'>
      <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
      <h5 style={{fontSize:'19.8px'}}>Lorem ipsum sit</h5>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-4 col-12 gg'>
      <span class="badge badge-pill badge-danger" style={{background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>4:00-6:00 PM</span>
      </div>
    </div>
    <div className='row' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. </div>
    <div class='row'>
      <div className='col-lg-9 col-md-9 col-sm-9 col-5 ti' style={{visibility:'hidden'}}>
      <span class="badge badge-pill badge-danger" style={{fontSize:'7.9px',background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>4:00-6:00 PM</span>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-7'>
      <span><button type="button" class="btn btn-primary " style={{fontSize:'12.9px'}} disabled>Join Now</button></span>
      </div>
      </div>
  
  </div>
</div>
<div className='row mt-5'>
  <div className='col-lg-3 col-md-3 col-sm-3 col-5'>
  <img src={html}  alt="..." className='w-100' style={{borderRadius:'10px',width:'100px',height:'100px'}}/> 
  </div>
  <div className='col-lg-9 col-md-9 col-sm-9 col-7'>
    <div className='row'>
      <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
      <h5 style={{fontSize:'19.8px'}}>Lorem ipsum sit</h5>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-4 col-12 gg' >
      <span class="badge badge-pill badge-danger" style={{background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>8:00-9:00 PM</span>
      </div>
    </div>
    <div className='row' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. </div>
    <div class='row'>
      <div className='col-lg-9 col-md-9 col-sm-9 col-5 ti' style={{visibility:'hidden'}}>
      <span class="badge badge-pill badge-danger" style={{fontSize:'7.9px',background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>8:00-9:00 PM</span>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-7'>
      <span><button type="button" class="btn btn-primary " style={{fontSize:'12.9px'}} disabled>Join Now</button></span>
      </div>
      </div>
  
  </div>
</div>
<div className='row mt-5'>
  <div className='col-lg-3 col-md-3 col-sm-3 col-5'>
  <img src={C}  alt="..." className='w-100' style={{borderRadius:'10px',width:'100px',height:'100px'}}/> 
  </div>
  <div className='col-lg-9 col-md-9 col-sm-9 col-7'>
    <div className='row'>
      <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
      <h5 style={{fontSize:'19.8px'}}>Lorem ipsum sit</h5>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-4 col-12 gg'>
      <span class="badge badge-pill badge-danger" style={{background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>4:00-6:00 PM</span>
      </div>
    </div>
    <div className='row' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. </div>
    <div class='row'>
      <div className='col-lg-9 col-md-9 col-sm-9 col-5 ti' style={{visibility:'hidden'}}>
      <span class="badge badge-pill badge-danger" style={{fontSize:'7.9px',background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>4:00-6:00 PM</span>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-7'>
      <span><button type="button" class="btn btn-primary " style={{fontSize:'12.9px'}} disabled>Join Now</button></span>
      </div>
      </div>
  
  </div>
</div>
<div className='row mt-5'>
  <div className='col-lg-3 col-md-3 col-sm-3 col-5'>
  <img src={html}  alt="..." className='w-100' style={{borderRadius:'10px',width:'100px',height:'100px'}}/> 
  </div>
  <div className='col-lg-9 col-md-9 col-sm-9 col-7'>
    <div className='row'>
      <div className='col-lg-8 col-md-8 col-sm-8 col-12'>
      <h5 style={{fontSize:'19.8px'}}>Lorem ipsum sit</h5>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-4 col-12 gg'>
      <span class="badge badge-pill badge-danger" style={{background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>8:00-9:00 PM</span>
      </div>
    </div>
    <div className='row' style={{fontSize:'11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. </div>
    <div class='row'>
      <div className='col-lg-9 col-md-9 col-sm-9 col-5 ti' style={{visibility:'hidden'}}>
      <span class="badge badge-pill badge-danger" style={{fontSize:'7.9px',background:'linear-gradient(102.21deg, #FFAE0F 3.69%, #FD2CF5 102.03%)'}}><img src={Time}  alt="..." style={{height:'15px',width:'15px'}}/>8:00-9:00 PM</span>
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 col-7'>
      <span><button type="button" class="btn btn-primary " style={{fontSize:'12.9px'}} disabled>Join Now</button></span>
      </div>
      </div>
  
  </div>
</div>
</div>
</div>
 </div>
    <aside class="'col-lg-4 col-md-4 col-sm-4 col-12' blog-sidebar">
    <div class="card" style={{background:'radial-gradient(116.76% 600.99% at 2.14% 0%, #89DCFF 0%, #89FF95 100%)'}}>
  <div class="card-body">
    <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
      <img src={person} class="rounded-circle" alt="..." style={{position:'absolute',height:'85px',width:'85px'}} />
      </div>
      <div className='col-lg-8 col-md-8 col-sm-8 col-8'>
        <h4 style={{color:'white'}}>Ask Any Doubts</h4>
        <ul style={{color:'white'}}>
          <li>Talk to our mentors</li>
          <li>Get expert Guidence</li>
          <li>Talk to our mentors</li>
        </ul>
      </div>
    </div>
<button type="button" class="btn btn-outline-light btn-lg btn-block p-0">Book Your Free Mentorship Session Now!</button>
  </div>
</div>
<div class="card w-100 mt-4">
  <div class="card-body">
  <h2> <img src={shape1}  alt="..." style={{height:'32px',width:'32px'}}/> My Courses</h2>
  <br></br>
  
<div className='row mt-5'>
  <div className='col-lg-7 col-md-7 col-sm-7 col-7'>
  <img src={js}  alt="..." className='w-100' style={{height:'100px', width:'100px'}}/> 
  </div>
<div className='col-lg-5 col-md-5 col-sm-5 col-5'>
<div className='row' style={{fontSize:'10px'}}>
  <h5 style={{fontSize:'17.8px'}}>Lorem ipsum sit</h5>
  </div>
    <div className='row' style={{fontSize:'10px'}}>
Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
<br>
   </br>
   <span style={{color:'#FCEE21',fontSize:'20px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>  </div>
</div>
</div>
<div className='row mt-5'>
  <div className='col-lg-7 col-md-7 col-sm-7 col-7'>
  <img src={js2}  alt="..." className='w-100' style={{height:'100px', width:'100px'}}/> 
  </div>
<div className='col-lg-5 col-md-5 col-sm-5 col-5'>
<div className='row' style={{fontSize:'10px'}}>
  <h5 style={{fontSize:'17.8px'}}>Lorem ipsum sit</h5>
  </div>
    <div className='row' style={{fontSize:'10px'}}>
Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
<br>
   </br>
   <span style={{color:'#FCEE21',fontSize:'20px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>  </div>
</div>
</div>
<div className='row mt-5'>
  <div className='col-lg-7 col-md-7 col-sm-7 col-7'>
  <img src={react}  alt="..." className='w-100' style={{height:'100px', width:'100px'}}/> 
  </div>
<div className='col-lg-5 col-md-5 col-sm-5 col-5'>
<div className='row' style={{fontSize:'10px'}}>
  <h5 style={{fontSize:'17.8px'}}>Lorem ipsum sit</h5>
  </div>
    <div className='row' style={{fontSize:'10px'}}>
Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
<br>
   </br>
   <span style={{color:'#FCEE21',fontSize:'20px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>  </div>
</div>
</div>
<div className='row mt-5'>
  <div className='col-lg-7 col-md-7 col-sm-7 col-7'>
  <img src={html}  alt="..." className='w-100' style={{height:'100px', width:'100px'}}/> 
  </div>
<div className='col-lg-5 col-md-5 col-sm-5 col-5'>
<div className='row' style={{fontSize:'10px'}}>
  <h5 style={{fontSize:'17.8px'}}>Lorem ipsum sit</h5>
  </div>
    <div className='row' style={{fontSize:'10px'}}>
Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
<br>
   </br>
   <span style={{color:'#FCEE21',fontSize:'20px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>  </div>
</div>
</div>
<div className='row mt-5'>
  <div className='col-lg-7 col-md-7 col-sm-7 col-7'>
  <img src={C}  alt="..." className='w-100' style={{height:'100px', width:'100px'}}/> 
  </div>
<div className='col-lg-5 col-md-5 col-sm-5 col-5'>
<div className='row' style={{fontSize:'10px'}}>
  <h5 style={{fontSize:'17.8px'}}>Lorem ipsum sit</h5>
  </div>
    <div className='row' style={{fontSize:'10px'}}>
Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,
<br>
   </br>
   <span style={{color:'#FCEE21',fontSize:'20px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>  </div>
</div>
</div>
</div>
</div>
    </aside>
  </div>
  </main>
  <img src={shape3} alt="..." className='float-left gg' style={{height:'180px',width:'100px',marginTop:'-140px'}} />
  <img src={footer}  alt="..." className='w-100'/>
    </div>
    
);

}
export default Site;