import { Blog, CreateBlogVo } from '../interface/blog';
import axiosClient from './axios-client';

export const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await axiosClient.get(`blogs`);
  return response.data;
};

export const createBlog = async (data: CreateBlogVo): Promise<Blog> => {
  const response = await axiosClient.post(`blogs`, data);
  return response.data;
};

export const deleteBlogs = async (ids: number[]): Promise<void> => {
  await axiosClient.delete(`blogs`, { data: ids });
};
