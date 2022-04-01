import Alert from "./components/Alert/Alert";
import Example from "./components/Example/Example";
import Math from "./components/Math/Math";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {

  // const example1 = ["apple", "red", "big"];

  // const [name, color, size] = example1;

  // const example2 = ["toyota", "camry", "black", "expensive"];

  // const [name2, mark, color2, price] = example2;


  // const example3 = { fruit: "apple", fruitcolor: "red", quality: "ripe", };


  // const { fruit, fruitcolor, quality} = example3;


  // <div>
  //     this {name} is {color} and {size}.
  //     </div>

  //   <div>
  //     this {name2} {mark} is {color2} and {price}.
  //   </div>


  //   <div>
  //     this {fruit} is {fruitcolor} and {quality}
  //   </div>



  return (

    <div className="App">
      
      <div>
        <Paragraph size="22px" color="green">
          hello world
        </Paragraph>
      </div>


      <div>
        <Alert>
        
        </Alert>
      </div>


        <br/>
        <br/>
        <br/>
        <br/>
      <div>
        <Example/>
      </div>

        <br/>
        <br/>
        <br/>

      <div>
        <Math/>
      </div>
    </div>
  );
}

export default App;
