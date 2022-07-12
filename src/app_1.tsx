import * as React from 'react';
import './style.css';

const App = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fav_color, setFavColor] = React.useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clear = () => {
    setName('');
    setAge('');
    setFavColor('');
  };

  return (
    <div className="pa-4">
      <div className="d-flex v-center h-center">
        <div className="w-50">
          <h2>Fill the Form!</h2>
          <form onSubmit={onSubmit}>
            <div className="pa-1">
              <div>
                <label>Name</label>
              </div>
              <input
                className="my-input full-width"
                type="text"
                name="name"
                placeholder="Enter Name"
              />
            </div>

            <div className="pa-1">
              <div>
                <label>Age</label>
              </div>
              <input
                className="my-input full-width"
                type="text"
                name="age"
                placeholder="Age"
              />
            </div>

            <div className="pa-1">
              <div>
                <label>Favourite color</label>
              </div>
              <select name="fav_color" className="my-input full-width">
                {[
                  'red',
                  'green',
                  'blue',
                  'yellow',
                  'orange',
                  'pink',
                  'cyan',
                  'grey',
                  'black',
                  'white',
                  'skyblue',
                ].map((color, index) => (
                  <option value={color} key={color + index}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div className="pa-1">
              <button type="submit" className="primary full-width">
                Submit
              </button>
              <button onClick={clear} className="secondary full-width">
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className="w-50 pa-4">
          <p className="special-text">
            Sandeep is 29 years old, and he likes Skyblue color.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
