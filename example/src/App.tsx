import { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Container, Button, Paper } from '@mui/material';
import { Camera } from 'react-mui-camera';

export default function App() {
  const [lastPhoto, setLastPhoto] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(true);

  const handleSave = (imageData: string) => {
    // Implement save functionality here (e.g., download or upload the image)
    setLastPhoto(imageData);
    setIsStreaming(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div'>
            React MUI Camera Demo
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ flexGrow: 1, py: 2 }}>
        {isStreaming ? (
          <Paper sx={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <Camera onImageCaptured={handleSave} onClose={() => setIsStreaming(false)} skipFilters={false} />
          </Paper>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            {lastPhoto && (
              <Box>
                <Typography variant='h5' sx={{ mb: 2 }}>
                  Last Photo
                </Typography>
                <Box
                  component='img'
                  src={lastPhoto}
                  alt='Captured'
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '70vh',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Box>
            )}

            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant='contained'
                onClick={() => setIsStreaming(true)}
                sx={{
                  height: !!lastPhoto ? 'auto' : '60px',
                }}
              >
                Capture {lastPhoto ? 'Another' : 'a'} Photo
              </Button>

              {!!lastPhoto && (
                <Button variant='outlined' onClick={() => setLastPhoto(null)} disabled={!lastPhoto}>
                  Clear Photo
                </Button>
              )}
            </Box>
          </Box>
        )}
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.200', py: 2 }}>
        <Container>
          <Typography variant='body2' color='text.secondary' align='center'>
            © {new Date().getFullYear()} React‑MUI‑Camera • Built with MUI • Host on GitHub Pages
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
