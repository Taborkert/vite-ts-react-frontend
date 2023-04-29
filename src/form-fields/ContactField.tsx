import { ChangeEventHandler } from "react";
import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

interface ContactField {
  zipCode: string;
  onZipCodeChange: ChangeEventHandler;
  city: string;
  onCityChange: ChangeEventHandler;
  address: string;
  onAddressChange: ChangeEventHandler;
  phone: string;
  onPhoneChange: ChangeEventHandler;
  email: string;
  onEmailChange: ChangeEventHandler;
  profession: string;
  onProfessionChange: ChangeEventHandler;
}

export default function ContactField({
  zipCode,
  onZipCodeChange,
  city,
  onCityChange,
  address,
  onAddressChange,
  phone,
  onPhoneChange,
  email,
  onEmailChange,
  profession,
  onProfessionChange,
}: ContactField): JSX.Element {
  return (
    <BaseField title="Elérhetőség">
      <>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
          useFlexGap
          sx={{ my: 2 }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            useFlexGap
            sx={{ width: "100%" }}
          >
            <TextField
              label="Irányítószám"
              value={zipCode}
              onChange={onZipCodeChange}
              sx={{ width: "30%" }}
            />
            <TextField
              label="Település"
              value={city}
              onChange={onCityChange}
              sx={{ width: "70%" }}
            />
          </Stack>
          <TextField
            label="Cím többi része"
            value={address}
            onChange={onAddressChange}
            sx={{ width: "100%" }}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
          useFlexGap
          sx={{ width: "100%", my: 2 }}
        >
          <TextField
            label="Telefonszám"
            type="tel"
            value={phone}
            onChange={onPhoneChange}
            sx={{ width: "100%" }}
          />
          <TextField
            label="E-mail"
            type="email"
            value={email}
            onChange={onEmailChange}
            sx={{ width: "100%" }}
          />
        </Stack>
        <TextField
          label="Foglalkozás (nem kötelező megadni)"
          value={profession}
          onChange={onProfessionChange}
          sx={{ width: "100%" }}
        />
      </>
    </BaseField>
  );
}
