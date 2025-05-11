import {
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { Facebook, Twitter, Instagram, Apple, Android } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#1c1c1c", color: "white", px: 4, py: 6 }}>
      <Grid container spacing={4}>
        {/* Brand */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Delize
          </Typography>
          <Typography variant="body2">
            Your favorite meals delivered fast at your door. Fresh, tasty, and on time.
          </Typography>
          <Box mt={2}>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        {/* Company */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="inherit">About Us</Link>
            <Link href="#" underline="hover" color="inherit">Blog</Link>
            <Link href="#" underline="hover" color="inherit">Careers</Link>
            <Link href="#" underline="hover" color="inherit">Partners</Link>
          </Stack>
        </Grid>

        {/* Services */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="inherit">Restaurants</Link>
            <Link href="#" underline="hover" color="inherit">Delivery</Link>
            <Link href="#" underline="hover" color="inherit">Pricing</Link>
            <Link href="#" underline="hover" color="inherit">Support</Link>
          </Stack>
        </Grid>

        {/* Legal */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Stack spacing={1}>
            <Link href="#" underline="hover" color="inherit">Privacy Policy</Link>
            <Link href="#" underline="hover" color="inherit">Terms of Use</Link>
            <Link href="#" underline="hover" color="inherit">Security</Link>
          </Stack>
        </Grid>

        {/* Download App */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Get the App
          </Typography>
          <Stack spacing={1}>
            <Button
              variant="outlined"
              startIcon={<Apple />}
              sx={{ color: "white", borderColor: "white" }}
              fullWidth
            >
              App Store
            </Button>
            <Button
              variant="outlined"
              startIcon={<Android />}
              sx={{ color: "white", borderColor: "white" }}
              fullWidth
            >
              Google Play
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box mt={5} textAlign="center">
        <Typography variant="body2" color="white">
          &copy; 2025 Delize. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
