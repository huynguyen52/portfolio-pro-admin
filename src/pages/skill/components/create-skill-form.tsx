import { Box, Button, FormControl, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AppInput } from '../../../components/app-input';
import { CreateSkillVo } from '../../../interface/skill';

type CreateBlogFormProps = {
  onSubmit: (data: CreateSkillVo) => void;
};

export function CreateSkillForm({ onSubmit }: CreateBlogFormProps) {
  const { register, handleSubmit } = useForm<CreateSkillVo>();

  return (
    <Box onSubmit={handleSubmit(onSubmit)} component="form" noValidate>
      <FormControl fullWidth variant="standard">
        <InputLabel shrink htmlFor="title-input">
          Skill name
        </InputLabel>
        <AppInput {...register('title')} id="title-input" />
      </FormControl>
      <Button fullWidth variant="contained" type="submit">
        Create skill
      </Button>
    </Box>
  );
}
