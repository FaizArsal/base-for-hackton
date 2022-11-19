import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#e76f51',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#e76f51',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e76f51',
    },
  },
});


export default function MuiCusInput(props) {
    const { label, variant, onChange, name, margin, id, helperText, error, disabled, required, min, max, type, value, placeholder } = props;
    return <>
        <CssTextField
            variant={variant ?? 'standard'}
            fullWidth
            label={label}
            onChange={onChange}
            name={name}
            helperText={helperText}
            disabled={false}
            required={required}
            error={error}
            margin={margin}
        />
    </>
}
