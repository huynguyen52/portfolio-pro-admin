import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { getDefaultMRTOptions } from '../../../utils';
import {
  useDeleteSkillsMutation,
  useSkillsQuery,
} from '../../../queries/skill-queries';
import { Skill } from '../../../interface/skill';
import { Button } from '@mui/material';

const defaultMRTOptions = getDefaultMRTOptions<Skill>(); //get your default options

export const SkillTableComponent = () => {
  const columns: MRT_ColumnDef<Skill>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'title',
      header: 'Title',
    },
  ];

  const { data } = useSkillsQuery();
  const { mutate } = useDeleteSkillsMutation();

  const table = useMaterialReactTable({
    ...defaultMRTOptions, //spread your default options
    columns,
    data: data || [],
    enableGlobalFilter: true, //override default options
    initialState: {
      ...defaultMRTOptions.initialState, //spread default initial state
      showColumnFilters: false, //override default initial state for just this table
    },
    enableRowSelection: true,
    renderTopToolbar: ({ table }) => {
      const deleteSelectedSkills = () => {
        const skillIds = table
          .getSelectedRowModel()
          .flatRows.map(row => row.original.id);
        mutate(skillIds);
        table.resetRowSelection();
      };
      return (
        <div>
          <Button
            variant="contained"
            color="warning"
            onClick={deleteSelectedSkills}
          >
            Delete skill(s)
          </Button>
        </div>
      );
    },
    //...
  });

  return <MaterialReactTable table={table} />;
};
