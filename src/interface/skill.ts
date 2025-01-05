export type Skill = {
  id: number;
  title: string;
};
export type Skills = ReadonlyArray<Skill>;

export type CreateSkillVo = Omit<Skill, 'id'>;
