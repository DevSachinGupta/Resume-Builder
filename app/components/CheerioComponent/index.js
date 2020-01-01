/**
 *
 * CheerioComponent
 *
 */

import {
  InjectJSONUsingCheerioEmployement,
  InjectJSONUsingCheerioEducation,
} from 'components/CheerioComponent/templates/template_1';

/**
 * Use when need to change template and want to load existing json into template(without css)
 * var data = InjectFullJSONUsingCheerio(DemoPage.html , resumeJSON_state)
 */

export function InjectFullJSONUsingCheerio(HTMLString, resumeJSON) {
  if (resumeJSON.Education) {
    const JSONString = JSON.stringify(resumeJSON.Education);
    HTMLString = InjectJSONUsingCheerioEducation(HTMLString, JSONString);
  }
  if (resumeJSON.Employement) {
    const JSONString = JSON.stringify(resumeJSON.Employement);
    HTMLString = InjectJSONUsingCheerioEmployement(HTMLString, JSONString);
  }
  return HTMLString;
}
