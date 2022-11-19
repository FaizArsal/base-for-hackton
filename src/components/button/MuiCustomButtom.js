import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#1a2e35",
    '&:hover': {
        backgroundColor: "#1a2e35",
    },
}));

export default function MuiCustomizedButtons(props) {

    
    const { label, onClick, type, variant, className } = props;

    return (
        <ColorButton variant={variant ?? 'contained'} onClick={onClick} className={className}>{label}</ColorButton>
    );
}
