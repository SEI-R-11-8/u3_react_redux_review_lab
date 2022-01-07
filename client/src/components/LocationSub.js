import React, { useEffect } from 'react';

const LocationSub = (props) => {
  const handleChange = (e) => {
    props.setForm({
      ...props.reviewState.form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    props.subitForm(props.reviewState.form);
  };
  useEffect(() => {
    console.log(props.reviewState);
  }, []);

  return (
    <div className="locationSubmission">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="locationName"
          placeholder="Name your throne"
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Describe your throne"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Where is your throne"
          onChange={handleChange}
        />
        <input
          type="text"
          name="photoURL"
          placeholder="Add a link to a photo of your throne"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default LocationSub;
