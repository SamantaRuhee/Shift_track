import React from 'react';
import Papa from 'papaparse';
class Parsecsv extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    });
  };

  updateData(result) {
    var data = result.data;
    let date = data.map(({ date }) => date)
    let shift = data.map(({ shift }) => shift)
    let shiftReason = data.map(({ shiftReason }) => shiftReason)
    let volunteerId = data.map(({ volunteerId }) => volunteerId)
    let volunteerName = data.map(({ volunteerName }) => volunteerName)
    console.log(date);
    console.log(shift);
    console.log(shiftReason);
    console.log(volunteerId);
    console.log(volunteerName);
    
  }

  render() {
    return (
      <div className="App">
        <h2>Import your CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <p/>
        <button onClick={this.importCSV}> Import</button>
      </div>
    );
  }
}

export default Parsecsv;
