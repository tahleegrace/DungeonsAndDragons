import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../../../actions/favourites";
import { ContextProps, DungeonsAndDragonsContext } from "../../../context/context";
import { Spell } from "../../../interfaces/spell";

export class SpellsList extends Component<SpellsListProps, SpellsListState> {
    static contextType = DungeonsAndDragonsContext;
    
    constructor(props) {
        super(props);

        this.state = { spells: [], favourites: [] };
    }

    async componentDidMount() {
        const spells = await (this.context as ContextProps).spellsService.getSpells();

        this.setState({ spells: spells.results });
    }

    render() {
        return (
            <main>
                <h1>Spells</h1>
                <div className="container-fluid m-0 p-0">
                    {this.state.spells.length === 0 ?
                        <span>No spells found</span> :
                        <Fragment>
                            <div className="row ml-0 mb-2">
                                <div className="col-2 pl-0">
                                </div>
                                <div className="col-8">
                                    <strong>Spell</strong>
                                </div>
                            </div>
                            {this.state.spells.map(spell =>
                            (
                                <div className="row ml-0 mb-2" key={spell.index}>
                                    <div className="col-2 pl-0">
                                        <button onClick={() => this.setFavourite(spell)}>Add To Favourites</button>
                                    </div>
                                    <div className="col-8">
                                        <Link to={`/spells/${spell.index}`}>
                                            { spell.name }
                                        </Link>
                                    </div>
                                </div>
                            ))};
                        </Fragment>
                    }
                </div>
            </main>
        );
    }

    setFavourite(spell: Spell) {
        
    }
}

function mapStateToProps(state) {
    const { favourites } = state;

    return { favourites: favourites };
}

// Redux forgot to get this working.
function mapDispatchToProps(dispatch) {
    return {
        addFavourite: (spell) => dispatch(addFavourite(spell))
    };
}

interface SpellsListState {
    spells: Spell[];
    favourites: Spell[];
}

interface SpellsListProps {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellsList);