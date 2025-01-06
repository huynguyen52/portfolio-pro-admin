import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, ListItemText, MenuItem, MenuList, Paper } from '@mui/material';
import { PopoverComponent } from '../../../components/popover';
import { CreateSkillModal } from './create-skill-modal';

const PopoverTrigger = () => {
  return (
    <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
      Actions
    </Button>
  );
};

type SkillActionProps = {
  onDelete: () => void;
};

export function SkillAction({ onDelete }: SkillActionProps) {
  return (
    <PopoverComponent popoverTrigger={<PopoverTrigger />}>
      <Paper>
        <MenuList>
          <MenuItem>
            <CreateSkillModal
              modalTrigger={<ListItemText>Create</ListItemText>}
            />
          </MenuItem>
          <MenuItem onClick={onDelete}>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </PopoverComponent>
  );
}
