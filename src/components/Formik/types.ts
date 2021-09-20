export default interface FormikInputs {
  label?: string;
  name: string;
  id?: string;
  type?: "text";
  placeholder?: string;
  onChange?: (
    e: React.FormEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
  ) => void;
}
