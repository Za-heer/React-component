import React from "react";
import "./App.css";

import Card from "./components/card";
import Disc from "./components/disc";
import Footer from "./components/footer";
import Graph from "./components/graph";
import Images from "./components/images";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <Images />
        </div>
        <div className="container">
          <div className="container cardRisponsive d-flex justify-content-around">
            <Card
              title="Services"
              icons={<i className="bi bi-tools"></i>}
              heading="Suspendisse Sollicitudin"
              cards="Duis vitae semper turpis"
              para1="Sodales formentum"
              para2="Qquam integer"
              para3="Nibh arcu"
            />
            <Card
              title="Shared Files"
              icons={<i className="bi bi-folder-fill"></i>}
              heading="Tempus Sapien"
              cards="Nunc vestilubem libero"
              para1="Sed aliqum"
              para2="Nese aeneum"
              para3="Faucibus eu"
            />
            <Card
              title="List & Subscribers"
              icons={<i className="bi bi-book-half"></i>}
              heading="Aliquam Massa"
              cards="Nam at rhoncus odio"
              para1="Varius sit amet"
              para2="Cursus lacinia"
              para3="Metus phasellus"
            />
            <Card
              title="Videos & Photos"
              icons={<i className="bi bi-camera-fill"></i>}
              heading="Magna Consecteture"
              cards="Integer risus sem maximus"
              para1="Cras lectus"
              para2="Commodo mauris"
              para3="Sapien consequat"
            />
          </div>
        </div>
        <div className="container card-disc">
          <div className="d-flex">
            <Disc
              title1="Committed to Our"
              title2="Clients"
              paraAll="Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores, eligendi ullam qui tempore, enim sint
        corrupti adipisci facere sunt quisquam expedita nisi nesciunt
        tempora accusantium et voluptatem ex iste magnam?"
            />
            <Disc
              title1="The Bottom Line"
              title2="Solutions"
              paraAll="Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores, eligendi ullam qui tempore, enim sint
        corrupti adipisci facere sunt quisquam expedita nisi nesciunt
        tempora accusantium et voluptatem ex iste magnam?"
            />
            <Graph />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
