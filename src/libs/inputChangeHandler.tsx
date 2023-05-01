const inputChangeHandler =
  (setter: Function) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, type } = event.target;
    setter(type === "checkbox" ? checked : value);
  };
export default inputChangeHandler;
