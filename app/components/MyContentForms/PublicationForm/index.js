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
import updateCanvas from 'components/Builder/BuilderEditor/ComponentEditor';
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
  let storePublication = null;

  if (resumeJSONState.Publication) {
    storePublication = resumeJSONState.Publication.history;
  }

  const [publications, setPublications] = useState(
    storePublication || [{ ...blankPubFields }],
  );

  const handleSave = values => {
    const updatedPub = [...values.publication];
    const history = { history: updatedPub };
    updateCanvas('publication', 'ADD', values.publication, editorState);
    dispatch(updateResumeJSONState(history, 'Publication'));
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
