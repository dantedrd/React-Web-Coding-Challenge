import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import './index.css';

export default function Filter(props) {
  const [search, setSearch] = useState("");
  const [timeBefore, setTimeBefore] = useState(null as any);
  const [timeAfter, setTimeAfter] = useState(null as any);

  return (<div className="container">
    <div className="row searchFilter" >
      <div className="col-sm-12" >
        <div className="input-group" >
          <input id="table_filter" type="text" className="form-control input-style" aria-label="Text input with segmented button dropdown" onChange={(event)=>{
                setSearch(event.currentTarget.value); 
          }}/>
          <input id="table_filter" type="date" className="form-control input-style" aria-label="Text input with segmented button dropdown" onChange={(event)=>{
                
                setTimeBefore(new Date(event.currentTarget.value)); 
          }} />
          <input id="table_filter" type="date" className="form-control input-style" aria-label="Text input with segmented button dropdown" onChange={(event)=>{
                setTimeAfter(new Date(event.currentTarget.value)); 
          }} />
          <button type="button" className="btn btn-primary buttonSearch" onClick={()=>{
            props.search({
              search,
              timeBefore,
              timeAfter
            });
          }}>search</button>
        </div>
      </div>
    </div></div>)
}