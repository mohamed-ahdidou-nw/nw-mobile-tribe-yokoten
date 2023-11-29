import { getRoot, type IStateTreeNode } from "mobx-state-tree"
import { type RootStore, type RootStoreModel } from "../root-store/root-store"

/**
 * Returns a RootStore object in strongly typed way
 * for stores to access other stores.
 */
export const getRootStore = (self: IStateTreeNode): RootStore =>
  getRoot<typeof RootStoreModel>(self)
