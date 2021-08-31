// import logo from './logo.svg';
import './App.css';
import Developer from './components/Developer/Developer';

function App() {

  const infoDevs = [{name: 'Gabriel', age:19, country: 'Brasil' }, {name: 'Filipe', age:28, country:'Brasil'}, {name: 'Mariana', age:24 , country:'Itália'}]

  return (

    <div className="App">
      <div className="App-header">
       
      {
        infoDevs.map((item)=>(
          <Developer name = {item.name}age = {item.age} country = {item.country}/>
        ))
      }
      
      </div>
    </div>
  );
}

export default App;
