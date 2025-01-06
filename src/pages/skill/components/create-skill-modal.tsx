import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CreateSkillForm } from './create-skill-form';
import { SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { CreateSkillVo } from '../../../interface/skill';
import { useCreateSkillMutation } from '../../../queries/skill-queries';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type CreateSkillModalProps = {
  modalTrigger: React.ReactNode;
};

export function CreateSkillModal({ modalTrigger }: CreateSkillModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate, isSuccess } = useCreateSkillMutation();

  const onSubmit: SubmitHandler<CreateSkillVo> = data => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

  return (
    <div>
      <div onClick={handleOpen}>{modalTrigger}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateSkillForm onSubmit={onSubmit} />
        </Box>
      </Modal>
    </div>
  );
}
