function Input({ id, info, reg, error, type = "text", rules = {}, errorMsg }) {
  return (
    <div className="form-field-container">
      <label htmlFor={id}>{info}</label>
      <input {...reg(info, rules)} type={type} placeholder={info} id={id} />
      {error && <p>{errorMsg}</p>}
    </div>
  );
}
export default Input;
