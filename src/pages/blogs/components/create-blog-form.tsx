import { Box, Button, FormControl, InputLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AppInput } from '../../../components/app-input';
import { CreateBlogVo } from '../../../interface/blog';

type CreateBlogFormProps = {
  onSubmit: (data: CreateBlogVo) => void;
};

export function CreateBlogForm({ onSubmit }: CreateBlogFormProps) {
  const { register, handleSubmit } = useForm<CreateBlogVo>();

  return (
    <Box onSubmit={handleSubmit(onSubmit)} component="form" noValidate>
      <FormControl fullWidth variant="standard">
        <InputLabel shrink htmlFor="title-input">
          Blog title
        </InputLabel>
        <AppInput {...register('title')} id="title-input" />
      </FormControl>
      <FormControl fullWidth variant="standard">
        <InputLabel shrink htmlFor="content-input">
          Blog Content
        </InputLabel>
        <AppInput {...register('content')} id="content-input" />
      </FormControl>
      <Button fullWidth variant="contained" type="submit">
        Create Blog
      </Button>
    </Box>
  );
}
