import React from "react";
import { PrimaryText } from "../../../../components/utils/typography";
import { Button, Stack, useTheme } from "@mui/material";
import { registerHooks } from "../hooks/registerHooks";
import { Formik } from "formik";
import Space from "../../../../components/Layouts/Space";

import InputFeilds from "../../../../components/utils/Inputs/InputFeilds";
import RowBox from "../../../../components/Layouts/RowBox";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  const theme = useTheme();

  const {
    initialState,
    validationSchema,
    OnSubmit,
    hidePass,
    HandlehidePass,
    hidePass2,
    HandlehidePass2,
  } = registerHooks();

  return (
    <Stack
      p={5}
      bgcolor={theme.palette.primary.dark}
      width={{
        xs: "93%",
        sm: "80%",
        lg: "40%",
        md: "60%",
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
        text={"Please register to continue"}
        color={theme.palette.primary.light}
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
          const { email, confirmPassword, password, fullName } = values;

          return (
            <>
              <Space space={"20px"} />
              <Stack width={"100%"} spacing={3} display="flex">
                <InputFeilds
                  label={"fullName"}
                  error={errors.fullName && touched.fullName}
                  helperText={
                    errors.fullName && touched.fullName ? errors.fullName : ""
                  }
                  value={fullName}
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  name={"fullName"}
                  onBlur={() => {
                    setFieldTouched("fullName", true);
                  }}
                  // margin
                />
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
                  hidePass={hidePass}
                  HandlehidePass={HandlehidePass}
                  type={hidePass ? "text" : "password"}
                />

                <InputFeilds
                  error={errors.confirmPassword && touched.confirmPassword}
                  helperText={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : ""
                  }
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  onBlur={() => {
                    setFieldTouched("confirmPassword", true);
                  }}
                  label="Your confirmPassword"
                  name={"confirmPassword"}
                  value={confirmPassword}
                  hidePass={hidePass2}
                  HandlehidePass={HandlehidePass2}
                  type={hidePass2 ? "text" : "password"}
                />
              </Stack>
              <Space />

              <RowBox>
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"14px"}
                  text={"You have an account ?  "}
                  color={theme.palette.primary.contrastText}
                  cursor
                  lineHeight={3.5}
                  mr={1}
                />
                <Link to={"/login"}>
                  <PrimaryText
                    fontWeight={"500"}
                    fontSize={"14px"}
                    text={"Login"}
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
                  width:"100%",
                  alignSelf:"center",
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                    color: theme.palette.primary.light,
                  },
                }}
                onClick={handleSubmit}
                pt={3}
              >
                Register
              </Button>
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default RegisterForm;

<></>;
