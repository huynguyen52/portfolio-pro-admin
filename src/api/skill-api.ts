import { CreateSkillVo, Skill } from '../interface/skill';
import axiosClient from './axios-client';

export const fetchSkills = async (): Promise<Skill[]> => {
  const response = await axiosClient.get(`skills`);
  return response.data;
};

export const createSkill = async (data: CreateSkillVo): Promise<Skill> => {
  const response = await axiosClient.post(`skills`, data);
  return response.data;
};

export const deleteSkills = async (ids: number[]): Promise<void> => {
  const response = await axiosClient.delete(`skills`, { data: ids });
  return response.data;
};
