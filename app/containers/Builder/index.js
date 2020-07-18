/**
 *
 * Builder
 *
 */

import React, { memo, useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import BuilderLayout from 'components/Builder/BuilderLayout';
import BuilderEditor from 'components/Builder/BuilderEditor';
import {
  updateTemplateNumberState,
  updateDemoPageState,
  getBuilderThemeContent,
  updateSessionArrayInsert,
} from 'containers/Builder/actions';
import {
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
  makeUpdateTemplateNumberState,
} from 'containers/Authenticate/selectors';
import apiClient from '../../utils/app/API';
import makeSelectBuilder, {
  makeSelectGetThemeContent,
  makeSelectSessionArray,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

// const templateNumber = '6';
// export function Builder({ templateNumber, themeContent, user, userData, match, dispatch }) {
export function Builder(props) {
  useInjectReducer({ key: 'builder', reducer });
  useInjectSaga({ key: 'builder', saga });

  const { projectId } = props.match.params;
  let projectName = '';

  const [builderSessionState, setBuilderSessionState] = useState({});
  const getThemeContent = useCallback(() => {
    props.dispatch(getBuilderThemeContent(2));
  });

  const handleFetchBuilderSession = () => {
    apiClient
      .post('builder/getProjectSession', {
        projectId,
      })
      .then(response => {
        console.log('handleFetchBuilderSession response: ', response);
        if (response.status === 200) {
          props.dispatch(
            updateSessionArrayInsert(
              projectId,
              response.data.data.builderSession,
            ),
          );
          setBuilderSessionState(response.data.data.builderSession);
        } else {
          console.log('Something went wrong while submitting: ');
        }
      })
      .catch(error => {
        console.log('accountVerify error: ', error.response);
      });
  };

  useEffect(() => {
    // const builderSession = makeSelectSessionArray(projectId);
    if (!props.builderSession[projectId]) {
      handleFetchBuilderSession();
    } else {
      setBuilderSessionState(props.builderSession[projectId]);
    }
    console.log('builderSessionState: ', builderSessionState);
    const DemoPage = {
      html: builderSessionState.templateHTML,
      css: builderSessionState.templateCSS,
      components: null,
      style: null,
    };

    // getThemeContent();
    // const DemoPage = {
    //   html: props.themeContent,
    //   css: '{..}',
    //   components: null,
    //   style: null,
    // };
    // props.dispatch(updateDemoPageState(DemoPage));
  }, []);

  // dispatch(updateTemplateNumberState(templateNumber));
  // dispatch(updateDemoPageState(DemoPage));
  // console.log("project: ", projectName, props.userData.siteProjects[projectId].projectName)
  return (
    <BuilderLayout projectId={projectId}>
      <div className="builder-workspace">
        <BuilderEditor builderSessionState={builderSessionState} />
      </div>
    </BuilderLayout>
  );
}

Builder.propTypes = {};

const mapStateToProps = createStructuredSelector({
  builder: makeSelectBuilder(),
  themeContent: makeSelectGetThemeContent(),
  templateNumber: makeUpdateTemplateNumberState(),
  user: makeSelectGetUserIsAuthenticated(),
  userData: makeSelectGetCurrentUserData(),
  builderSession: makeSelectSessionArray(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Builder);
