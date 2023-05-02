type Select = { value: string; label: string };

export const months: Select[] = [
  { value: "01", label: "Január" },
  { value: "02", label: "Február" },
  { value: "03", label: "Március" },
  { value: "04", label: "Április" },
  { value: "05", label: "Május" },
  { value: "06", label: "Június" },
  { value: "07", label: "Július" },
  { value: "08", label: "Augusztus" },
  { value: "09", label: "Szeptember" },
  { value: "10", label: "Október" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

export const days: Select[] = Array.from({ length: 31 }, (v, k) => {
  const label = k + 1 + "";
  return {
    value: label.padStart(2, "0"),
    label,
  };
});
