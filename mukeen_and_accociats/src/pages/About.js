import { Container, Typography, Box, Grid, Avatar, Divider, Chip } from '@mui/material';
import { Business, People, EmojiEvents, TrendingUp } from '@mui/icons-material';

export default function About() {
  // Update these with your real details
  const team = [
    { name: 'CA Mukeem Ahmed', role: 'Founder & Managing Partner', photo: '/team/mukeem.jpg', qualification: 'CA, CS, B.Com' },
    { name: 'CS Priya Sharma', role: 'Partner - Company Law', photo: '/team/priya.jpg', qualification: 'CS, LLB' },
    { name: 'CA Rajesh Gupta', role: 'Partner - Taxation', photo: '/team/rajesh.jpg', qualification: 'CA, DISA' },
    { name: 'Adv. Neha Singh', role: 'Legal Advisor', photo: '/team/neha.jpg', qualification: 'LLM, BSL' },
  ];

  const milestones = [
    { year: '2015', event: 'Firm founded in Mumbai' },
    { year: '2018', event: 'Opened Delhi branch' },
    { year: '2020', event: 'Crossed 500+ clients' },
    { year: '2022', event: 'Bangalore office launched' },
    { year: '2024', event: 'Recognized by ICAI for excellence' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: { xs: 10, md: 16 }, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight={700} gutterBottom>
            About Mukeem & Associates
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 800, mx: 'auto' }}>
            10+ Years of Excellence in Compliance, Taxation & Corporate Advisory
          </Typography>
        </Container>
      </Box>

      {/* Mission & Stats */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom color="primary">
              Who We Are
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Mukeem & Associates is a full-service Chartered Accountancy and Company Secretary firm 
              providing end-to-end solutions in taxation, audit, company law, GST, and business advisory.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Founded in 2015, we have grown to serve over 800+ businesses across India with a perfect 
              blend of experience, technology, and personalized service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box textAlign="center">
                  <Business sx={{ fontSize: 50, color: 'primary.main' }} />
                  <Typography variant="h3" fontWeight={700}>800+</Typography>
                  <Typography color="text.secondary">Happy Clients</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="center">
                  <People sx={{ fontSize: 50, color: 'primary.main' }} />
                  <Typography variant="h3" fontWeight={700}>25+</Typography>
                  <Typography color="text.secondary">Team Members</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="center">
                  <EmojiEvents sx={{ fontSize: 50, color: 'primary.main' }} />
                  <Typography variant="h3" fontWeight={700}>10+</Typography>
                  <Typography color="text.secondary">Years Experience</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="center">
                  <TrendingUp sx={{ fontSize: 50, color: 'primary.main' }} />
                  <Typography variant="h3" fontWeight={700}>98%</Typography>
                  <Typography color="text.secondary">Client Retention</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Our Team */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Meet Our Leadership
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {team.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Box textAlign="center">
                <Avatar
                  src={member.photo}
                  alt={member.name}
                  sx={{ width: 160, height: 160, mx: 'auto', mb: 2, border: '4px solid', borderColor: 'primary.main' }}
                >
                  {member.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Typography variant="h6" fontWeight={600}>
                  {member.name}
                </Typography>
                <Typography color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Chip label={member.qualification} size="small" color="primary" variant="outlined" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Timeline */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Our Journey
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {milestones.map((m, i) => (
              <Grid item xs={12} sm={6} md={i % 2 === 0 ? 6 : 6} key={m.year}>
                <Box sx={{ textAlign: i % 2 === 0 ? 'right' : 'left', pr: i % 2 === 0 ? 4 : 0, pl: i % 2 === 1 ? 4 : 0 }}>
                  <Chip label={m.year} color="primary" sx={{ fontSize: '1.1rem', py: 2.5 }} />
                  <Typography variant="h6" sx={{ mt: 1 }}>{m.event}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}