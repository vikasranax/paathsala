import type { ExamSyllabus, SyllabusItem, SyllabusStage, SyllabusSubject } from './syllabusTypes';
import type { TopicKey } from './topics';
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

export type FoundItem = { stage: SyllabusStage; subject: SyllabusSubject; item: SyllabusItem };

export function findSyllabusItem(examId: string, itemId: string): FoundItem | undefined {
  const syllabus = syllabusByExam[examId];
  if (!syllabus) return undefined;
  for (const stage of syllabus.stages) {
    for (const subject of stage.subjects) {
      const item = subject.items.find((i) => i.id === itemId);
      if (item) return { stage, subject, item };
    }
  }
  return undefined;
}

export type SharedUse = { examId: string; itemName: string };

// Other exams whose syllabus items share a topic with the given topics.
export function getSharedUsage(topics: readonly TopicKey[], excludeExamId: string): SharedUse[] {
  const out: SharedUse[] = [];
  const seen = new Set<string>();
  for (const [examId, syllabus] of Object.entries(syllabusByExam)) {
    if (examId === excludeExamId) continue;
    for (const stage of syllabus.stages) {
      for (const subject of stage.subjects) {
        for (const item of subject.items) {
          if (!item.topics.some((t) => topics.includes(t))) continue;
          const key = `${examId}|${item.name}`;
          if (seen.has(key)) continue;
          seen.add(key);
          out.push({ examId, itemName: item.name });
        }
      }
    }
  }
  return out;
}
