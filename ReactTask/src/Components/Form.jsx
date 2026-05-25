import React, { useContext } from "react";
import InputFields from "./InputFields";
import { FormContext } from "../App";

function Form() {
  const { mode } = useContext(FormContext);

  return (
    <div className={`reg-form-container ${mode}`}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Registration Form
      </h2>
      <InputFields />
    </div>
  );
}

export default Form;
