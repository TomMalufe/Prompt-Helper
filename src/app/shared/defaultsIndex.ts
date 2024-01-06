import { DEFAULT_ATTIRE_PROMPTS } from "./default-attire";
import { DEFAULT_BODY_PROMPTS } from "./default-body";
import { DEFAULT_COMPOSITION_PROMPTS } from "./default-composition";
import { DEFAULT_EXPRESSION_PROMPTS } from "./default-expressions";
import { DEFAULT_FACE_PROMPTS } from "./default-face";
import { DEFAULT_HAIR_PROMPTS } from "./default-hair";
import { DEFAULT_POSE_PROMPTS } from "./default-pose";


export type Categories = 'attire'|'body'|'composition'|'expression'|'face'|'hair'|'pose';
export const DEFAULT_TAGS: Record<Categories, { [group: string]: string[] }> = {
    attire: DEFAULT_ATTIRE_PROMPTS,
    body: DEFAULT_BODY_PROMPTS,
    composition: DEFAULT_COMPOSITION_PROMPTS,
    expression: DEFAULT_EXPRESSION_PROMPTS,
    face: DEFAULT_FACE_PROMPTS,
    hair: DEFAULT_HAIR_PROMPTS,
    pose: DEFAULT_POSE_PROMPTS
};