import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import { employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/adminuser');
      setDataSource(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

  }, []);

  const editing = { allowDeleting: true, allowEditing: true };
  console.log(dataSource)


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="employer" />
      <GridComponent
        dataSource={dataSource}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
