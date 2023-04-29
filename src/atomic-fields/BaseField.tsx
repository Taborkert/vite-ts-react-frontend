import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface BaseFieldType {
  children: React.ReactElement;
  title: string;
}

export default function BaseField({
  children,
  title,
}: BaseFieldType): JSX.Element {
  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}
