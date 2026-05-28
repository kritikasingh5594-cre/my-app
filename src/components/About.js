import React, {useState} from 'react'

export default function About() {
   const [mystyle,setmystyle] = useState(
    {
        color:'black',
        backgroundColor:'white'
    })
    const [btntext, setBtntext]= useState("Enable light Mode")
const togglestyle = ()=>{
   if(mystyle.color === 'black'){
    setmystyle({
        
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'

    })
    setBtntext("Enable Dark Mode")
   }
   else{
     setmystyle({
        
        color:'black',
        backgroundColor:'white'
    })
    setBtntext("Enable Light Mode");
   }
}
  return (
    <div className="container" style={mystyle}>
        <h1 className="my-3">About us</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button>
</div>
    </div>
  )
}
