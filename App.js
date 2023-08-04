//import Stack from 'react-bootstrap/Stack';
import React from 'react';
import PokemonList from './PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='container'>
      <PokemonList />
    </div>
  );
};

export default App


// function HorizontalExample() {
//   return (
//     <Stack direction="horizontal" gap={3}>
//       <div className="p-2">First item</div>
//       <div className="p-2">Second item</div>
//       <div className="p-2">Third item</div>
//     </Stack>
//   );
// }

// export default HorizontalExample;