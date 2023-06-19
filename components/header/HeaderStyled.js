import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// [theme.breakpoints.down('md')]: {
//     display: 'none',
// }
export const Div = styled(Box)(({ theme }) => ({
    display: 'flex',
    paddingRight:'2rem'
}))

export const Text = styled('h1')(({ theme }) => ({
    color: '#0878AF',
    margin: '.75rem',
    fontWeight: 'bold',
}))

export const HeaderNav = styled('header')(({ theme }) => ({
    display: 'flex',
    paddingTop: '1.5rem',
    justifyContent: 'space-between'

}))

export const Nav = styled('nav')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display:'none'
    }
}))

export const Button = styled('button')(({ theme }) => ({
    padding: '10px 10px',
    borderRadius: '12px',
    border: 'none',
    margin: '2px',
}))






