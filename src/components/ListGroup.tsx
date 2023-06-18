import { useState } from "react";

// {items:[], header: string,}
interface Props {
    items: string[];
    heading: string;
}


function ListGroup({items, heading}: Props) {
  


  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
 // const [name, setName] = useState('');
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {setSelectedIndex(index); console.log(selectedIndex);} }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
