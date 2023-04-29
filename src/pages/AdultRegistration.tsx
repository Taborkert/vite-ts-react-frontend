import * as React from "react";
import Typography from "@mui/material/Typography";
import MainServiceField, {
  MainServiceFieldValue,
} from "../form-fields/MainServiceField";
import AdvanceFee from "../form-fields/AdvanceFee";

interface AdultReg {
  mainService: MainServiceFieldValue;
  advanceFee: boolean;
}

interface Action {
  field: string;
  value: any;
}

const reducer = (state: AdultReg, { field, value }: Action) => ({
  ...state,
  [field]: value,
});

const defaultValues = {
  mainService: "no-service",
  advanceFee: false,
};

export default function AdultRegistration() {
  const [form, dispatchForm] = React.useReducer(
    reducer,
    defaultValues as AdultReg
  );

  const handleMainServiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchForm({
      field: "mainService",
      value: (event.target as HTMLInputElement).value as MainServiceFieldValue,
    });
  };

  const handleAdvanceFeeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchForm({
      field: "advanceFee",
      value: event.target.checked,
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
      <AdvanceFee checked={form.advanceFee} onChange={handleAdvanceFeeChange} />
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Általános adatok
      </Typography>
    </>
  );
}
