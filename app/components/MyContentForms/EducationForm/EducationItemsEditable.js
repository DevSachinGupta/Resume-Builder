import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from '../../Layout';
import Input from '../../FormComponents/Input';
import Textfield from '../../FormComponents/TextField';

//  *****  Education Form Component *****

const EduInputs = ({ idx, educations, handleEduChange, handleRemove }) => {
  const titleId = `title-${idx}`;
  const institutionId = `institution-${idx}`;
  const fieldOfStudyId = `fieldOfStudy-${idx}`;
  const stateId = `state-${idx}`;
  const countryId = `country-${idx}`;
  const startId = `start-${idx}`;
  const endId = `end-${idx}`;
  const summaryId = `summary-${idx}`;

  return (
    <div>
      <Row>
        <Column width="4/5" className="px-1">
          <Row>
            <Column width="1/2" className="px-1">
              <Input
                label="Degree"
                type="text"
                name={titleId}
                data-idx={idx}
                id={titleId}
                className="title"
                data-name="title"
                value={educations[idx].title}
                onChange={handleEduChange}
              />
            </Column>
            <Column width="1/2" className="px-1">
              <Input
                label="Institute Name"
                type="text"
                name={institutionId}
                data-idx={idx}
                id={institutionId}
                className="institution"
                data-name="institution"
                value={educations[idx].institution}
                onChange={handleEduChange}
              />
            </Column>
          </Row>
          <Row>
            <Column width="1/3" className="px-1">
              <Input
                label="Field of Study"
                type="text"
                name={fieldOfStudyId}
                data-idx={idx}
                id={fieldOfStudyId}
                className="fieldOfStudy"
                data-name="fieldOfStudy"
                value={educations[idx].fieldOfStudy}
                onChange={handleEduChange}
              />
            </Column>
            <Column width="1/3" className="px-1">
              <Input
                label="State"
                type="text"
                name={stateId}
                data-idx={idx}
                id={stateId}
                className="state"
                data-name="state"
                value={educations[idx].state}
                onChange={handleEduChange}
              />
            </Column>
            <Column width="1/3" className="px-1">
              <Input
                label="Country"
                type="text"
                name={countryId}
                data-idx={idx}
                id={countryId}
                className="country"
                data-name="country"
                value={educations[idx].country}
                onChange={handleEduChange}
              />
            </Column>
          </Row>
          <Row>
            <Column width="2/5" className="px-1">
              <Input
                label="Start Date"
                type="date"
                name={startId}
                data-idx={idx}
                id={startId}
                className="start"
                data-name="start"
                value={educations[idx].start}
                onChange={handleEduChange}
              />
            </Column>
            <Column width="2/5" className="px-1">
              <Input
                label="End Date"
                type="date"
                name={endId}
                data-idx={idx}
                id={endId}
                className="end"
                data-name="end"
                value={educations[idx].end}
                onChange={handleEduChange}
              />
            </Column>
            <Column width="1/5" className="px-1">
              <Textfield
                labeltxt="Till date"
                type="checkbox"
                name="tillDate"
                //   disabled={checkboxState}
                //   onClick={checkboxStateChange}
                onChange={handleEduChange}
                // onBlur={handleBlur}
                // error={errors.val}
              />
            </Column>
          </Row>
          <Row>
            <Column width="full" className="px-1">
              <Input
                label="Description"
                type="text"
                name={summaryId}
                data-idx={idx}
                data-name="summary"
                id={summaryId}
                className="summary"
                value={educations[idx].summary}
                onChange={handleEduChange}
              />
            </Column>
          </Row>
        </Column>
        <Column width="1/5" className="px-1">
          <button type="button" data-idx={idx} onClick={handleRemove}>
            Remove
          </button>
        </Column>
      </Row>
    </div>
  );
};

EduInputs.propTypes = {
  idx: PropTypes.number,
  educations: PropTypes.array,
  handleEduChange: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default EduInputs;
//  *****  Education Form Component : END  ******
