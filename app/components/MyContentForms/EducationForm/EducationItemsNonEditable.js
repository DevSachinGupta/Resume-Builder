
import React from 'react';
import Textfield from "../../FormComponents/TextField";
import PropTypes from 'prop-types';

//  *****  Education Form Component *****

const EduInputs = ({ idx, educations, handleEduChange , handleRemove , handleEdit}) => {
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
					
				</div>
				<div className="w-1/5 px-2">
					<button type="button" data-idx={idx} onClick={handleRemove}>
						Remove
					</button>
				</div>
				<div className="w-1/5 px-2">
					<button type="button" data-idx={idx} onClick={handleEdit}>
						Edit
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

