import {useTable} from "react-table";
import React, {useMemo, useEffect} from 'react';
import { useNavigate, Link} from "react-router-dom";
import { Button } from "react-bootstrap";
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

function UserTable (){
  const navigation = useNavigate();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/mod/user")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => console.error(err))
  }, []);

  const columns = React.useMemo( () => [
      {
          Header: 'Nombre',
          accessor: 'nombre',
          Cell: (props) => {
            const {value, row}=props;
            return(
              <Link to={"/modificarusuario"} onClick={()=>{sessionStorage.setItem("temp",row.original._id) 
                                              sessionStorage.setItem("modnom",row.original.nombre) 
                                              sessionStorage.setItem("modrut",row.original.rut) 
                                              sessionStorage.setItem("modmail",row.original.correo) 
                                              sessionStorage.setItem("modpro",row.original.perfil)  
                                              sessionStorage.setItem("horario",row.original.horario) }}>
                {value}
              </Link>
            )
          }
      },
      {
          Header: 'Rut',
          accessor: 'rut',
      },
      {
          Header: 'Correo',
          accessor: 'correo',
      },
      {
          Header: 'Perfil',
          accessor: 'perfil',
          Cell: (props) => {
            const {value}=props;
            return(
              value==0?"Peluquero":"Administrador"
            )
          }
      }
  ], [])





    return(
      <div>
        <Table columns={columns} data={data} />
        {/* <Button onClick={()=>console.log(data)}></Button> */}
        </div>
    )
}
export default UserTable;