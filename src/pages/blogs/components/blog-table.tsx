import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { getDefaultMRTOptions } from '../../../utils';
import { useBlogsQuery } from '../../../queries/blog-queries';
import { Blogs } from '../../../interface/blog';

const defaultMRTOptions = getDefaultMRTOptions<Blogs>(); //get your default options

export const BlogTableComponent = () => {
  const columns: MRT_ColumnDef<Blogs>[] = [
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

  const table = useMaterialReactTable({
    ...defaultMRTOptions, //spread your default options
    columns,
    data: data || [],
    enableGlobalFilter: true, //override default options
    initialState: {
      ...defaultMRTOptions.initialState, //spread default initial state
      showColumnFilters: false, //override default initial state for just this table
    },
    //...
  });

  return <MaterialReactTable table={table} />;
};
