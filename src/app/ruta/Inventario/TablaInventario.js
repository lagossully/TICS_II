import {useTable} from "react-table";
import React, {useMemo, useEffect} from 'react';
import { useNavigate, Link} from "react-router-dom";
import { Form, Button, Card, Col} from 'react-bootstrap';
function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

function TablaInventario (){
  const navigation = useNavigate();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/mod/inven")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => console.error(err))
  }, []);

  const columns = React.useMemo( () => [
      {
          Header: 'Producto',
          accessor: 'producto'
      },
      {
          Header: 'Cantidad',
          accessor: 'cantidad',
      },
      {
          Header: 'Caduca',
          accessor: 'caduca',
      },
      {
          Header: 'Proveedor',
          accessor: 'proveedor',
      },
  ], [])





    return(
      <>
          <Table columns={columns} data={data}/>
          <div className="row">
              <Button variant="primary" onClick={() => navigation("/lot")}>Agregar Lote</Button>
          </div>
      </>
    )
}
export default TablaInventario;