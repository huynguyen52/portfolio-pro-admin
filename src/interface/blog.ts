export type Blog = {
  id: number;
  title: string;
  content: string;
};
export type Blogs = ReadonlyArray<Blog>;

export type CreateBlogVo = Omit<Blog, 'id'>;
