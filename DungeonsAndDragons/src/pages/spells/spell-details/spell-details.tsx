import { Component, Fragment } from "react";
import { ContextProps, DungeonsAndDragonsContext } from "../../../context/context";
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

    async componentDidMount() {
        const spell = await (this.context as ContextProps).spellsService.getSpell(this.props.params.index);

        this.setState({ spell: spell });
    }

    render() {
        return (
            <main>
                {this.state.spell !== null ?
                    <Fragment>
                        <h1>{this.state.spell.name}</h1>
                    </Fragment> :
                    <span>Loading spell</span>
                }
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