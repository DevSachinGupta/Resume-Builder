import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../../Layout';
import StarRating from '../../../StarRating';
import { validationMap } from './validation';
import TextArea from '../../../FormComponents/TextArea';

const FeedbackInputs = ({ setRating }) => (
  <div>
    <Row className="justify-center">
      <div className="rating">
        <div className="label-color">Feedback Us</div>
        <div className="text-center">
          <StarRating
            numberOfStars="5"
            currentRatingValue="0"
            onClick={setRating}
          />
        </div>
      </div>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <TextArea
          placeholder="Provide your valuable Feedback"
          label="Message"
          name="message"
          validate={validationMap.message}
        />
      </Column>
    </Row>
  </div>
);

FeedbackInputs.propTypes = {
  setRating: PropTypes.func,
};

export default FeedbackInputs;
