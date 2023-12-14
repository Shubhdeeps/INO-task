import { Container } from "@mui/material";
import React from "react";
import CustomAppBar from "./Header";

type IProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: IProps) {
  return (
    <>
      <CustomAppBar />
      <Container
        sx={{
          my: 3,
        }}
        maxWidth="xl"
      >
        {children}
      </Container>
    </>
  );
}
