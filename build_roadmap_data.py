import json

data_content = """export interface SubTopic {
  id: string;
  title: string;
  side: 'left' | 'right';
  description: string;
  goldInsight: string;
  propRule: string;
  keyTakeaway: string;
  formulaOrRule?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
}

export interface HubNode {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  leftTopics: SubTopic[];
  rightTopics: SubTopic[];
}

export interface RoadmapSection {
  id: string;
  title: string;
  phase: number;
  description: string;
  hubs: HubNode[];
}
"""

print("Writing roadmap data structure...")
