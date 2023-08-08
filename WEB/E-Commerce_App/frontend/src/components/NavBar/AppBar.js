import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Badge} from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'relative',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const[open,setOpen] = React.useState(false)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      sx={{borderRadius:'50%'}}
    >
      <MenuItem onClick={handleMenuClose}
      sx={{':hover': {backgroundColor:'black', color:'white'} , borderRadius:'14px'}}
      >Sign In</MenuItem>
      <MenuItem
       onClick={handleMenuClose}
       sx={{':hover': {backgroundColor:'black', color:'white'} , borderRadius:'14px'}}>
        Sign Up</MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{backgroundColor:'black'}} >
        <Toolbar>
            <div>
            <img src="/logo.png" alt="logo" width='20%' />
            </div>
        
          <Search sx={{}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              edge="end"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{mr:2, ml:3}}
            >
              <AccountCircle fontSize='large' />
            </IconButton>
          </Box>

          <Box display='flex' justifyContent='flex-end'>
              <Badge badgeContent={2} color='secondary'>
                  <ShoppingCartIcon onClick={()=>{console.log("Clicked")}}/>
              </Badge>
          </Box>

        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

