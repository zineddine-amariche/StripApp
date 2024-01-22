import React from "react";
import { PrimaryText } from "../../../../components/utils/typography";
import { Box, Button, Stack, useTheme } from "@mui/material";
import { authHooks } from "../hooks/authHooks";
import { Formik } from "formik";
import Space from "../../../../components/Layouts/Space";
import RowBox from "../../../../components/Layouts/RowBox";
import InputFeilds from "../../../../components/utils/Inputs/InputFeilds";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const theme = useTheme();

  const { initialState, validationSchema, OnSubmit, hidePass, HandlehidePass } =
    authHooks();

  return (
    <Stack
      p={5}
      bgcolor={theme.palette.primary.dark}
      width={{
        xs: "93%",
        sm: "80%",
        lg: "30%",
        md: "50%",
      }}
      borderRadius={2}
    >
      <PrimaryText
        fontWeight={"500"}
        fontSize={"25px"}
        text={"Welcome to e-learning !"}
        color={theme.palette.primary.light}
        cursor
      />
      <PrimaryText
        fontWeight={"500"}
        fontSize={"18px"}
        text={"Please loging to continue"}
        color={theme.palette.primary.contrastText}
        cursor
        lineHeight={2.5}
      />

      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          OnSubmit(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
        }) => {
          const { email, password } = values;

          return (
            <>
              <Space space={"20px"} />
              <Stack width={"100%"} spacing={3} display="flex">
                <InputFeilds
                  label={"E-mail"}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                  value={email}
                  onChange={handleChange}
                  autoFocus={true}
                  autoComplete="email"
                  required={true}
                  id={"outlined-controlled"}
                  name={"email"}
                  onBlur={() => {
                    setFieldTouched("email", true);
                  }}
                />
                <InputFeilds
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  onBlur={() => {
                    setFieldTouched("password", true);
                  }}
                  label="Your password"
                  name={"password"}
                  value={password}
                  secureTextEntry={hidePass ? true : false}
                  type={hidePass ? "text" : "password"}
                  hidePass={hidePass}
                  HandlehidePass={HandlehidePass}
                />
              </Stack>
              <Space />
              <RowBox>
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"14px"}
                  text={"You don't have an account ?  "}
                  color={theme.palette.primary.contrastText}
                  cursor
                  lineHeight={3.5}
                  mr={1}
                />
                <Link to={"/register"}>
                  <PrimaryText
                    fontWeight={"500"}
                    fontSize={"14px"}
                    text={"Register"}
                    color={theme.palette.primary.light}
                    cursor
                    lineHeight={3.5}
                    textDecoration
                  />
                </Link>
              </RowBox>

              <Button
                variant="contained"
                sx={{
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.dark,
                  fontSize: 17,
                  mt:3,
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                    color: theme.palette.primary.light,
                  },
                }}
                onClick={handleSubmit}
                pt={3}
              >
                Login
              </Button>
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default LoginForm;

<></>;
