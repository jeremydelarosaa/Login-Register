function Checkbox({ reg, info, text, error, rules = {}, errorMsg }) {
  return (
    <div className="form-field-container">
      <input type="checkbox" {...reg(info, rules)} />
      {text}
      {error && <p>{errorMsg}</p>}
    </div>
  );
}
export default Checkbox;
