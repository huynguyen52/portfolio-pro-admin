import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { createSkill, deleteSkills, fetchSkills } from '../api/skill-api';

export const useSkillsQuery = () =>
  useQuery({
    queryKey: ['skills'],
    queryFn: () => fetchSkills(),
  });

export const useCreateSkillMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create-skill'],
    mutationFn: createSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    },
  });
};

// delete skills by ids mutation
export const useDeleteSkillsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['delete-skills'],
    mutationFn: (ids: number[]) => deleteSkills(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    },
  });
};
