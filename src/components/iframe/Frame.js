import Iframe from 'react-iframe';
import "./iframe.css";
const Frame = () => {
    const myFunction = () => {
        var x = document.getElementById("myId").src;
        console.log(x)
        console.log ("Its keeps show the url we initialize Because iFrame do not allow you to access the data from the website you are browsing through  it ):  ")
      }
  return <div class= "frame">
      <h3 >     iFrame Component</h3>
      <button class="button" onClick={myFunction} > Get the current Url</button>
      <br />
        <br />
<Iframe url="http://www.daraz.pk"
        width="1200px"
        height="800px"
        id="myId"
        className="myClassname"
        display="initial"
        position="centre"/>
      
    
    </div>
}
export default Frame;