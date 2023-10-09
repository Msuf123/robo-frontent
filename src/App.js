import logo from './logo.svg';
import './App.css';
import Header from './Compoent/Heading/Header';
import Search from './Compoent/SearchBar/Search';
import Loading from './Compoent/Loading/Loading';
import { useSelector } from 'react-redux';
import Card from './Compoent/Card/Card';

function App() {
  const data=useSelector((state)=>state.data)
  console.log(data)
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      
      {data.loading?<Loading></Loading>:<Card></Card>}
      <Card name={'ok'} price={12} dilivery={12}></Card>
      
    </div>
  );
}

export default App;
