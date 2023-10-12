import logo from './logo.svg';
import './App.css';
import Header from './Compoent/Heading/Header';
import Search from './Compoent/SearchBar/Search';
import Loading from './Compoent/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Compoent/Card/Card';
import getData from './Store/async';
import { useEffect } from 'react';

function App() {
  const data=useSelector((state)=>state.data)
  const dipatch=useDispatch()
  console.log(data)
  useEffect(()=>{
    dipatch(getData('http://robo-sqlinjection-backend-production.up.railway.app/'))
  },[])
  
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <div className='products'>
        <h5>Products</h5>
      </div>
      <div className='line'></div>
      {data.loading?<Loading></Loading>:(data.error?<span>error</span>:<div className='cardsddiv'>{data.data.map((i,k)=><Card name={data.data[k].name} price={data.data[k].price} img={data.data[k].img}></Card>)}</div>)}
     
    </div>
  );
}

export default App;
