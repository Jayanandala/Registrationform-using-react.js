// App.js
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    occupation: '',
    gender: '',
    languages: [],
  });

  const onChangeHandler = (event) => {
    const { name, value, checked } = event.target;

    if (name === 'languages') {
      let copy = { ...formData };

      if (checked) {
        copy.languages.push(value);
      } else {
        copy.languages = copy.languages.filter((el) => el !== value);
      }

      setFormData(copy);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
            <div className="form-container"> {/* Container for the form */}

        <h2 className="center">Registration </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            name="username"
            onChange={onChangeHandler}
            value={formData.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            onChange={onChangeHandler}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">
            Occupation
          </label>
          <select
            className="form-select"
            name="occupation"
            onChange={onChangeHandler}
            value={formData.occupation}
          >
            <option value="">Select Occupation</option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <div>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={onChangeHandler}
                checked={formData.gender === 'male'}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={onChangeHandler}
                checked={formData.gender === 'female'}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={onChangeHandler}
                checked={formData.gender === 'other'}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Select Courses
          </label>
          
          <div>
            <div>
              <input
                type="checkbox"
                name="languages"
                value="Java"
                onChange={onChangeHandler}
                checked={formData.languages.indexOf('Java') !== -1}
              />
              <label htmlFor="Java">Java</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="languages"
                value="fullStack"
                onChange={onChangeHandler}
                checked={formData.languages.indexOf('fullstack') !== -1}
              />
              <label htmlFor="fullstack">FullStack</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="languages"
                value="javascript"
                onChange={onChangeHandler}
                checked={formData.languages.indexOf('javascript') !== -1}
              />
              <label htmlFor="javascript">Javascript</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="languages"
                value="devops"
                onChange={onChangeHandler}
                checked={formData.languages.indexOf('devops') !== -1}
              />
              <label htmlFor="devops">Devops</label>
            </div>
         
          </div>
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
