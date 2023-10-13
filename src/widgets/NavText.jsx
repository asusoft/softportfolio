import {
    Typography,
} from '@mui/material'

const NavText = ({ children, onClick }) => (
    <Typography
        fontSize="clamp(1rem, 1.3rem, 3.5rem)"
        fontFamily="Rajdhani"
        color="#171717"
        sx={{
            transition: 'transform 0.3s ease-in-out',
            ':hover': {
                transform: 'scale(1.1)',
                cursor: "pointer",
                fontWeight: '500',
            }
        }}
        onClick={onClick}
    >
        {children}
    </Typography>
);

export default NavText
