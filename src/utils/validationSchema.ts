import * as Yup from "yup";

const stringValidator = (max: number) =>
  Yup.string()
    .strict()
    .trim("No leading and trailing whitespace allowed")
    .max(max, `Must be ${max} characters or less`)
    .required("Required");

export const validationSchema = Yup.object({
  userName: stringValidator(25),
  repoName: stringValidator(25),
  avatarStyle: Yup.string().oneOf(["rounded", "square"]),
  metricBorderRadius: Yup.string().oneOf(["rounded", "square"]),
  metricFontSize: Yup.string().oneOf(["small", "medium", "large"]),
});
