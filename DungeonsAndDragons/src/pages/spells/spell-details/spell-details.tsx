import { Component, Fragment } from "react";
import { ContextProps, DungeonsAndDragonsContext } from "../../../context/context";
import { Spell } from "../../../interfaces/spell";
import { booleanToYesNo, classListToString, keyValuePairToString } from "../../../utilities/format-utils";
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
                        {this.state.spell.desc.map((line, index) =>
                        (
                            <p>{line}</p>
                        ))}
                        <table>
                            <tr>
                                <td><strong>Range</strong></td>
                                <td>{this.state.spell.range}</td>
                            </tr>
                            <tr>
                                <td><strong>Components</strong></td>
                                <td>{this.state.spell.components.join(", ")}</td>
                            </tr>
                            <tr>
                                <td><strong>Ritual?</strong></td>
                                <td>{booleanToYesNo(this.state.spell.ritual)}</td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>{this.state.spell.duration}</td>
                            </tr>
                            <tr>
                                <td><strong>Concentration?</strong></td>
                                <td>{booleanToYesNo(this.state.spell.concentration)}</td>
                            </tr>
                            <tr>
                                <td><strong>Casting Time</strong></td>
                                <td>{this.state.spell.casting_time}</td>
                            </tr>
                            <tr>
                                <td><strong>Level</strong></td>
                                <td>{this.state.spell.level}</td>
                            </tr>
                            <tr>
                                <td><strong>Attack Type</strong></td>
                                <td>{this.state.spell.attack_type ?? "N/A" }</td>
                            </tr>
                            <tr>
                                <td><strong>Damage Type</strong></td>
                                <td>{this.state.spell.damage.damage_type.name}</td>
                            </tr>
                            <tr>
                                <td><strong>Damage at Character Level</strong></td>
                                <td>{keyValuePairToString(this.state.spell.damage.damage_at_character_level)}</td>
                            </tr>
                            <tr>
                                <td><strong>School</strong></td>
                                <td>{this.state.spell.school.name}</td>
                            </tr>
                            <tr>
                                <td><strong>Classes</strong></td>
                                <td>{classListToString(this.state.spell.classes)}</td>
                            </tr>
                            <tr>
                                <td><strong>Subclasses</strong></td>
                                <td>{classListToString(this.state.spell.subclasses)}</td>
                            </tr>
                        </table>
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