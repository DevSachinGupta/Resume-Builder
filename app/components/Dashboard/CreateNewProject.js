/**
 *
 * CreateNewProject
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FaFolderPlus } from 'react-icons/fa';
import history from 'containers/App/history';
import { updateProjectsInUserData } from 'containers/App/actions';
import DotsLoading from '../LoadingIndicator/dotsLoading';
import apiClient from '../../utils/app/API';
import {
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
} from '../../containers/App/selectors';
import { handleSwitchTemplate } from '../../containers/Builder/actions';
import DashboardHeader from '../Header/DashboardHeader';
import TemplateContainer from './TemplateContainer';
import Button from '../Button';
import Footer from './Footer';
import './style.scss';

// import PropTypes from 'prop-types';

function CreateNewProject({ user, userData, selectTemplateOny, dispatch }) {
  const [filters, setFilters] = useState({
    pricing: 'All',
    category: 'Show All',
    searchKey: [],
    rating: -1,
    pageNumber: 1,
    pagesize: 12,
    sortOrder: -1, // Relevence:- no of user === then rating
  });
  const [templateList2, setTemplateList2] = useState([]);
  const [templateList, setTemplateList] = useState([]);
  const [filteredItemCount, setFilteredItemCount] = useState(0);

  const [loadingStatus, setLoadingStatus] = useState(false);
  const [loadingCreateStatus, setLoadingCreateStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [layoutView, setLayoutView] = useState('Grid');
  const [currentCategory, setCurrentCategory] = useState('Show All');
  const [currentPricing, setPricing] = useState('All');
  const switchLayoutView = e => {
    setLayoutView(e.currentTarget.value);
  };

  useEffect(() => {
    getFilteredList();
  }, [filters, templateList2, currentPricing, currentCategory]);

  // console.log("apiclient", apiClient)

  useEffect(() => {
    setLoadingStatus(true);
    apiClient
      .get('template/getAllTemplateList')
      .then(response => {
        if (response.status === 200) {
          setTemplateList2(response.data.data.templateList);
        } else {
          setSubmitError({
            status: 'Something went wrong while submitting !!!',
          });
        }
        setLoadingStatus(false);
      })
      .catch(error => {
        console.log('res err', error.response);
        setLoadingStatus(false);
        setSubmitError({
          status: 'Something went wrong while submitting !!!',
        });
      });
  }, []);

  const switchTemplate = params => {
    console.log('called handleSwitchTemplate', params);
    // TODO dispatch switchTemplate
    dispatch(handleSwitchTemplate(params));
  };

  const handleCreateProject = () => {
    setLoadingCreateStatus(true);
    let projectName = document.getElementById('projectName').value;
    if (projectName === '') {
      projectName = 'My Resume Project';
    }
    apiClient
      .post('builder/createProject', {
        TemplateId: selectedTemplate.id,
        projectName,
        TemplateURL: selectedTemplate.url,
      })
      .then(response => {
        console.log('handleCreateProject response: ', response);
        if (response.status === 200) {
          dispatch(updateProjectsInUserData(response.data.data.siteProjects));
          history.push(`/builder/${response.data.data.projectId}`);
          setLoadingCreateStatus(false);
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
          setLoadingCreateStatus(false);
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        setLoadingCreateStatus(false);
        setSubmitError({
          status: 'Something went wrong while submitting!',
        });
        console.log('accountVerify error: ', error.response);
      });
  };

  function updateFilter(key, value) {
    const data = { ...filters };
    if (key === 'pageChange') {
      data.pageNumber =
        value === '++' ? data.pageNumber + 1 : data.pageNumber - 1;
    } else if (key === 'clearFilter') {
      data.pricing = 'All';
      data.category = [];
      data.rating = -1;
      data.pageNumber = 1;
      data.pagesize = 12;
      data.sortOrder = -1;
    } else {
      data[key] = value;
    }
    setFilters({ ...data });
    // getFilteredList();
  }
  // console.log(filters)
  function getFilteredList() {
    let newList = [];
    if (currentPricing !== 'All') {
      if (currentPricing === 'Free') {
        newList = templateList2.filter(
          d => parseFloat(d.price) <= parseFloat(0),
        );
      } else if (currentPricing === 'Premium') {
        newList = templateList2.filter(
          d => parseFloat(d.price) > parseFloat(0),
        );
      }
    } else {
      newList = templateList2;
    }
    if (currentCategory !== 'Show All') {
      newList = newList.filter(d =>
        d.category.some(s => currentCategory === s),
      );
    }

    if (filters.searchKey.length !== 0) {
      newList = newList.filter(d =>
        d.searchBag.some(s => filters.searchKey.includes(s)),
      );
    }
    if (filters.rating !== -1) {
      newList = newList.filter(d => d.rating === filters.rating);
    }
    switch (filters.sortOrder) {
      case 0: // Pricing High ---> low
        newList.sort((a, b) =>
          parseFloat(a.price) > parseFloat(b.price)
            ? -1
            : parseFloat(b.price) > parseFloat(a.price)
              ? 1
              : 0,
        );
        break;
      case 1: // Pricing low ---> High
        newList.sort((a, b) =>
          parseFloat(a.price) > parseFloat(b.price)
            ? 1
            : parseFloat(b.price) > parseFloat(a.price)
              ? -1
              : 0,
        );
        break;
      case 2: // rating low ---> High
        newList.sort((a, b) =>
          parseInt(a.rating) > parseInt(b.rating)
            ? 1
            : parseInt(b.rating) > parseInt(a.rating)
              ? -1
              : 0,
        );
        break;
      default:
        newList.sort((a, b) =>
          // if(parseInt(a.rating) > parseInt(b.rating)) return 1;
          parseInt(a.rating) > parseInt(b.rating)
            ? -1
            : parseInt(b.rating) > parseInt(a.rating)
              ? 1
              : 0,
        );
        break;
    }
    setFilteredItemCount(newList.length);
    newList = newList.slice(
      (filters.pageNumber - 1) * filters.pagesize,
      filters.pageNumber * filters.pagesize,
    );
    setTemplateList(newList);
  }

  const selectCategory = (ev, item) => {
    ev.preventDefault();
    // If this is not a left click
    if (ev.button !== 0) {
      return;
    }
    setCurrentCategory(item);
    // updateFilter('category', item);
  };
  const selectPricing = (ev, item) => {
    ev.preventDefault();
    // If this is not a left click
    if (ev.button !== 0) {
      return;
    }
    setPricing(item);
    // updateFilter('pricing', item);
  };

  return (
    <div>
      {selectTemplateOny === true ? (
        <TemplateContainer
          currentPricing={currentPricing}
          selectPricing={selectPricing}
          updateFilter={updateFilter}
          switchLayoutView={switchLayoutView}
          layoutView={layoutView}
          currentCategory={currentCategory}
          selectCategory={selectCategory}
          loadingStatus={loadingStatus}
          templateList={templateList}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          selectTemplateOny={selectTemplateOny}
          switchTemplate={switchTemplate}
          dispatch={dispatch}
        />
      ) : (
        <div className="bg-white flex flex-col h-screen justify-between text-black">
          <div>
            <DashboardHeader
              user={user}
              userData={userData}
              dispatch={dispatch}
            />
          </div>
          <div className="flex mb-auto">
            <div className="container mx-auto md:px-8">
              <div className="flex px-10 justify-between">
                <div className="w-full pl-6 text-4xl text-gray-800">
                  Create New Project
                </div>
              </div>
              <div className="flex px-10 items-end justify-between">
                <div className="my-4 md:mr-2 md:mb-0 w-1/2">
                  <label className="block mb-2 text-sm" htmlFor="projectName">
                    Project Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
                    id="projectName"
                    name="projectName"
                    type="text"
                    defaultValue="My Resume Project"
                    placeholder="Project Name"
                  />
                </div>
                {selectedTemplate ? (
                  <Button
                    type="primary"
                    onClick={() => {
                      console.log('test button');
                      handleCreateProject();
                    }}
                    className="text-white"
                  >
                    <span className="flex flex-row items-center whitespace-no-wrap ">
                      <FaFolderPlus size={28} className="text-gray-800 pr-2" />
                      Create Project
                    </span>
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="text-white opacity-70 cursor-not-allowed"
                  >
                    <span className="flex flex-row items-center whitespace-no-wrap ">
                      <FaFolderPlus size={28} className="text-gray-800 pr-2" />
                      Create Project
                    </span>
                  </Button>
                )}
              </div>
              {loadingCreateStatus === true ? (
                <div>
                  <DotsLoading loadingText="Please Wait..." />
                </div>
              ) : (
                <> </>
              )}
              {!loadingCreateStatus && selectedTemplate ? (
                <div className="flex pt-4 flex-col px-10">
                  <span className="text-sm">
                    Selected Template:
                    <span className="text-xl pl-2">
                      {selectedTemplate.name}
                    </span>
                  </span>
                </div>
              ) : (
                <> </>
              )}
              <div className="relative w-full text-center">
                {submitError && (
                  <p className="pt-2 text-red-600 font-normal text-sm">
                    {submitError.status}
                  </p>
                )}
              </div>
              <div className="flex pt-6 flex-col px-10">
                <div className="text-lg mb-2">Choosing a Starting Template</div>
                <TemplateContainer
                  currentPricing={currentPricing}
                  selectPricing={selectPricing}
                  updateFilter={updateFilter}
                  switchLayoutView={switchLayoutView}
                  layoutView={layoutView}
                  currentCategory={currentCategory}
                  selectCategory={selectCategory}
                  loadingStatus={loadingStatus}
                  templateList={templateList}
                  selectedTemplate={selectedTemplate}
                  setSelectedTemplate={setSelectedTemplate}
                  selectTemplateOny={selectTemplateOny}
                  switchTemplate={switchTemplate}
                  dispatch={dispatch}
                />
              </div>
            </div>
          </div>
          <div className="mx-4 mt-8">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

CreateNewProject.propTypes = {};

CreateNewProject.defaultProps = {
  selectTemplateOny: true,
};

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
)(CreateNewProject);
