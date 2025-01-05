import { useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteBlogs, fetchBlogs } from '../api/blog-api';
import { useMutation } from '@tanstack/react-query';
import { createSkill } from '../api/skill-api';

export const useBlogsQuery = () =>
  useQuery({
    queryKey: ['blogs'],
    queryFn: () => fetchBlogs(),
  });

// create blog query
export const useCreateBlogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create-blog'],
    mutationFn: createSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

// delete blog by ids query mutation
export const useDeleteBlogsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete-blogs'],
    mutationFn: deleteBlogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};
