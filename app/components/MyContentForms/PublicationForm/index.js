import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import { Formik, Form, FieldArray } from 'formik';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import { updateResumeJSONState } from 'containers/Builder/actions';
import { updateCanvas } from 'containers/Builder/saga';
// import { updateCanvas } from 'components/Builder/BuilderEditor/ComponentEditor';
import { formatDateValue } from '../../../utils/app/textFormating';
import Accordian from '../../Accordion';
import PublicationInputs from './PublicationItems';
import Button from '../../Button';

function PublicationForm({ editorState, resumeJSONState, dispatch }) {
  const blankPubFields = {
    title: '',
    summary: '',
    url: '',
    date: null,
    description: '',
  };
  const componentMap = {
    title: { valueMap: 'title', componetType: 'content' },
    summary: { valueMap: 'summary', componetType: 'content' },
    date: { valueMap: 'date', componetType: 'content' },
    url: { key: ['href'], valueMap: ['url'], componetType: 'attribute' },
    description: { valueMap: 'description', componetType: 'content' },
  };

  let storePublication = null;
  if (resumeJSONState.publication) {
    storePublication = resumeJSONState.publication.history;
  }

  const [publications, setPublications] = useState(
    storePublication || [{ ...blankPubFields }],
  );

  const formatValues = values => {
    const tempValues = values;
    tempValues.forEach((value, index) => {
      tempValues[index].date = formatDateValue(tempValues[index].date);
    });
    return tempValues;
  };
  const handleSave = values => {
    const updatedPub = formatValues(
      JSON.parse(JSON.stringify(values.publication)),
    );
    console.log(updateCanvas)
    // const updatedPub = [...values.publication];
    const history = { history: values.publication };
    updateCanvas('publication', 'ADD', updatedPub, componentMap);
    // updateCanvas('publication', 'ADD', updatedPub, editorState, componentMap);
    dispatch(updateResumeJSONState(history, 'publication'));
  };

  return (
    <div>
      <Formik
        initialValues={{ publication: publications }}
        onSubmit={(values, actions) => {
          console.log(values);
          handleSave(values);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="publication"
              render={arrayHelpers => (
                <React.Fragment>
                  {values.publication.map((item, idx) => (
                    <Accordian
                      key={`Accordian-${idx}`}
                      id={idx}
                      label={item.title ? item.title : `Publication ${idx + 1}`}
                      onClickRemove={() => arrayHelpers.remove(idx)}
                    >
                      <PublicationInputs idx={idx} />
                    </Accordian>
                  ))}

                  <Button
                    onClick={() => arrayHelpers.push(blankPubFields)}
                    fullWidth
                    type="flat"
                  >
                    Add Another
                  </Button>
                  <div className={cx('footerContainer')}>
                    <Button as="submit" fullWidth type="primary">
                      Save Details
                    </Button>
                  </div>
                </React.Fragment>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

PublicationForm.propTypes = {
  editorState: PropTypes.object,
  resumeJSONState: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editorState: makeUpdateEditorState(),
  resumeJSONState: makeUpdateResumeJSONState(),
});
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(PublicationForm);
