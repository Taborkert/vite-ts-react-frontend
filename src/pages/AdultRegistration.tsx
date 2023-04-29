import * as React from "react";
import Typography from "@mui/material/Typography";
import MainServiceField, {
  MainServiceFieldValue,
} from "../form-fields/MainServiceField";

interface AdultReg {
  mainService: MainServiceFieldValue;
}

interface Action {
  field: string;
  value: any;
}

const reducer = (state: AdultReg, { field, value }: Action) => ({
  ...state,
  [field]: value,
});

function AdultRegistration() {
  const [form, dispatchForm] = React.useReducer(reducer, {
    mainService: "no-service",
  });

  const handleMainServiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchForm({
      field: "mainService",
      value: (event.target as HTMLInputElement).value as MainServiceFieldValue,
    });
  };

  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        👨🏻👩🏻 Felnőtt jelentkezési űrlap
      </Typography>
      <MainServiceField
        value={form.mainService}
        onChange={handleMainServiceChange}
      />
    </>
  );
}

export default AdultRegistration;
