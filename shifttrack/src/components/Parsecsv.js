import React from 'react';
import { Button } from 'react-bootstrap';
import Papa from 'papaparse';

const generateTableHead=(table, data)=> {
    var thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement('th');
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

const generateTableRows=(table, data)=> {
    let newRow = table.insertRow(-1);
    data.map((row, index) => {
      let newCell = newRow.insertCell();
      let newText = document.createTextNode(row);
      newCell.appendChild(newText);
    });
  }

async function getData() {
    const response = await fetch('volunteer_attendance_data.csv');
    const data = await response.text();
    console.log(data);
  }

function Parsecsv() {
  return (
    <div className="App">

      <header className="App-header">
        Read CSV
      </header>
      <input type="file" id="upload-csv" accept=".csv"></input>
      <Button
        variant="primary"
        onClick={getData()}
          /*Papa.parse(document.getElementById('upload-csv').files[0],
            {
              download: true,
              header: true,
              complete: function (results) {
                console.log(results);
                let i = 0;
                results.data.map((data, index) => {
                  if (i === 0) {
                    let table = document.getElementById('tbl-data');
                    generateTableHead(table, data);
                  } else {
                    let table = document.getElementById('tbl-data');
                    generateTableRows(table, data);
                  }
                  i++;
                });
              }
            })}*/
      >
        Read
    </Button>
    </div>
  );
}

export default Parsecsv;
