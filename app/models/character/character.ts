import { type Instance, type SnapshotIn, type SnapshotOut, types } from "mobx-state-tree";

/**
 * Rick and Morty character model.
 */
export const CharacterModel = types.model("Character").props({
	id: types.identifierNumber,
	name: types.maybe(types.string),
	status: types.maybe(types.string),
	image: types.maybe(types.string)
});

export type Character = Record<string, unknown> & Instance<typeof CharacterModel>
export type CharacterSnapshotOut = Record<string, unknown> & SnapshotOut<typeof CharacterModel>
export type CharacterSnapshotIn = Record<string, unknown> & SnapshotIn<typeof CharacterModel>
export const createCharacterDefaultModel = () => types.optional(CharacterModel, {});
