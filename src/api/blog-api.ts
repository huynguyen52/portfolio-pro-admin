import { Blogs, CreateBlogVo } from '../interface/blog';
import axiosClient from './axios-client';

export const fetchBlogs = async (): Promise<Blogs[]> => {
  const response = await axiosClient.get(`blogs`);
  return response.data;
};

export const createBlog = async (data: CreateBlogVo): Promise<Blogs> => {
  const response = await axiosClient.post(`blogs`, data);
  return response.data;
};
