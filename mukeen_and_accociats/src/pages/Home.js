import { Container, Typography, Box, Grid, Card, CardContent, Button, Avatar } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

// Replace these with your actual images later (just put them in public/ folder)
const logo = '/logo.png';                    // → put your firm logo in public/logo.png
const heroBg = '/hero-bg.jpg';               // → optional full-width background (1920x800)
const team1 = '/team/member1.jpg';           // → will add in About page later
const team2 = '/team/member2.jpg';

export default function Home() {
  const services = [
    { title: 'Company Registration', desc: 'ROC filings, MOA/AOA drafting, LLP & Pvt Ltd setup' },
    { title: 'GST Services', desc: 'Registration, monthly returns, audits & compliance' },
    { title: 'Income Tax Filing', desc: 'ITR 1–7, tax planning, notices & appeals' },
    { title: 'Audit & Assurance', desc: 'Statutory audit, tax audit, internal audit' },
    { title: 'Company Secretary', desc: 'Board meetings, annual filings, secretarial compliance' },
    { title: 'Trademark & IPR', desc: 'Registration, opposition, renewal & protection' },
  ];

  return (
    <>
      {/* Hero Section with Logo */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 16 },
          textAlign: 'center',
          position: 'relative',
          '&::before': heroBg !== '/hero-bg.jpg' ? {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: `linear-gradient(rgba(27,68,127,0.85), rgba(27,68,127,0.85)), url(${heroBg}) center/cover no-repeat`,
            zIndex: 1,
          } : {},
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Avatar
            src={logo}
            alt="Mukeem & Associates Logo"
            sx={{ width: 120, height: 120, mx: 'auto', mb: 3, border: '5px solid white' }}
          />
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Mukeem & Associates
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, mb: 4 }}>
            Chartered Accountants • Company Secretaries • Tax Consultants
          </Typography>
          <Button variant="contained" size="large" color="inherit" href="/contact">
            Get Free Consultation
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h3" align="center" gutterBottom fontWeight={600}>
          Our Expertise
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
          End-to-end compliance and advisory solutions for businesses of all sizes
        </Typography>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <Card sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Quick Contact Bar */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" textAlign="center">
            <Grid item xs={12} sm={4}>
              <Phone sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6">+91 7798286678</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Email sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6">info@mukeemassociates.com</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <LocationOn sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6">Mumbai • Delhi • Bangalore</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}