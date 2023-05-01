import Typography from "@mui/material/Typography";
import MainServiceField from "../form-fields/MainServiceField";
import AdvanceFeeField from "../form-fields/AdvanceFeeField";
import NameField from "../form-fields/NameField";
import BirthField from "../form-fields/BirthField";
import ContactField from "../form-fields/ContactField";

export default function AdultRegistration(): JSX.Element {
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        👨🏻👩🏻 Felnőtt jelentkezési űrlap
      </Typography>
      <MainServiceField />
      <AdvanceFeeField />
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Általános adatok
      </Typography>
      <NameField />
      <BirthField />
      <ContactField />
    </>
  );
}
