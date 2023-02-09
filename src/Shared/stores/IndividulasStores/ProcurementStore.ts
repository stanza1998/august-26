import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../Store";
import { ProcurementModel } from "../../models/Procurement";
import { IProcurement } from "../../interface/IProcurement";



export default class ProcurementStore extends Store<IProcurement, ProcurementModel> {
    items = new Map<string, ProcurementModel>();

    constructor(store: AppStore) {
        super(store)
        makeObservable(this, {
            items: true,
            selected: true,
        });
        this.store = store;
    }

    load(items: IProcurement[] = []) {
        runInAction(() => {
            items.forEach((item) =>
                this.items.set(item.id, new ProcurementModel(this.store, item))
            );
        });
    }

    getById(id: string) {
        return this.items.get(id);
    }

}



