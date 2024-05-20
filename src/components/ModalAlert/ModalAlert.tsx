import React, { FC } from 'react';
import { Button, Modal, Box } from '@mui/material';

interface ModalAt {
  open: boolean;
  onClose: () => void;
  message: string;
}

export const ModalAlert: FC<ModalAt> = ({ open, onClose, message }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="alert-modal-title"
      aria-describedby="alert-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
        }}
      >
        <h2 id="alert-modal-title">Alerta</h2>
        <p id="alert-modal-description">{message}</p>
        <Button variant="contained" onClick={onClose}>Fechar</Button>
      </Box>
    </Modal>
  );
};

