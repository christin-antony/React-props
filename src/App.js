
import './App.css';
import Header from './components/Header';
import image1 from './components/image/1.jpg'
import image2 from './components/image/2.jpg'
import image3 from './components/image/3.jpg'
import image4 from './components/image/4.jpg'
import image5 from './components/image/5.jpg'
import image6 from './components/image/6.jpg'

function App() {
  const data =
[ {name:"Pasta",price:"price:3000",image:image1},{name:"Dosa",price:"price:4000",image:image2},{name:"Bagel",price:"price: 4000",image:image3}]
const data1 =
[ {name:"Biryani",price:"price:3000",image:image4},{name:"Salad",price:"price:5000",image:image5},{name:"Bacon",price:"price:6000",image:image6}]


  return (
    <div className="App">
      <Header data= {data} data1={data1}/>
      
     
    </div>
  );
}

export default App;
