import React from "react";
import spellsServiceImpl from "../services/spells.service";

export const defaultDependencies: ContextProps = {
    spellsService: spellsServiceImpl
};

export interface ContextProps {
    spellsService: typeof spellsServiceImpl;
}

export const DungeonsAndDragonsContext = React.createContext(defaultDependencies);