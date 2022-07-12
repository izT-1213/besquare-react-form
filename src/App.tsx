import * as React from 'react';
import './style.css';

export default function App () {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [fav_color, setFavColor] = React.useState('');
  const [gender, setGender] = React.useState('');

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFavColor(event.target.value);
  }

  const changeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, age, gender, fav_color);
  };

  const isMale = gender === 'male';

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
                value={name}
                onChange={changeName}
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
                value={age}
                onChange={changeAge}
              />
            </div>

            <div className="pa-1">
              <div>
                <label>Gender</label>
              </div>
              <select name="fav_color"
              className="my-input full-width"
              value = {gender}
              onChange = {changeGender}>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            <div className="pa-1">
              <div>
                <label>Favourite color</label>
              </div>
              <select name="fav_color"
              className="my-input full-width"
              value = {fav_color}
              onChange = {changeColor}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
                <option value="cyan">Cyan</option>
                <option value="grey">Grey</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="skyblue">Skyblue</option>
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
            {name} is {age} years old, and {isMale ? 'he' : 'she'} likes {fav_color} color.
          </p>
        </div>
      </div>
    </div>
  );
};
