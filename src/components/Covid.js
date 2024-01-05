import React, { useEffect, useState } from "react";

import './Covid.css';


export default function Covid() {

    const[data, setData]=useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
     //await means we have to wait
      console.log(res);
      const data = await res.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0]);


    } catch (err) {
      console.log(err);
    }

    //fetch returns a promise-data gets accepted or rejected
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (<div className="allLi">

<ul>
    <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">
                    <span>OUR </span>
                    COUNTRY
                </p>

                <p className="card__total card__small">INDIA</p>
            </div>

        </div>
    </li>
    <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">
                    <span>TOTAL </span>
                    RECOVERED
                </p>

                <p className="card__total card__small">{data.recovered}</p>
            </div>

        </div>
    </li>
    <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">
                    <span>TOTAL </span>
                    CONFIRMED
                </p>

                <p className="card__total card__small">{data.confirmed}</p>
            </div>

        </div>
    </li>
    </ul>
    <ul>
    <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">
                    <span>TOTAL </span>
                    DEATH
                </p>

                <p className="card__total card__small">{data.deaths}</p>
            </div>

        </div>
    </li>
    <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">
                    <span>TOTAL </span>
                    ACTIVE
                </p>

                <p className="card__total card__small">{data.active}</p>
            </div>

        </div>
    </li>
    <li className="card">
        <div className="card__main">
            <div className="card__inner">
                <p className="card__name">
                    <span>LAST </span>
                    UPDATED
                </p>

                <p className="card__total card__small">{data.lastupdatedtime}</p>
            </div>

        </div>
    </li>
</ul>


  </div>);
}
