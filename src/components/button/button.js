import { Button, createTheme } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { ThemeProvider } from '@mui/system';
import './button.css';

export default function BootstrapBtn(props) {
    const { label, onClick, classes } = props;

    return <>
        <button className={classes} onClick={onClick}>{label}</button>
    </>
};

const theme = createTheme({
    palette: {
        custom: {
            light: '#003566',
            main: '#003566',
            dark: '#003566',
            contrastText: '#fff',
          }
    },
});

export function MuiButton(props) {
    const { label, onClick, type, value, variant, className, color } = props;

    return <>
        <ThemeProvider theme={ theme }>
            <Button color={color} className={className} onClick={onClick} variant={variant ?? 'contained'} value={value}>{label}</Button>
        </ThemeProvider>
    </>

}
