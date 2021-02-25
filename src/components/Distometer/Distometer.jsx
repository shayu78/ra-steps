import React, { useState } from 'react';
import DistometerInput from '../DistometerInput/DistometerInput';
import DistometerTableHeader from '../DistometerTableHeader/DistometerTableHeader';
import DistometerTableData from '../DistometerTableData/DistometerTableData';
import DistometerModel from '../../DistometerModel';
import { nanoid } from 'nanoid';

const DEFAULT_FORM_VALUE = {
  id: '',
  date: '',
  distance: '',
};

export default function Distometer() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(DEFAULT_FORM_VALUE);

  const sortData = data.sort((a, b) => b.date > a.date ? 1 : -1);

  const handleSubmit = (event) => {
    const index = data.findIndex((value) => value.date === event.date);
    if (index === -1) {
      const model = new DistometerModel(nanoid(), event.date, event.distance);
      setData((prev) => [...prev, model]);
      setForm({ id: '', date: '', distance: '' });
      return;
    }
    const copy = data.slice();
    if (event.id) {
      copy[index].distance = event.distance;
      setForm({ id: '', date: event.date, distance: event.distance });
    } else copy[index].distance = (+copy[index].distance + +event.distance).toString();
    setData(copy);
  }

  const handleDeleteItem = (event) => {
    setData((prev) => prev.filter((value) => value.id !== event));
    setForm((prev) => ({ ...prev, id: '' }));
  }

  const handleEditItem = (event) => setForm({ id: event.id, date: event.date, distance: event.distance });

  return (
    <React.Fragment>
      <DistometerInput value={form} onHandleSubmit={handleSubmit} />
      <DistometerTableHeader />
      <DistometerTableData data={sortData} onDeleteItem={handleDeleteItem} onEditItem={handleEditItem} />
    </React.Fragment>
  );
}
