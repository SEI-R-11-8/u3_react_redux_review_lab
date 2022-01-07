import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadDetails } from '../store/actions/DestinationActions';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Reviews from '../components/Reviews';

const mapStateToProps = ({ detailState }) => {
  return { detailState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => dispatch(LoadDetails(id))
  };
};

const DestinationPage = ({ detailState, fetchDetails, match }) => {
  useEffect(() => {
    fetchDetails(match.params.id);
  }, [match.params.id]);
  const details = detailState.details.destination;
  // console.log(details.img);

  return (
    <div>
      {details ? (
        <div>
          <h1>{details.city}</h1>
          <h3>{details.country}</h3>
          <Carousel>
            {details.img.map((image, i) => (
              <img key={i} src={image} alt="image" />
            ))}
          </Carousel>

          <p>{details.desc}</p>
          <Reviews destinationId={details._id} />
        </div>
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationPage);
