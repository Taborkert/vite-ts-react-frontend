import RadioGroup from "../atomic-fields/RadioGroup";
import useSessionForm from "../hooks/useSessionForm";

const radios = [
  {
    value: "no-service",
    label: "Nyaraló felnőtt (szolgálat nélkül) - 35.000 Ft",
  },
  { label: "Milyen szolgálatot vállalsz?" },
  { value: "attendant", label: "Kísérő szolgálat - 30.000 Ft" },
  { value: "animator", label: "Szabadidős animátor - 28.000 Ft" },
  { value: "full", label: "Teljes idős munkatárs - 9.000 Ft" },
];

export default function MainServiceField(): JSX.Element {
  const [mainService, handleMainService] = useSessionForm("mainService", null);
  return (
    <RadioGroup
      title="Milyen minőségben jössz a táborba?"
      value={mainService}
      onChange={handleMainService}
      radios={radios}
    />
  );
}
