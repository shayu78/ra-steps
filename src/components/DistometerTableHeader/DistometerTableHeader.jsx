import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function DistometerTableHeader(props) {
  const { value } = props;
  
  const data = value.map((item) => <div className="table__column" key={nanoid()}>{item}</div>);

  return (
    <div className="table__header">
      {data}
    </div>
  );
}

DistometerTableHeader.defaultProps = {
  value: [
    'Дата (ДД.ММ.ГГ)',
    'Пройдено (км)',
    'Действия',
  ],
};

DistometerTableHeader.propTypes = {
  value: PropTypes.array,
};
