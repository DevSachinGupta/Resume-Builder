/**
 *
 * DashboardPage
 *
 */

import React, { memo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { IoIosWarning, IoMdCopy } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { useToasts } from 'react-toast-notifications';
import history from 'containers/App/history';
import { updateProjectsInUserData } from 'containers/App/actions';
import { updateSessionArrayDelete } from 'containers/Builder/actions';
import {
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
} from '../../containers/App/selectors';
import apiClient from '../../utils/app/API';
import DashboardHeader from '../Header/DashboardHeader';
import Button from '../Button';
import Footer from './Footer';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DashboardPage({ user, userData, dispatch }) {
  const { addToast } = useToasts();
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  let projectCountStatus = true;
  if (userData.siteProjects.length !== 0) {
    projectCountStatus = false;
  }
  const { publishedId } = userData.settings.publishDetails;

  const handleDeleteProject = projectId => {
    console.log('project id:', projectId);
    setLoadingStatus(true);
    apiClient
      .post('builder/deleteProject', {
        projectId,
      })
      .then(response => {
        console.log('handleDeleteProject response: ', response);
        if (response.status === 200) {
          console.log("dispatch from dash: ", dispatch, updateProjectsInUserData)
          dispatch(updateProjectsInUserData(response.data.data.siteProjects));
          // dispatch(updateSessionArrayDelete(projectId));
          addToast('Deleted Successfully!', { appearance: 'info' });
          setLoadingStatus(false);
          // console.log('succesfully create new project.', response);
        } else {
          if (response.status === 210) {
            setSubmitError({
              status: 'Invalid or Expire token',
            });
          } else {
            setSubmitError({
              status: 'Something went wrong while submitting!',
            });
          }
          addToast('Something went wrong!', { appearance: 'error' });
          setLoadingStatus(false);
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        setSubmitError({
          status: 'Something went wrong while submitting!',
        });
        addToast('Something went wrong!', { appearance: 'error' });
        setLoadingStatus(false);
        console.log('accountVerify error: ', error.response);
      });
  };

  const handleCopyProject = projectId => {
    console.log('project id:', projectId);
    setLoadingStatus(true);
    apiClient
      .post('builder/copyProject', {
        projectId,
      })
      .then(response => {
        console.log('handleCopyProject response: ', response);
        if (response.status === 200) {
          dispatch(updateProjectsInUserData(response.data.data.siteProjects));
          addToast('Deleted Successfully!', { appearance: 'info' });
          setLoadingStatus(false);
          console.log('succesfully create new project.', response);
        } else {
          if (response.status === 210) {
            setSubmitError({
              status: 'Invalid or Expire token',
            });
          } else {
            setSubmitError({
              status: 'Something went wrong while submitting!',
            });
          }
          addToast('Something went wrong!', { appearance: 'error' });
          setLoadingStatus(false);
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        setSubmitError({
          status: 'Something went wrong while submitting!',
        });
        addToast('Something went wrong!', { appearance: 'error' });
        setLoadingStatus(false);
        console.log('accountVerify error: ', error.response);
      });
  };

  const handleEditProject = projectId => {
    history.push(`/builder/${projectId}`);
  };

  return (
    <div className="bg-white flex flex-col h-screen justify-between text-black">
      <div>
        <DashboardHeader user={user} userData={userData} dispatch={dispatch} />
      </div>
      <div className="flex mb-auto">
        <div className="container mx-auto md:px-8">
          <div className="flex px-10 items-center justify-between">
            <div className="pl-6 text-4xl text-gray-800">Projects</div>
            {projectCountStatus === false ? (
              <Link
                to="dashboard/new-project"
                className="bg-teal-500 text-sm text-white px-4 py-3"
              >
                <span className="whitespace-no-wrap">
                  <span className="font-bold">+ </span>Add New Project
                </span>
              </Link>
            ) : (
              <> </>
            )}
          </div>
          {projectCountStatus === true ? (
            <div className="flex flex-col px-10 text-center">
              <div className="md:mt-32 mt-16 text-4xl text-gray-700">
                <span className="flex justify-center">
                  <IoIosWarning size={52} className="text-gray-600 pr-1" /> You
                  have no projects, yet
                </span>
              </div>
              <div className="pt-3 justify-between">
                <div className="my-3 text-center">
                  <Link
                    to="dashboard/new-project"
                    className="bg-teal-500 text-sm text-white px-6 py-4"
                  >
                    Start your new project now!
                  </Link>
                </div>
                <small>
                  <span>Need help? </span>
                  <Link to="login" className="pt-3 text-blue-500">
                    Read our project guide
                  </Link>
                </small>
              </div>
            </div>
          ) : (
            <div className="flex px-10 pt-6 projectListConatiner">
              <div className="flex flex-wrap -mx-2 overflow-hidden">
                {userData.siteProjects.map(item => (
                  <div className="my-4 px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                    <div className="bg-white shadow-lg">
                      <img
                        className="h-48 w-full object-cover object-center hover:opacity-0"
                        // src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                        src={item.TemplateURL}
                        alt=""
                      />
                      <div className="flex flex-col justigy-between">
                        <div className="pt-1 px-2 pt-2 flex flex-row flex-wrap justify-between">
                          <h1 className=" text-xl front-bold md:text-base lg:text-lg">
                            {item.projectName}
                          </h1>
                          {item.projectId === publishedId ? (
                            <div
                              title="Published"
                              className="mx-1 my-auto w-3 h-3 rounded-full border-1 bg-green-400 published"
                            />
                          ) : (
                            <div
                              title="Draft"
                              className="mx-1 my-auto w-3 h-3 rounded-full border-1 bg-gray-400 draft"
                            />
                          )}
                        </div>
                        <div className="px-2  h-8">
                          {item.projectId === publishedId ? (
                            <small className="pt-1">
                              {userData.settings.publishDetails.subDomain}
                            </small>
                          ) : (
                            <div />
                          )}
                        </div>
                        <div className="flex w-full text-center justify-between">
                          <div
                            title="Edit"
                            className="w-1/3 border-t border-black border-r"
                          >
                            <Button
                              onClick={() => handleEditProject(item.projectId)}
                              className="py-2"
                            >
                              <FaRegEdit size={18} className="text-gray-600" />
                            </Button>
                          </div>
                          <div
                            title="Copy"
                            className="w-1/3 border-t border-black border-r"
                          >
                            <Button
                              onClick={() => handleCopyProject(item.projectId)}
                              className="py-2"
                            >
                              <IoMdCopy size={18} className="text-gray-600" />
                            </Button>
                          </div>
                          <div
                            title="Delete"
                            className="w-1/3 border-t border-black"
                          >
                            <Button
                              onClick={() =>
                                handleDeleteProject(item.projectId)
                              }
                              className="py-2"
                            >
                              <AiOutlineDelete
                                size={18}
                                className="text-gray-600"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-4 mt-8">
        <Footer />
      </div>
    </div>
  );
}

DashboardPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  user: makeSelectGetUserIsAuthenticated(),
  userData: makeSelectGetCurrentUserData(),
});

const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DashboardPage);
