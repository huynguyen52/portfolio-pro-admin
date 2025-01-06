import { useState } from 'react';
import { Toolbar } from '../../components/toolbar';
import { Skill } from '../../interface/skill';
import { SkillAction } from './components/skill-action';
import { SkillTableComponent } from './components/skill-table';
import { useDeleteSkillsMutation } from '../../queries/skill-queries';

export default function Skills() {
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

  const { mutate } = useDeleteSkillsMutation();

  const onRowSelection = (skills: Skill[]) => {
    setSelectedSkills(skills);
  };

  const deleteSelectedSkills = () => {
    const skillIds = selectedSkills.map(skill => skill.id);
    mutate(skillIds);
    setSelectedSkills([]);
  };

  return (
    <div>
      <h1>Skill</h1>
      <Toolbar actions={[<SkillAction onDelete={deleteSelectedSkills} />]} />
      <SkillTableComponent onRowSelection={onRowSelection} />
    </div>
  );
}
