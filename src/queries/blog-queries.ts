import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createBlog, fetchBlogs } from '../api/blog-api';
import { useMutation } from '@tanstack/react-query';

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
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};
