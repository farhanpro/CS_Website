import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const forms = [
  { title: 'Company Registration Form', file: '/forms/company-reg.pdf' },
  { title: 'gst: ,GST Return Form', file: '/forms/gst-return.pdf' },
  { title: 'ITR Filing Checklist', file: '/forms/itr-checklist.pdf' },
];

function Resources() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Download Forms & Resources
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {forms.map((form) => (
          <Grid item xs={12} sm={6} md={4} key={form.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{form.title}</Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<DownloadIcon />}
                  href={form.file}
                  download
                >
                  Download PDF
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Resources;