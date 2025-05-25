// components/ContactFormModal.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
  IconButton,
} from "@mui/material";
import { Send, Close, Phone } from "@mui/icons-material";
import { useContactForm } from "../hooks/useContactForm";

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
  service?: string;
}

export const ContactFormModal = ({
  open,
  onClose,
  service,
}: ContactFormModalProps) => {
  const {
    formData,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    setFormData,
  } = useContactForm();

  const handleClose = () => {
    onClose();
    setFormData((prev) => ({ ...prev, message: "" }));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">
            {service ? `Contact About ${service}` : "Contact Our Team"}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          {success ? (
            <Alert severity="success" sx={{ mb: 2 }}>
              Your message has been sent successfully!
            </Alert>
          ) : (
            <>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
              />
              {service && (
                <TextField
                  fullWidth
                  label="Service"
                  name="service"
                  value={service || formData.service}
                  margin="normal"
                  disabled
                />
              )}
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                required
              />
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} color="secondary" startIcon={<Close />}>
            Close
          </Button>
          {!success && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={loading ? <CircularProgress size={20} /> : <Send />}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};
