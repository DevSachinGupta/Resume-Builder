import cheerio from 'cheerio';

/* ##########  EDUCATION  ###########3 */
export function InjectJSONUsingCheerioEducation(HTMLString, JSONString) {
  const $ = cheerio.load(HTMLString);
  const JSONData = JSON.parse(JSONString);

  const list = [];
  const d = $('#EducationSection').clone();
  const element = JSONData.history;
  const keys = Object.keys(element);
  if (d.html() && keys.length !== 0) {
    for (let i = 0; i < keys.length; i += 1) {
      const temp = d.find('List').clone();
      // console.log(temp.html())
      const innerKeys = Object.keys(element[i]);
      for (let j = 0; j < innerKeys.length; j += 1) {
        if (innerKeys[j] === 'title') {
          temp.find('.educationTitle').text(element[i].title);
        } else if (innerKeys[j] === 'fieldOfStudy') {
          temp.find('.educationFieldOfStudy').text(element[i].fieldOfStudy);
        } else if (innerKeys[j] === 'institution') {
          temp.find('.educationInstitution').text(element[i].institution);
        } else if (innerKeys[j] === 'state') {
          temp.find('.educationState').text(element[i].state);
        } else if (innerKeys[j] === 'country') {
          temp.find('.educationCountry').text(element[i].country);
        } else if (innerKeys[j] === 'summary') {
          temp.find('.educationSummary').text(element[i].summary);
        } else if (innerKeys[j] === 'start') {
          temp.find('.educationStart').text(element[i].start);
        } else if (innerKeys[j] === 'end') {
          temp.find('.educationEnd').text(element[i].end);
        }
      }
      list.push(temp.html());
    }
    // console.log(list.join('\n'))
    $('#EducationSection List').html(list.join('\n'));
  } else {
    console.log('EDUCATION NULL');
    $('#EducationSection').replaceWith('');
  }
  return $.html();
}

/* ##########  Employment  ###########3 */
export function InjectJSONUsingCheerioEmployement(HTMLString, JSONString) {
  const $ = cheerio.load(HTMLString);
  const JSONData = JSON.parse(JSONString);
  const list = [];
  const d = $('#EmploymentSection').clone();
  const element = JSONData.history;
  const keys = Object.keys(element);

  if (d.html() && keys.length !== 0) {
    for (let i = 0; i < keys.length; i += 1) {
      const temp = d.find('List').clone();
      const innerKeys = Object.keys(element[i]);
      for (let j = 0; j < innerKeys.length; j += 1) {
        if (innerKeys[j] === 'position') {
          temp.find('.employmentPosition').text(element[i].position);
        } else if (innerKeys[j] === 'employer') {
          temp.find('.employmentEmployer').text(element[i].employer);
        } else if (innerKeys[j] === 'state') {
          temp.find('.employmentState').text(element[i].state);
        } else if (innerKeys[j] === 'country') {
          temp.find('.employmentCountry').text(element[i].country);
        } else if (innerKeys[j] === 'summary') {
          temp.find('.employmentSummary').text(element[i].summary);
        } else if (innerKeys[j] === 'start') {
          temp.find('.employmentStart').text(element[i].start);
        } else if (innerKeys[j] === 'end') {
          temp.find('.employmentEnd').text(element[i].end);
        }
      }
      list.push(temp.html());
    }
    $('#EmploymentSection List').html(list.join('\n'));
  } else {
    console.log('Employment NULL');
    $('#EmploymentSection').replaceWith('');
  }
  return $.html();
}
