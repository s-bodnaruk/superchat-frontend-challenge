export default interface FormikInputProps {
  name: string;
  label?: string;
  id?: string;
  type?: "text";
  placeholder?: string;
  onChange?: (
    e: React.FormEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>
  ) => void;
}
