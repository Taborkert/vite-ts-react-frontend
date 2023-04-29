import * as React from "react";
import Typography from "@mui/material/Typography";
import MainServiceField, {
  MainServiceFieldValue,
} from "../form-fields/MainServiceField";

interface AdultReg {
  mainService: MainServiceFieldValue;
}

function AdultRegistration() {
  const [form, setForm] = React.useState<AdultReg>({
    mainService: "no-service",
  });

  const handleMainServiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      mainService: (event.target as HTMLInputElement)
        .value as MainServiceFieldValue,
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
