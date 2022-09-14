import React, { useState } from "react";
import { User } from "../../models/User";
import "./userForm.css";
const UserForm = () => {
  const [user, setUser] = useState<User>({} as User);

  const setUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [flag, setFlag] = useState<boolean>(false);

  //vamos a validar campos vacios
  const validarDatos = () => {
    // e.preventDefault();
    if (!user.nombre) {
      return setFlag(false);
    }

    if (!user.apellidoPaterno) {
      return setFlag(false);
    }

    if (!user.apellidoMaterno) {
      return setFlag(false);
    }
    if (!user.edad) {
      return setFlag(false);
    }
    if (!user.fechaNacimiento) {
      return setFlag(false);
    }

    setFlag(true);
  };

  //primera letra apellido paterno, vocal paterno, primera leta apellido materno, primera letra nombre
  const validarRfc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //let segundaLetra = handleSegundaLetraRfc();
    //console.log(segundaLetra);

    let primerLetraRfc = user.apellidoPaterno.slice(0, 1);
    let segundaLetra = handleSegundaLetraRfc(user.apellidoPaterno);
    let terceraLetraRfc = user.apellidoMaterno.slice(0, 1);
    let cuartaLetra = user.nombre.slice(0, 1);

    let splitFechaNacimiento = user.fechaNacimiento.split("-");
    let anio = splitFechaNacimiento[0].slice(2, 4);
    let mes = splitFechaNacimiento[1].slice(0, 2);
    let dia = splitFechaNacimiento[2].slice(0, 2);

    let fechaRfc = anio + mes + dia;

    let rfc =
      primerLetraRfc + segundaLetra + terceraLetraRfc + cuartaLetra + fechaRfc;

    if (user.rfc.toUpperCase() === rfc.toUpperCase()) {
      return alert("el rfc es correcto");
    }
    alert("el rfc es incorrecto");
  };

  const handleSegundaLetraRfc = (apellidoPaterno: string) => {
    let palabra = apellidoPaterno.split("");
    let vocales = ["a", "e", "i", "o", "u"];

    let array: string[] = [];
    palabra.find((letra) => {
      vocales.map((e) => {
        if (letra === e) {
          array.push(letra);
        }
      });
    });

    return array[0];
  };

  return (
    <>
      <form onSubmit={(e) => validarRfc(e)}>
        <input
          value={user.nombre}
          name="nombre"
          onChange={(e) => setUserData(e)}
          placeholder="Nombre"
          type="text"
        />
        <input
          value={user.apellidoPaterno}
          name="apellidoPaterno"
          onChange={(e) => setUserData(e)}
          placeholder="Apellido Paterno"
          type="text"
        />
        <input
          value={user.apellidoMaterno}
          name="apellidoMaterno"
          onChange={(e) => setUserData(e)}
          placeholder="Apellido Materno"
          type="text"
        />
        <input
          value={user.edad}
          name="edad"
          onChange={(e) => setUserData(e)}
          placeholder="Edad"
          type="number"
        />
        <input
          value={user.fechaNacimiento}
          name="fechaNacimiento"
          placeholder="Fecha de Naciemiento"
          onChange={(e) => setUserData(e)}
          type="date"
        />

        <label onClick={validarDatos}>Validar</label>

        {flag && (
          <div>
            <input
              value={user.rfc}
              name="rfc"
              placeholder="Rfc"
              onChange={(e) => setUser({ ...user, rfc: e.target.value })}
              type="text"
            />
          </div>
        )}

        <button type="submit">Confirmar</button>
      </form>
    </>
  );
};

export default UserForm;
