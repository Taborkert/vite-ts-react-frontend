import * as React from "react";
import Typography from "@mui/material/Typography";
import MainServiceField, {
  MainServiceFieldValue,
} from "../form-fields/MainServiceField";
import AdvanceFeeField from "../form-fields/AdvanceFeeField";
import NameField from "../form-fields/NameField";
import BirthField from "../form-fields/BirthField";

interface Action {
  field: string;
  value: any;
}

const reducer = (state: AdultRegState, { field, value }: Action) => ({
  ...state,
  [field]: value,
});

interface AdultRegState {
  mainService: MainServiceFieldValue;
  advanceFee: boolean;
  fullName: string;
  nickName: string;
  birthPlace: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
}

const defaultValues = {
  mainService: "no-service",
  advanceFee: false,
  fullName: "",
  nickName: "",
  birthPlace: "",
  birthYear: "",
  birthMonth: "",
  birthDay: "",
};

export default function AdultRegistration() {
  const [form, dispatchForm] = React.useReducer(
    reducer,
    defaultValues as AdultRegState
  );

  const inputValueChangeHandler =
    (field: string, isRadio: boolean = false) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target;
      dispatchForm({ field, value: isRadio ? checked : value });
    };

  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        👨🏻👩🏻 Felnőtt jelentkezési űrlap
      </Typography>
      <MainServiceField
        value={form.mainService}
        onChange={inputValueChangeHandler("mainService")}
      />
      <AdvanceFeeField
        checked={form.advanceFee}
        onChange={inputValueChangeHandler("advanceFee", true)}
      />
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Általános adatok
      </Typography>
      <NameField
        fullName={form.fullName}
        onFullNameChange={inputValueChangeHandler("fullName")}
        nickName={form.nickName}
        onNickNameChange={inputValueChangeHandler("nickName")}
      />
      <BirthField
        birthPlace={form.birthPlace}
        onBirthPlaceChange={inputValueChangeHandler("birthPlace")}
        birthYear={form.birthYear}
        onBirthYearChange={inputValueChangeHandler("birthYear")}
        birthMonth={form.birthMonth}
        onBirthMonthChange={inputValueChangeHandler("birthMonth")}
        birthDay={form.birthDay}
        onBirthDayChange={inputValueChangeHandler("birthDay")}
      />
    </>
  );
}
