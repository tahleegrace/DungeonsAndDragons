import { Component } from "react";
import { DungeonsAndDragonsContext } from "../../../context/context";
import { Spell } from "../../../interfaces/spell";
import { withRouter } from "../../../utilities/with-router";

class SpellDetails extends Component<SpellDetailsProps, SpellDetailsState> {
    static contextType = DungeonsAndDragonsContext;

    constructor() {
        super({
            params: {
                index: null
            }
        });

        this.state = { spell: null };
    }

    render() {
        return (
            <main>
                <h1>Spell { this.props.params.index }</h1>
            </main>
        );
    }
}

export default withRouter(SpellDetails);

interface SpellDetailsState {
    spell: Spell;
}

interface SpellDetailsProps {
    params: {
        index: string
    }
}