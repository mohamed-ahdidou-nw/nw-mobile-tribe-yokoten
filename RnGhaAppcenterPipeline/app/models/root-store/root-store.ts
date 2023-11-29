import { type Instance, type SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
	characterStore: types.optional(CharacterStoreModel, {} as never)
});

/**
 * The RootStore instance.
 */
export type RootStore = Record<string, unknown> & Instance<typeof RootStoreModel>

/**
 * The data of a RootStore.
 */
export type RootStoreSnapshot = Record<string, unknown> & SnapshotOut<typeof RootStoreModel>
