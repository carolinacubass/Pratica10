import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
 
function Header() {
  const styles = {
    iconButton: { mr: 2 },
    title: { flexGrow: 1 },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={styles.iconButton}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={styles.title}>
            Gerenciamento de Projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;