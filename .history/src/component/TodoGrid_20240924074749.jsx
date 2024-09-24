import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TodoGrid = ({ todos, handleDelete }) => {
    
    const columnDefs = [
        { headerName: "Description", field: "description", filter: true, floatingFilter: true },
        { headerName: "Date", field: "duedate", filter: true, floatingFilter: true },
        {
            headerName: "Priority",
            field: "priority",
            filter: true,
            floatingFilter: true,
            cellStyle: params => params.value === 'High' ? { color: 'red', fontWeight: 'bold' } : {}
        },
        {
            headerName: "Action",
            field: "action",
            cellRendererFramework: (params) => (
                <button onClick={() => handleDelete(params.node.rowIndex)}>Delete</button>
            ),
            editable: false,
            filter: false,
        }
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={todos}
                columnDefs={columnDefs}
                animateRows={true}
                rowSelection="single"
                defaultColDef={{
                    sortable: true,
                    filter: true,
                }}
            />
        </div>
    );
};

export default TodoGrid;
