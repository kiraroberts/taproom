import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';
import TapDetail from './TapDetail';

function Employee(props) {
  let optionalSelectedTapContent = null;
  if (props.selectedTap != null) {
    optionalSelectedTapContent = <TapDetail selectedTap={props.tapList[props.selectedTap]} />;
  }
  return (
    <div>
      <h2>Employee</h2>
      {optionalSelectedTapContent}
      <TapList
        tapList={props.tapList}
        currentRouterPath={props.currentRouterPath}
        onTapSelection={props.onTapSelection} />
    </div>
  );
}

Employee.propTypes = {
  tapList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTapSelection: PropTypes.func.isRequired,
  selectedTap: PropTypes.string
};

export default Employee;