import ListGroup from './components/ListGroup';

function App() {
  let items = ["New York","Los Angeles","Chicago","Houston","Philadelphia","Phoenix",];
  let colors = ["red","blue","green","yellow","orange","purple",];
  return <div><ListGroup items={items} heading ="Cities" /></div>
}

export default App;