import {useTable} from "react-table";
import React, {useMemo, useEffect} from 'react';
import { useNavigate, Link} from "react-router-dom";
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

function Tabla (){
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
  
  // const Handler = (e)=> {
  //   console.log(e)
  //   sessionStorage.setItem("temp",e);
  //   navigation("/mod");
  // }

  const columns = React.useMemo( () => [
      {
          Header: 'Nombre',
          accessor: 'nombre', // accessor is the "key" in the data
          Cell: (props) => {
            const {value, row}=props;
            // console.log(row)
            // sessionStorage.setItem("temp", row.original._id)
            return(
              // <Link to={"#"} onClick={()=>Handler(row.original._id)}>
              <Link to={"/mod"} onClick={()=>sessionStorage.setItem("temp",row.original._id)}>
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
      }
  ], [])





    return(
        <Table columns={columns} data={data} />
    )
}
export default Tabla;