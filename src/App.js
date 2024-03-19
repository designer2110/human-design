import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { createTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { ThemeProvider } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'mui-image';
import imagen from "./image/1900x920.webp";
import imagen2 from "./image/int-1013.jpg";
import imagen3 from "./image/p1b.jpg";
import imagen4 from "./image/p2b.jpg";
import imagen5 from "./image/p3b.jpg";

// import images from "./images.json";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const useStyles = makeStyles((theme) => ({
  
// }));

const theme = createTheme({
  palette: {
    primary: {
      main: '#bfc7c1',
    }
}});



export default function ResponsiveAppBar() {
 

const steps = [
  {
    label: 'Primer paso',
    description: `Contratás nuestro servicio de asesoramiento, acordamos con vos y diseñamos los espacios que estás
    buscando.`,
  },
  {
    label: 'Paso dos',
    description:
      'Te proponemos diferentes ofertas, para que vos hagas una elección, descartes y te quedes con la que más te gusta.',
  },
  {
    label: 'Paso 3: creación e instalación',
    description: `Nuestro equipo de expertos accede a tu inmueble, y según los parámetros que elegiste, hace las modificaciones necesarias
    y reestructura el ambiente de modo de alcanzar la solución elegida.`,
  },
];

const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="root">
      <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>  
    <br></br>
    <div className='top'>

    </div>
    <div className='middle'>
    <Box
  component="img"
  sx={{
    height: 473,
    width: 710,
    marginLeft: 5,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="Foto"
  src={imagen2}
/>

<Box sx={{ maxWidth: 400, marginLeft: 30 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>

    </div>
    <div className='bottom'>
    <div className='card1'><Box sx={{ maxWidth: 600, marginRight: 10 }}>
      <Card variant="outlined" sx={{ maxWidth: 600}}><CardMedia
        sx={{ height: 179, width: 192 }}
        image={imagen3}
        title="Person 1"
      /><CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Marta Giménez
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ width: 450 }}>
        Marta es diseñadora de interiores desde 1992, año en que comenzó a trabajar en Espacios Muoi,
        como colaboradora de desarrollo de interiores. Desde entonces no ha dejado de sorprendernos con su abilidad
        para encontrar objetos y soluciones de diseño realmente impensadas.
      </Typography>
    </CardContent></Card>
    </Box></div>
    <div className='card1'><Box sx={{ maxWidth: 600, marginRight: 10 }}>
      <Card variant="outlined" sx={{ maxWidth: 600 }}><CardMedia
        sx={{ height: 179, width: 192 }}
        image={imagen4}
        title="Person 1"
      /><CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Juan Aguanza
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ width: 450 }}>
        Juan es diseñador de interiores y trabajó para firmas como Lufig Int., Ruilan Designs y Amberes & Amberes.
        De chicho creció trabajando en una carpintería junto a su padre, lo que le dió experiencia que utiliza día a día.
        Su principal motivación es encontrar espacios habitables pero con toques especiales.
      </Typography>
    </CardContent></Card>
    </Box></div>
    <div className='card1'><Box sx={{ maxWidth: 600, marginRight: 10 }}>
      <Card variant="outlined" sx={{ maxWidth: 600 }}><CardMedia
        sx={{ height: 179, width: 192 }}
        image={imagen5}
        title="Person 1"
      /><CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Ismael Ferenhfort
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ width: 450 }}>
        Marta es diseñadora de interiores desde 1992, año en que comenzó a trabajar en Espacios Muoi,
        como colaboradora de desarrollo de interiores. Desde entonces no ha dejado de sorprendernos con su abilidad
        para encontrar objetos y soluciones de diseño realmente impensadas.
      </Typography>
    </CardContent></Card>
    </Box></div>
    </div>
    <BottomNavigation></BottomNavigation>
    </ThemeProvider>
    </div>
    
  );
}