import { useId } from "react";
import { useForm } from "react-hook-form";
import Input from "../utils/Input";
import Checkbox from "../utils/Checkbox";
import axios from "axios";
import Navbar from "./Navbar";
function FormRegistrazione() {
  const idPrefix = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const handleFormSubmit = (dati) => {
    axios
      .post("http://localhost:3001/setUser", {
        dati: dati,
      })
      .then((dati) => alert(dati.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <Navbar />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h3>Form Registrazione</h3>
        <Input
          id={idPrefix + "-nome"}
          rules={{ required: true }}
          info="nome"
          reg={register}
          error={errors.nome}
          errorMsg="Nome richiesto"
        />

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

        <Checkbox
          reg={register}
          info="privacy"
          error={errors.privacy}
          text="Accettare la policy"
          rules={{ required: true }}
          errorMsg="E' necessario visionare la policy"
        />
        <div className="form-field-container">
          <button type="submit">Invia</button>
        </div>
      </form>
    </div>
  );
}

export default FormRegistrazione;
