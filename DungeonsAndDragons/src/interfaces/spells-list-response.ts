import { Spell } from "./spell";

export interface SpellsListResponse {
    count: number;
    results: Spell[];
}