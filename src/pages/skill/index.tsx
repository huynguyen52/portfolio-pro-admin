import { SkillTableComponent } from './components/skill-table';
import { CreateSkillModal } from './components/create-skill-modal';

export default function Skills() {
  return (
    <div>
      <h1>Skill</h1>
      <CreateSkillModal />
      <SkillTableComponent />
    </div>
  );
}
