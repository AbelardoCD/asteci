import { useEffect, useState } from "react";
import { useClimaReducers } from "../../redux/climaReducer/useClimaReducer";
import "./table.css";
const Table = () => {
  //cosumimos de redux
  const { listClima, setClima } = useClimaReducers();

  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas";

  const getInformation = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setClima(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <>
      <table className="default">
        <thead>
          <tr>
            <th>_id </th>

            <th>cityid</th>

            <th>name</th>
            <th>state</th>
            <th>probabilityof precip</th>
            <th>relativehu midity</th>
            <th>Lastreportt ime formato (YYYY/MM /DD)</th>
            <th>LLUEVESI</th>
          </tr>
        </thead>
        <tbody>
          {listClima.map((clima) => (
            <tr>
              <td>{clima._id}</td>
              <td>{clima.cityid}</td>
              <td>{clima.name}</td>
              <td>{clima.state}</td>
              <td>{clima.probabilityofprecip}</td>
              <td>{clima.relativehumidity}</td>
              <td>{clima.lastreporttime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
