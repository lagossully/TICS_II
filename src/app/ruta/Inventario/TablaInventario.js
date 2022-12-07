import {useTable} from "react-table";
import React, {useMemo, useEffect} from 'react';
import { useNavigate, Link} from "react-router-dom";
import { Form, Button, Card, Col, Row} from 'react-bootstrap';
import styled from "styled-components";




const Styles = styled.div`
padding: 1rem;

  .user {
    background-color: blue;
    color: white;
  }

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

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
          <card>
      <center><h1>Inventario</h1></center>
      <br></br>
      <center>
    <Styles>
      <Table columns={columns} data={data} />
      </Styles>
      </center>
      </card>
      </> 
    )
}
export default TablaInventario;