import React from "react";
import { PrimaryText } from "../../../utils/typography";
import { Box, Button, Stack, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Plans } from "../../../../data/plans";
import RowBox from "../../../Layouts/RowBox";
import Space from "../../../Layouts/Space";
import { Check, CheckBox } from "@mui/icons-material";
import { display } from "@mui/system";
import { paymentsHooks } from "../hooks/paymentsHooks";

const PaeimentsForm = ({ choosePlan }) => {
  const theme = useTheme();

  const { result } = useSelector((state) => state.auth);

  return (
    <Stack
      pt={5}
      width={{
        xs: "93%",
        sm: "80%",
        lg: "70%",
        md: "90%",
      }}
      borderRadius={2}
    >
      <PrimaryText
        fontWeight={"500"}
        fontSize={"25px"}
        text={`welcome ${result?.data?.fullName}`}
        color={theme.palette.primary.dark}
        cursor
      />
      <PrimaryText
        fontWeight={"500"}
        fontSize={"18px"}
        text={"Please choose a plan to use our platforme"}
        color={theme.palette.primary.dark}
        cursor
        lineHeight={4.5}
      />

      <CPlans choosePlan={choosePlan} />
    </Stack>
  );
};

export default PaeimentsForm;

const CPlans = ({ choosePlan }) => {
  const theme = useTheme();

  return (
    <Stack
      gap={{
        xs: 3,
        sm: 4,
        lg: 10,
        md: 10,
      }}
      sx={{
        alignItems: "center",
        my: 3,
      }}
      flexWrap
      direction={{
        xs: "column",
        sm: "column",
        lg: "row",
        md: "row",
      }}
    >
      {Plans.map((i, index) => {
        return (
          <Box
            key={index}
            sx={{
              bgcolor: theme.palette.primary.dark,
              p: 3,
              width: {
                xs: "65%",
                sm: "55%",
                lg: "30%",
                md: "50%",
              },
              borderRadius: 1,
              height: 450,
              cursor: "pointer",
              position: "relative",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Stack
              sx={{
                width: "100%",
              }}
            >
              <PrimaryText
                fontWeight={"500"}
                fontSize={"22px"}
                text={i.name}
                color={
                  index == 0
                    ? theme.palette.primary.contrastText
                    : index == 2
                    ? theme.palette.primary.light
                    : theme.palette.secondary.light
                }
                cursor
                lineHeight={1.5}
              />
              <Space space={20} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"28px"}
                  text={i.value}
                  color={
                    index == 0
                      ? theme.palette.primary.contrastText
                      : index == 2
                      ? theme.palette.primary.light
                      : theme.palette.secondary.light
                  }
                  cursor
                  lineHeight={1.5}
                  mr={1}
                />
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"16px"}
                  text={i.per}
                  color={
                    index == 0
                      ? theme.palette.primary.contrastText
                      : index == 2
                      ? theme.palette.primary.light
                      : theme.palette.secondary.light
                  }
                  cursor
                  lineHeight={1.5}
                />
              </Box>
              <Space space={30} />

              {i?.type?.map((item, i) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      mt: 2,
                    }}
                    gap={2}
                    key={`use${i}`}
                  >
                    <Check
                      sx={{
                        bgcolor:
                          index == 0
                            ? theme.palette.primary.contrastText
                            : index == 2
                            ? theme.palette.primary.light
                            : theme.palette.secondary.light,
                      }}
                    />
                    <PrimaryText
                      fontWeight={"500"}
                      fontSize={"14px"}
                      text={item}
                      color={
                        index == 0
                          ? theme.palette.primary.contrastText
                          : index == 2
                          ? theme.palette.primary.light
                          : theme.palette.secondary.light
                      }
                      cursor
                      lineHeight={1.5}
                      mr={1}
                    />
                  </Box>
                );
              })}
            </Stack>

            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1,
                bgcolor: theme.palette.secondary.dark,
                color:
                  index == 0
                    ? theme.palette.primary.contrastText
                    : index == 2
                    ? theme.palette.primary.light
                    : theme.palette.secondary.light,
                fontSize: 17,
                position: "absolute",
                bottom: 20,
                width: "80%",
                fontSize: {
                  xs: 12,
                  sm: 14,
                  lg: 16,
                  md: 14,
                },
              }}
              onClick={() => {
                choosePlan(index + 1);
              }}
            >
              Choose Plan
            </Button>
          </Box>
        );
      })}
    </Stack>
  );
};
