import type { ExamSyllabus } from './syllabusTypes';
import { upscSyllabus } from './syllabusUpsc';
import { sscCglSyllabus } from './syllabusSsc';
import { ibpsPoSyllabus, sbiPoSyllabus } from './syllabusBanking';
import { rrbNtpcSyllabus, ndaSyllabus, cdsSyllabus } from './syllabusServices';
import { neetSyllabus, jeeMainSyllabus, jeeAdvancedSyllabus } from './syllabusEntrance';

export type SyllabusTopic = {
  id: string;
  name: string;
};

const syllabusByExam: Record<string, ExamSyllabus> = {
  'upsc-cse': upscSyllabus,
  'ssc-cgl': sscCglSyllabus,
  'ibps-po': ibpsPoSyllabus,
  'sbi-po': sbiPoSyllabus,
  'rrb-ntpc': rrbNtpcSyllabus,
  nda: ndaSyllabus,
  cds: cdsSyllabus,
  neet: neetSyllabus,
  'jee-main': jeeMainSyllabus,
  'jee-adv': jeeAdvancedSyllabus,
};

export function getExamSyllabus(examId: string): ExamSyllabus | undefined {
  return syllabusByExam[examId];
}

export function getSyllabus(examId: string): SyllabusTopic[] {
  const syllabus = syllabusByExam[examId];
  if (!syllabus) return [];
  return syllabus.stages.flatMap((s) => s.subjects.map((su) => ({ id: su.id, name: su.name })));
}
