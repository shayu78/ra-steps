import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function DistometerTableItem(props) {
  const { item, onDeleteItem, onEditItem } = props;
  item.distance = Number(item.distance).toFixed(3);

  return (
    <div className="table__row">
      <span className="table__column">{moment(`${item.date}`).format('DD.MM.YYYY')}</span>
      <span className="table__column">{item.distance}</span>
      <div className="table__column action__icons_wrapper">
        <i className="material-icons action__icon" onClick={() => onEditItem(item)}>edit</i>
        <i className="material-icons action__icon" onClick={() => onDeleteItem(item.id)}>close</i>
      </div>
    </div>
  );
}

DistometerTableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
  }),
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
};
