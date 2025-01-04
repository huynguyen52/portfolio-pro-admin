import { BlogTableComponent } from './components/blog-table';
import { CreateBlogModal } from './components/create-blog-modal';

export default function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
      <CreateBlogModal />
      <BlogTableComponent />
    </div>
  );
}
