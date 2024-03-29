import React from "react";
import Input from "../utils/Input";
import { useId } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "./Navbar";

function FormLogin() {
  const idPrefix = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const handleFormSubmit = (dati) => {
    axios
      .post("http://localhost:3001/getUser", {
        dati: dati,
      })
      .then((dati) => handleVerification(dati.data))
      .catch((err) => console.log(err));
  };

  const handleVerification = (e) => {
    e === true
      ? (window.location = "/index/Home")
      : alert("Utente non trovato ");
  };

  return (
    <div className="form-container">
      <Navbar />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h3>Form Login</h3>
        <Input
          id={idPrefix + "-email"}
          rules={{
            required: true,
            pattern: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
          }}
          info="email"
          reg={register}
          error={errors.email}
          errorMsg="Inserire Mail Valida "
        />

        <Input
          id={idPrefix + "-password"}
          rules={{
            required: true,
            minLength: 8,
            maxLenght: 20,
          }}
          type="password"
          info="password"
          reg={register}
          error={errors.password}
          errorMsg="Inserire password Corretta"
        />
        <div className="form-field-container">
          <button type="submit">Invia</button>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
