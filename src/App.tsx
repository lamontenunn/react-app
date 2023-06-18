import ListGroup from './components/ListGroup';

function App() {
  let items = ["New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix",];
  let colors = ["red","blue","green","yellow","orange","purple",];
  let names = ["John","Paul","George","Ringo",];
  return <div><ListGroup items={names} heading ="Cities" /></div>
}

export default App;