import { SpellsListResponse } from "../interfaces/spells-list-response";

class SpellsService {
    private _url = 'https://www.dnd5eapi.co/api';

    async getSpells(): Promise<SpellsListResponse> {
        const result = await fetch(`${this._url}/spells`);
        return await result.json();
    }
}

export default new SpellsService();