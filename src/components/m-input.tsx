import { TextField } from '@mui/material'

export default function mInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { placeholder, ...inputProps } = props;

  return (
    <TextField id="outlined-basic" label={placeholder} variant="outlined" inputProps={inputProps} />
  )
}
