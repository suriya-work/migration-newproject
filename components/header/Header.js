import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/images/Logo.png'
import { Box, Container, Grid } from "@mui/material";
import { Div, Text, HeaderNav, Nav, Button } from "./HeaderStyled";
import Heart from "../icons/Heart";
import Search from "../icons/Search";
import DropDown from "../icons/DropDown";
const Header = () => {
  return (
    <Container maxWidth='lg'>
      <Box>
        <Grid>
          <HeaderNav>
            <Div>
              <Image src={Logo} alt="logo header" width={500} height={500} style={{ width: 68, height: 68 }} />
              <Text>مدیا مهاجرت</Text>
            </Div>
            <Nav>
              <Link href='/'>خانه</Link>
              <Link href='/news'>خبرها<DropDown /></Link>
              <Link href='/article'>مقاله <DropDown /></Link>
              <Link href='/move'>ویدئوها<DropDown /></Link>
            </Nav>
            <div className="singIn">
              <Button>
                <Heart />
              </Button>
              <Button>
                <Search />
              </Button>
              <Link href='/singIn'>ثبت نام</Link>
            </div>
          </HeaderNav>
        </Grid>
      </Box>
    </Container>
  )
}

export default Header
