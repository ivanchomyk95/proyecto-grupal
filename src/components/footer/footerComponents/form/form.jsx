import React from "react";
import {
  inputStyle,
  inputContainer,
  fieldsetContainer,
  buttonStyle,
} from "./formStyles";

export default function Form() {
  return (
    <div className="mx-12 my-2 flex justify-center  ">
      <fieldset className="border-4 border-double border-slate-600 p-4 ring-slate-200  ring-offset-4 hover:ring-4">
        <legend>
          <h3>
            <b>Infórmate sobre ofertas especiales </b>
            <small className="mx-2">
              campos obligatorios <b>*</b>
            </small>
          </h3>
        </legend>
        <form
          action="#URL donde van los datos"
          method="#Método HTTP para enviar(GET//POST, siendo POST mas seguro)"
        >
          <div
            id="dataContainer"
            className="justify-evenly sm:flex sm:flex-row"
          >
            <fieldset id="DatosPersonales" className={fieldsetContainer}>
              <legend>
                <b>Datos Personales</b>
              </legend>
              <div className={inputContainer}>
                <label htmlFor="nombre">
                  Nombre <b>*</b>
                </label>
                <input
                  className={inputStyle}
                  type="text"
                  name="nombre"
                  id="nombre"
                  required
                  minLength="6"
                  maxLength="32"
                  placeholder="Nombre y Apellidos"
                />
              </div>
              <div className={inputContainer}>
                <label htmlFor="cumpleaños">Cumpleaños</label>
                <input
                  type="date"
                  name="cumpleaños"
                  id="cumpleaños"
                  className={inputStyle}
                />
              </div>
              <div className={inputContainer}>
                <label htmlFor="sexo">Sexo</label>
                <input
                  list="sexos"
                  name="sexo"
                  id="sexo"
                  className={inputStyle}
                />
                <datalist id="sexos">
                  <option
                    className="focus:outline-none"
                    value="Masculino"
                  ></option>
                  <option value="Femenino"></option>
                </datalist>
              </div>
            </fieldset>
            <fieldset className={fieldsetContainer}>
              <legend>
                <b>Datos de la cuenta</b>
              </legend>
              <div className={inputContainer}>
                <label htmlFor="email">
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="xxxx@email.com"
                  required
                  maxLength="52"
                  autoComplete="email"
                  className={inputStyle}
                />
              </div>
              <div className={inputContainer}>
                <label htmlFor="contraseña">Contraseña * </label>
                <input
                  type="password"
                  name="contraseña"
                  id="contraseña"
                  pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
                  required
                  autoComplete="current-password"
                  className={inputStyle}
                />
                <small>min 8 caracteres, 1 mayúscula, 1 minúscula</small>
              </div>
            </fieldset>
          </div>
          <fieldset className={fieldsetContainer}>
            <details>
              <summary className="cursor-pointer">
                Lea los términos y condiciones
              </summary>
              <h3>
                <b>Términos y Condiciones</b>
              </h3>
              <p className="max-w-lg">
                La información provista como sexo,edad o su cumpleaños serán
                utilizadas para seleccionas ofertas para ti.
              </p>
            </details>
            <label htmlFor="acuerdo">
              <b>
                Estoy de acuerdo con los términos y condiciones
                <input
                  type="checkbox"
                  name="términos"
                  id="acuerdo"
                  required
                  className="mx-3 size-5"
                />
              </b>
            </label>
          </fieldset>
          <div className="text-center">
            <button type="submit" className={buttonStyle}>
              SUSCRIBIRTE
            </button>
            <button type="reset" className={buttonStyle}>
              LIMPIAR
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
