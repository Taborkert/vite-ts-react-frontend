import BaseField from "../atomic-fields/BaseField";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import useSessionForm from "../hooks/useSessionForm";

export default function ContactField(): JSX.Element {
  const [zipCode, handleZipCode] = useSessionForm("zipCode", "");
  const [city, handleCity] = useSessionForm("city", "");
  const [address, handleAddress] = useSessionForm("address", "");
  const [phone, handlePhone] = useSessionForm("phone", "");
  const [email, handleEmail] = useSessionForm("email", "");
  const [profession, handleProfession] = useSessionForm("profession", "");
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
              onChange={handleZipCode}
              sx={{ width: "30%" }}
            />
            <TextField
              label="Település"
              value={city}
              onChange={handleCity}
              sx={{ width: "70%" }}
            />
          </Stack>
          <TextField
            label="Cím többi része"
            value={address}
            onChange={handleAddress}
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
            onChange={handlePhone}
            sx={{ width: "100%" }}
          />
          <TextField
            label="E-mail"
            type="email"
            value={email}
            onChange={handleEmail}
            sx={{ width: "100%" }}
          />
        </Stack>
        <TextField
          label="Foglalkozás (nem kötelező megadni)"
          value={profession}
          onChange={handleProfession}
          sx={{ width: "100%" }}
        />
      </>
    </BaseField>
  );
}
