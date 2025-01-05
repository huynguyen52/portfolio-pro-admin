import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { getDefaultMRTOptions } from '../../../utils';
import {
  useBlogsQuery,
  useDeleteBlogsMutation,
} from '../../../queries/blog-queries';
import { Blog } from '../../../interface/blog';
import { Button } from '@mui/material';

const defaultMRTOptions = getDefaultMRTOptions<Blog>(); //get your default options

export const BlogTableComponent = () => {
  const columns: MRT_ColumnDef<Blog>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'content',
      header: 'Content',
    },
  ];

  const { data } = useBlogsQuery();
  const { mutate } = useDeleteBlogsMutation();

  const table = useMaterialReactTable({
    ...defaultMRTOptions, //spread your default options
    columns,
    data: data || [],
    enableRowSelection: true, //override default options
    renderTopToolbar: ({ table }) => {
      const selectedRows = table
        .getSelectedRowModel()
        .flatRows.map(row => row.original.id);
      const deleteSelectedBlogs = () => {
        mutate(selectedRows);
        table.resetRowSelection();
      };
      return (
        <div>
          <Button
            color="secondary"
            onClick={deleteSelectedBlogs}
            disabled={!selectedRows.length}
          >
            Delete Blog(s)
          </Button>
        </div>
      );
    }, //override default options
    enableGlobalFilter: true, //override default options
    initialState: {
      ...defaultMRTOptions.initialState, //spread default initial state
      showColumnFilters: false, //override default initial state for just this table
    },
    //...
  });

  return <MaterialReactTable table={table} />;
};
