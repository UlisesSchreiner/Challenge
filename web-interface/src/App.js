import React, { useEffect, useState } from "react";
import './App.css';
import api from './logic/api';
import Rate from './components/Rate';
import NewRateCard from './components/NewRateCard';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [ratesList, setRatesList] = useState([]);

  // Get Rates list
  function refreshRatesFromApi() {
    api.getRates().then(data => {
      setRatesList(data);
    });
  }

  useEffect(() => {

    refreshRatesFromApi();

  }, []);


  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col-8">
          <div className="card">
            <div className="card-header">
              Rates List
           </div>
            <div className="card-body">
              <div className="row overflow-auto" style={{ 'maxHeight': '75vh' }}>
                {
                  ratesList.map(rate => <Rate rate={rate} key={rate._id} />)
                }
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          {
            <NewRateCard refreshRatesFromApi={refreshRatesFromApi} />
          }
        </div>

      </div>
    </div>
  );
}

export default App;
