import React from 'react';
import PropTypes from 'prop-types';
import DistometerTableItem from '../DistometerTableItem/DistometerTableItem';

export default function DistometerTableData(props) {
  const { data, onDeleteItem, onEditItem } = props;

  return (
    <div className="table__body">
      {data.map((value) => <DistometerTableItem key={value.id} item={value}
        onDeleteItem={() => onDeleteItem(value.id)}
        onEditItem={() => onEditItem(value)}
      />)}
    </div>
  );
}

DistometerTableData.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
};
