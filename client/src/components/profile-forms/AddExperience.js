import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const AddExperience = ({addExperience}) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const onChange = ({target}) => setFormData({...formData, [target.name]: target.value});

  const onChangeCheckbox = () => {
    setFormData({...formData, current: !formData.current});
    toggleDisabled(!toDateDisabled);
  };

  const onSubmit = e => {
    e.preventDefault();
    addExperience(formData);
  }

  return (
    <React.Fragment>
      <h1 className="large text-primary">
       Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="* Job Title" 
            name="title"
            value={formData.title}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="* Company" 
            name="company"
            value={formData.company}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Location" 
            name="location"
            value={formData.location}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input 
            type="date" 
            name="from"
            value={formData.from}
            onChange={onChange}
          />
        </div>
          <div className="form-group">
          <p><input 
            type="checkbox" 
            name="current" 
            value={formData.current}
            onChange={onChangeCheckbox}
          /> Current Job</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input 
            type="date" 
            name="to"
            value={formData.to}
            onChange={onChange}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={formData.description}
            onChange={onChange}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" value="Save"/>
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </React.Fragment>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
}