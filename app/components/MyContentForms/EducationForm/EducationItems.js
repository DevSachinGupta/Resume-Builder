
import React from 'react';
import Textfield from "../../FormComponents/TextField";
import PropTypes from 'prop-types';

//  *****  Education Form Component *****

const EduInputs = ({ idx, educations, handleEduChange , handleRemove}) => {
    const titleId = `title-${idx}`;
    const institutionId = `institution-${idx}`;
    const fieldOfStudyId = `fieldOfStudy-${idx}`;
    const stateId = `state-${idx}`;
    const countryId = `country-${idx}`;
    const startId = `start-${idx}`;
    const endId = `end-${idx}`;
    const summaryId = `summary-${idx}`;

    return (
        <div key={`field-${idx}`}>
			<div className="flex flex-wrap ">
			    <div className="w-4/5 px-2">
					<div className="flex flex-wrap ">
						<div className="w-1/2 px-2">
							<Textfield
								labeltxt="Degree"
								type="text"
								name={titleId}
								idx={idx}
								id={titleId}
								className="title"
								namex="title"
								value={educations[idx].title}
								onChange={handleEduChange}
							/>
						</div>
						<div className="w-1/2 px-2">
							<Textfield
								labeltxt="Institute Name"
								type="text"
								name={institutionId}
								idx={idx}
								id={institutionId}
								className="institution"
								namex="institution"
								value={educations[idx].institution}
								onChange={handleEduChange}
							/>
						</div>
					</div>
					<div className="flex flex-wrap ">
						<div className="w-1/3 px-2">
							<Textfield
								labeltxt="Field of Study"
								type="text"
								name={fieldOfStudyId}
								idx={idx}
								id={fieldOfStudyId}
								className="fieldOfStudy"
								namex="fieldOfStudy"
								value={educations[idx].fieldOfStudy}
								onChange={handleEduChange}
							/>
						</div>
						<div className="w-1/3 px-2">
							<Textfield
								labeltxt="State"
								type="text"
								name={stateId}
								idx={idx}
								id={stateId}
								className="state"
								namex="state"
								value={educations[idx].state}
								onChange={handleEduChange}
							/>
						</div>
						<div className="w-1/3 px-2">
							<Textfield
								labeltxt="Country"
								type="text"
								name={countryId}
								idx={idx}
								id={countryId}
								className="country"
								namex="country"
								value={educations[idx].country}
								onChange={handleEduChange}
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
								value={educations[idx].start}
								onChange={handleEduChange}
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
								value={educations[idx].end}
								onChange={handleEduChange}
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
								value={educations[idx].summary}
								onChange={handleEduChange}
							/>
						</div>
					</div> 
				</div>
				<div className="w-1/5 px-2">
					<button type="button" data-idx={idx} onClick={handleRemove}>
						Remove
					</button>
				</div>
			</div>	
        </div>
    );
};

EduInputs.propTypes = {
    idx: PropTypes.number,
    educations: PropTypes.array,
    handleEduChange: PropTypes.func,
};

export default EduInputs;
//  *****  Education Form Component : END  ******

