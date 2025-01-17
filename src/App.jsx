import { useState } from 'react';
import data from './data';
import List from './list';
const App = () => {
  const [people, setPeople] = useState(data);
  console.log(data);

  return (
    <main>
      <section className='container'>
        <h2>{people.length} birthdays</h2>
        <List people={people} />
        <button className='btn btn-block' onClick={() => setPeople([])}>
          clear people
        </button>
      </section>
    </main>
  );
};
export default App;
