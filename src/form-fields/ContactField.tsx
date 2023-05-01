import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useSessionStorage } from "usehooks-ts";
import inputChangeHandler from "../libs/inputChangeHandler";

export default function ContactField(): JSX.Element {
  const [zipCode, setZipCode] = useSessionStorage("zipCode", "");
  const [city, setCity] = useSessionStorage("city", "");
  const [address, setAddress] = useSessionStorage("address", "");
  const [phone, setPhone] = useSessionStorage("phone", "");
  const [email, setEmail] = useSessionStorage("email", "");
  const [profession, setProfession] = useSessionStorage("profession", "");
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
              onChange={inputChangeHandler(setZipCode)}
              sx={{ width: "30%" }}
            />
            <TextField
              label="Település"
              value={city}
              onChange={inputChangeHandler(setCity)}
              sx={{ width: "70%" }}
            />
          </Stack>
          <TextField
            label="Cím többi része"
            value={address}
            onChange={inputChangeHandler(setAddress)}
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
            onChange={inputChangeHandler(setPhone)}
            sx={{ width: "100%" }}
          />
          <TextField
            label="E-mail"
            type="email"
            value={email}
            onChange={inputChangeHandler(setEmail)}
            sx={{ width: "100%" }}
          />
        </Stack>
        <TextField
          label="Foglalkozás (nem kötelező megadni)"
          value={profession}
          onChange={inputChangeHandler(setProfession)}
          sx={{ width: "100%" }}
        />
      </>
    </BaseField>
  );
}
