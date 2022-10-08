import React, { useCallback, useRef, useState } from 'react';
import DataTable from 'react-data-table-component';
import {Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEdit, faTrash, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const EditableCell = ({ row, index, column, col, onChange }) => {
  const [value, setValue] = useState(row[column.selector]);

  const handleOnChange = e => {
    setValue(e?.target ? e.target.value : e);
    onChange?.(e);
  };

  if (column?.editing) {
    if(column.editor) {
      return column.editor(column, value, onChange)
    }
    return (
      <input
        type={column.type || 'text'}
        name={column.selector}
        style={{ width: '100%' }}
        onChange={handleOnChange}
        value={value}
      />
    );
  }

  if (col.cell) {
    return col.cell(row, index, column);
  }

  if(col.format) {
      return col.format(row, index)
  }

  return row[column.selector];

};

const EditableDataTable = ({title, columns, data}) => {
  const [innerData, setInnerData] = useState(data);
  const [editingId, setEditingId] = useState('');
  let formData = useRef({}).current;
  const isEditing = record => record.id === editingId;

  const formOnChange = event => {
    const nam = event.target.name;
    const val = event.target.value;

    formData = {
      ...formData,
      [nam]: val,
    };
  };

  const edit = record => {
    setEditingId(record.id);
  };

  const cancel = () => {
    setEditingId('');
  };

  const save = item => {
    const payload = { ...item, ...formData };
    const tempData = [...innerData];


    const index = tempData.findIndex(item => editingId === item.id);
    if (index > -1) {

      const item = tempData[index];
      tempData.splice(index, 1, {
        ...item,
        ...payload,
      });
      setEditingId('');
      setInnerData(tempData);
    }
  };

  const mergedColumns = columns.map(col => {
      console.log(col)
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      cell: (row, index, column) => {
        const editing = isEditing(row);
        return (
          <EditableCell
            row={row}
            index={index}
            column={{ ...column, editing }}
            col={col}
            onChange={formOnChange}
          />
        );
      },
    };
  });

  const createColumns = useCallback(() => {
    return [
      ...mergedColumns,
      {
        name: '',
        allowOverflow: true,
        minWidth: '90px',
        cell: row => {
          const editable = isEditing(row);
          if (editable) {
            return (
              <div>
                  <Button variant="outline-light"><FontAwesomeIcon onClick={() => save(row)} icon={faSave}/></Button>
                  <Button variant="outline-light"><FontAwesomeIcon onClick={cancel} icon={faWindowClose}/></Button>
              </div>
            );
          }
          return (
              <div>
                  <Button variant="outline-light"><FontAwesomeIcon onClick={() => edit(row)} icon={faEdit}/></Button>
                  <Button variant="outline-light"><FontAwesomeIcon icon={faTrash}/></Button>
              </div>
          );
        },
      },
    ];
  }, [mergedColumns]);

  return (
    <DataTable
      title={title}
      columns={createColumns()}
      data={innerData}
      defaultSortField="title"
    />
  );
};

export default EditableDataTable;