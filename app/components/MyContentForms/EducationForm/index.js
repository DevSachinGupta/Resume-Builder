/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import Textfield from "../../FormComponents/TextField";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// ####


const EduInputs = ({ idx, educations, handleEduChange }) => {
    const qualificationId = `qualification-${idx}`;
    const universityId = `university-${idx}`;
    const instituteId = `institute-${idx}`;
    const fieldOfStudyId = `fieldOfStudy-${idx}`;
    const percentageId = `percentage-${idx}`;
    const stateId = `state-${idx}`;
    const countryId = `country-${idx}`;
    const startDateId = `startDate-${idx}`;
    const endDateId = `endDate-${idx}`;
    const descriptionId = `description-${idx}`;

    return (
        <div key={`field-${idx}`}>
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
				  <label htmlFor={qualificationId}>Qualification</label>
				  <input
					
					type="text"
					
					name={qualificationId}
					data-idx={idx}
					id={qualificationId}
					className="qualification"
					value={educations[idx].qualification}
					onChange={handleEduChange}
					
					/>
			  </div>
			  <div class="w-1/2 px-2">
				  <label htmlFor={universityId}>Board/University</label>
				  <input
					type="text"
					name={universityId}
					data-idx={idx}
					id={universityId}
					className="university"
					value={educations[idx].university}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
			
				  <label htmlFor={instituteId}>Institute Name</label>
				  <input
					type="text"
					name={instituteId}
					data-idx={idx}
					id={instituteId}
					className="institute"
					value={educations[idx].institute}
					onChange={handleEduChange}
				  />
			  </div>
			  <div class="w-1/2 px-2">
				
				  <label htmlFor={fieldOfStudyId}>Field of Study</label>
				  <input
					type="text"
					name={fieldOfStudyId}
					data-idx={idx}
					id={fieldOfStudyId}
					className="fieldOfStudy"
					value={educations[idx].fieldOfStudy}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/3 px-2">
				  <label htmlFor={percentageId}>Percentage</label>
				  <input
					type="text"
					name={percentageId}
					data-idx={idx}
					id={percentageId}
					className="percentage"
					value={educations[idx].percentage}
					onChange={handleEduChange}
				  />
			  </div>
			  <div class="w-1/3 px-2">
				  <label htmlFor={stateId}>State</label>
				  <input
					type="text"
					name={stateId}
					data-idx={idx}
					id={stateId}
					className="state"
					value={educations[idx].state}
					onChange={handleEduChange}
				  />
			  </div>
			  <div class="w-1/3 px-2">
				  <label htmlFor={countryId}>Country</label>
				  <input
					type="text"
					name={countryId}
					data-idx={idx}
					id={countryId}
					className="country"
					value={educations[idx].country}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
				  <label htmlFor={startDateId}>Start Date</label>
				  <input
					type="date"
					name={startDateId}
					data-idx={idx}
					id={startDateId}
					className="startDate"
					value={educations[idx].startDate}
					onChange={handleEduChange}
				  />
			  </div>
			  <div class="w-1/2 px-2">
				  <label htmlFor={endDateId}>End Date</label>
				  <input
					type="date"
					name={endDateId}
					data-idx={idx}
					id={endDateId}
					className="endDate"
					value={educations[idx].endDate}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-full">
				  <label htmlFor={descriptionId}>Description</label>
				  <input
					type="text"
					name={descriptionId}
					data-idx={idx}
					id={descriptionId}
					className="description"
					value={educations[idx].description}
					onChange={handleEduChange}
				  />
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



			/* 
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Institute Name" type="text"></Textfield>
			  </div>
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Field of Study" type="text"></Textfield>
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/3 px-2">
				  <Textfield labeltxt="Percentage" type="text"></Textfield>
			  </div>
			  <div class="w-1/3 px-2">
				  <Textfield labeltxt="State" type="text"></Textfield>
			  </div>
			  <div class="w-1/3 px-2">
				  <Textfield labeltxt="Country" type="text"></Textfield>
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Start date" type="date"></Textfield>
			  </div>
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="End date" type="date"></Textfield>
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-full">
				  <Textfield labeltxt="Description" type="text"></Textfield>
			  </div>
			</div> */
			

// ####

function EducationForm() {
  var counter = 0;
  const blankEduFields = { qualification: '', university: '', institute: '', fieldOfStudy: '',percentage:'', state: '', country: '', startDate:'', endDate:'', description: ''};
  const [educations, setEducations] = useState([
     { ...blankEduFields },
  ]);
  
  const addMore = () => {
	  
	setEducations([...educations, { ...blankEduFields }]); 
	console.log(educations);
/*     counter = counter + 1;
    educations.push({
      lable: 'Qualification',
      qualificationId: "qualification[" + counter+"]"
      });
    setEducations([...educations]);
	 */
  };
  
  const handleEduChange = (e) => {
        const updatedEdu = [...educations];
		console.log(updatedEdu);
        updatedEdu[e.target.dataset.idx][e.target.className] = e.target.value;
        setEducations(updatedEdu);
		console.log(updatedEdu);
    };

  return (
    <div>
      {educations.map((item ,idx ) => (
        <div >
          {/* <label for={item.qualificationId}>{item.lable}</label>
          <input type="text" placeholder={item.lable} id={item.qualificationId}/> */}
		  
			<EduInputs
				key={`field-${idx}`}
				idx={idx}
				educations={educations}
				handleEduChange={handleEduChange}
			/>
		  
			
        </div>
      ))}
      <button type="button" onClick={addMore}>
        Add More
      </button>
    </div>
  );
}

EducationForm.propTypes = {};

export default memo(EducationForm);
