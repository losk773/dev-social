import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const AddEducation = ({addEducation}) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
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
    addEducation(formData);
  }

  return (
    <React.Fragment>
      <h1 className="large text-primary">
        Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={formData.school}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={formData.degree}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Field Of Study" 
            name="fieldofstudy"
            value={formData.fieldofstudy}
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
          /> Current studying</p>
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
            placeholder="Program Description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}