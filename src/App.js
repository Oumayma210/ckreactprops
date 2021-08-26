import './App.css';
import {product} from './data'
import Profilecomponent from './Profile/Profilecomponent';
function App() {
  return (
      <div className="App">
        {product.map(el => <Profilecomponent  fullName={el.fullName} bio={el.bio} profession={el.profession}><img src='./ouma.jpg' alt='oumayma' width='250px' height='250px' style={{border:'1px solid black', borderRadius:'150px'}}/></Profilecomponent>)}
      </div>
  );
};
export default App;
