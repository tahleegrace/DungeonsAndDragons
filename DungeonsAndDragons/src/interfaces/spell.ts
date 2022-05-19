import { Class } from "./class";
import { Damage } from "./damage";
import { School } from "./school";

export interface Spell {
    index: string;
    name: string;
    desc: string[];
    range: string;
    components: string[];
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type: string;
    damage: Damage;
    school: School;
    classes: Class[];
    subclasses: Class[];
}