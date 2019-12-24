
import React from 'react';
import Textfield from "../../FormComponents/TextField";
import PropTypes from 'prop-types';

//  *****  Employement Form Component *****

const EmpInputs = ({ idx, employments, handleEmpChange }) => {
    const positionId = `position-${idx}`;
    const employerId = `employer-${idx}`;
    const stateId = `state-${idx}`;
    const countryId = `country-${idx}`;
    const startId = `start-${idx}`;
    const endId = `end-${idx}`;
    const summaryId = `summary-${idx}`;

    return (
        <div key={`field-${idx}`}>
			<div className="flex flex-wrap ">
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Position"
					type="text"
					name={positionId}
					idx={idx}
					id={positionId}
					className="position"
					namex="position"
					value={employments[idx].position}
					onChange={handleEmpChange}
      			   />
			  </div>
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Employer"
					type="text"
					name={employerId}
					idx={idx}
					id={employerId}
					className="employer"
					namex="employer"
					value={employments[idx].employer}
					onChange={handleEmpChange}
				  />
			  </div>
			</div>
			<div className="flex flex-wrap ">
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="State"
					type="text"
					name={stateId}
					idx={idx}
					id={stateId}
					className="state"
					namex="state"
					value={employments[idx].state}
					onChange={handleEmpChange}
				  />
			  </div>
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Country"
					type="text"
					name={countryId}
					idx={idx}
					id={countryId}
					className="country"
					namex="country"
					value={employments[idx].country}
					onChange={handleEmpChange}
				  />
			  </div>
			</div>
			
			<div className="flex flex-wrap ">
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Start Date"
					type="date"
					name={startId}
					idx={idx}
					id={startId}
					className="start"
					namex="start"
					value={employments[idx].start}
					onChange={handleEmpChange}
				  />
			  </div>
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="End Date"
					type="date"
					name={endId}
					idx={idx}
					id={endId}
					className="end"
					namex="end"
					value={employments[idx].end}
					onChange={handleEmpChange}
				  />
			  </div>
			</div>
			
			<div className="flex flex-wrap ">
			  <div className="w-full">
				  <Textfield
				    labeltxt="Description"
					type="text"
					name={summaryId}
					idx={idx}
					namex="summary"
					id={summaryId}
					className="summary"
					value={employments[idx].summary}
					onChange={handleEmpChange}
				  />
			  </div>
			</div> 
        </div>
    );
};

EmpInputs.propTypes = {
    idx: PropTypes.number,
    employments: PropTypes.array,
    handleEmpChange: PropTypes.func,
};

export default EmpInputs;
//  *****  Education Form Component : END  ******

