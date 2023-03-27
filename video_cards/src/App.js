import { useState,useEffect } from 'react';
import axios from "axios";
import './App.css';

//components
import CreateForm from './components/createform';
import Modal from './components/model';
import Card from './components/card';

function App() {
  const [cards, setCards] = useState([]);
  const [buckets, setBuckets] = useState([]);
  const [modalData, setModalData] = useState(null);
  //initial renders
  useEffect(() => {
    axios.get("http://localhost:3000/cards").then((response) => {
      setCards(response.data);
    });
  }, []);
  useEffect(() => {
    const uniqueBuckets = [...new Set(cards.map(card => card.bucket))];
    setBuckets(uniqueBuckets);
  }, [cards]);



  //handler fuctions
  const handleCardClick = (data) => {
    setModalData(data);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="App">
      <CreateForm/>
      <h1>My Cards</h1>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} data={card} onCardClick={handleCardClick} />
        ))}
      </div>
      {modalData && <Modal data={modalData} onClose={handleCloseModal} />}
   


    </div>
  );
}

export default App;
