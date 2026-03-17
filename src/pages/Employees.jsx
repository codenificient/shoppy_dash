import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  GridComponent,
  Inject,
  Page,
  Resize,
  Search,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import React, { useState, useEffect } from "react";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../data/dummy";

const Employees = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="m-2 rounded-3xl bg-white p-2 md:m-10 md:p-10">
      <Header category="Page" title="Employees" />

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-cyan-500" />
        </div>
      ) : (
        <GridComponent
          dataSource={employeesData}
          allowPaging
          allowSorting
          toolbar={["Search"]}
          width="auto"
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[Resize, Sort, ContextMenu, Search, Page, Toolbar, Edit]}
          />
        </GridComponent>
      )}
    </div>
  );
};

export default Employees;
