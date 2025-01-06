import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { useEffect } from 'react';
import { Skill } from '../../../interface/skill';
import { useSkillsQuery } from '../../../queries/skill-queries';
import { getDefaultMRTOptions } from '../../../utils';

const defaultMRTOptions = getDefaultMRTOptions<Skill>(); //get your default options

type SkillTableComponentProps = {
  onRowSelection: (skills: Skill[]) => void;
};

export const SkillTableComponent = ({
  onRowSelection,
}: SkillTableComponentProps) => {
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
    //...
  });

  useEffect(() => {
    const selectedRows = table
      .getSelectedRowModel()
      .flatRows.map(row => row.original);
    onRowSelection(selectedRows);
  }, [table.getState().rowSelection]);

  return <MaterialReactTable table={table} />;
};
