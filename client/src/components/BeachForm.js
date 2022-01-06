import React, { useEffect } from 'react';

const BeachForm = () => {
  return (
    <div>
      <form className="form">
        <input type="text" name="beachName" placeholder={'Name'} />
        <input type="text-area" name="review" placeholder={'Review'} />
        <input type="text-area" name="address" placeholder={'Address'} />
        <input type="text-area" name="image" placeholder={'Image'} />
        <button className="button">Create Beach</button>
      </form>
    </div>
  );
};

export default BeachForm;

// beachName: { type: String, required: true },
// review: { type: String, required: true },
// address: { type: String, required: true },
// image: { type: String, required: true },
// comments: { type: Array, required: true },
// likes: { type: Number, required: true }
