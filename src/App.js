import Landscape from './components/Landscape.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Best places to visit around the World</h1>
        <Landscape 
          name="Cancún"
          location="Mexico"
          description="Cancún has a tropical climate, specifically a tropical wet and dry climate (Köppen Aw), with little temperature difference between months, but pronounced rainy and dry seasons. The city is hot year-round, and moderated by onshore trade winds, with an annual mean temperature of 27.1 °C (80.8 °F)."
          image="mexico"
        />
        <Landscape 
          name="Pão de Açúcar"
          location="Brazil"
          description="This peak is one of the most striking among the several monolithic granite mounds that rise directly from the sea's edge in Rio de Janeiro. A coffered glass cable car called Sugar Loaf bondinho in popular Portuguese, with a capacity for 65 passengers, travels a 1,401-meter route between the Babilonia and Urca hills every five minutes. The original cable car line was built in 1912."
          image="brazil"
        />
        <Landscape 
          name="Everest"
          location="Nepal"
          description="Mount Everest is a peak in the Himalaya mountain range. It is located between Nepal and Tibet, an autonomous region of China. At 8,849 meters (29,032 feet), it is considered the tallest point on Earth. In the nineteenth century, the mountain was named after George Everest, a former Surveyor General of India."
          image="everest"
        />
        <Landscape 
          name="Machu Picchu"
          location="Peru"
          description="Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain range. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco."
          image="peru"
        />
      </div>
    </div>
  );
}

export default App;
