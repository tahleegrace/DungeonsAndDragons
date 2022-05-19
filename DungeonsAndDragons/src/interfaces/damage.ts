export interface Damage {
    damage_type: {
        name: string;
    };

    damage_at_character_level: {
        [key: string]: string;
    };
}