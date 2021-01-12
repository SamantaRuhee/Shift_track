import React from 'react';

let employeeArray = [];
let fileUploaded = false;


const closeModal=(id)=>{
    let modal = document.getElementById(id);
    modal.style.display="none";
}

const openModal=(id)=>{
    let modal = document.getElementById(id);
    modal.style.display ="block";
}
const handleFiles = (files) =>{
    if(window.FileReader){
        getAsText(files[0]);
        fileUploaded = true;
    } else {
        alert('Could not open the file!')
    }
}

const getAsText=(fileToRead) =>{
    let reader = new FileReader();

    reader.readAsText(fileToRead);

    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

const loadHandler=(event) =>{
    let csv = event.target.result;
    processData(csv);
}

const errorHandler=(evt)=>{
    if(evt.target.error.name=="NoatReadableError"){
        alert('Cannot read file!');
    }
}

const processData=(csv)=>{
    var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        for (var i=0; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(';');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
        }
      console.log(lines);
}


const readcsv = () =>{
    return(<div>
        <Button>Select file</Button>
    </div>)
}

export default readcsv;