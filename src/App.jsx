import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLastRoutes } from './actions/actionsCreators';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './css/reset.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLastRoutes());
  }, [dispatch]);

  // fetch(
  //   'https://netology-trainbooking.netoservices.ru/routes/cities?name=санкт'
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  // fetch(
  //   'https://netology-trainbooking.netoservices.ru/routes?from_city_id=63329d7b591d1e00467e8a30&to_city_id=63329d7b591d1e00467e8a31'
  // ).then((response) =>
  //   response.json().then((data) => {
  //     console.log('routes', data);
  //   })
  // );
  const getLast = async () => {
    let response = await fetch(
      'https://netology-trainbooking.netoservices.ru/routes/last'
    );

    const reader = response.body.getReader();

    // Step 2: get total length
    const contentLength = +response.headers.get('Content-Length');

    // Step 3: read the data
    let receivedLength = 0; // received that many bytes at the moment
    let chunks = []; // array of received binary chunks (comprises the body)
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
      receivedLength += value.length;

      console.log(`Received ${receivedLength} of ${contentLength}`);
    }

    // Step 4: concatenate chunks into single Uint8Array
    let chunksAll = new Uint8Array(receivedLength); // (4.1)
    let position = 0;
    for (let chunk of chunks) {
      chunksAll.set(chunk, position); // (4.2)
      position += chunk.length;
    }

    // Step 5: decode into a string
    let result = new TextDecoder('utf-8').decode(chunksAll);

    // We're done!
    let commits = JSON.parse(result);
    console.log(commits);
  };
  // getLast();

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
