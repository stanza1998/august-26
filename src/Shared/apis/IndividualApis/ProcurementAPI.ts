import {
    collection,
    CollectionReference,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    setDoc,
} from "firebase/firestore";
import { IProcurement } from "../../interface/IProcurement";
import AppStore from "../../stores/AppStore";
import { AppApi } from "../AppApi";


export default class ProcurementApi {
    collectionRef: CollectionReference;

    constructor(
        private api: AppApi,
        private store: AppStore,
        collectionRef: CollectionReference
    ) {

        this.collectionRef = collectionRef;
    }

    async getAll() {
        const q = query(this.collectionRef);
        const querySnapshot = await getDocs(q);
        const items: IProcurement[] = [];
        querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id } as IProcurement);
        });
        this.store.procurement.load(items);
    }

    async create(data: IProcurement) {
        const docRef = doc(this.collectionRef);
        data.id = docRef.id;
        await setDoc(docRef, data, { merge: true });
        return data;
    }

    async getById(id: string) {
        const $doc = await getDoc(doc(this.collectionRef, id))
        if (!$doc.exists) return;

        const $banner = [{ id: $doc.id, ...$doc.data() } as IProcurement];
        this.store.procurement.load($banner)
    }

    async deleteAll(id: string) {
        const collectionRef = collection(this.collectionRef, id);
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);

        await Promise.all(
            querySnapshot.docs.map(async (doc) => {
                await deleteDoc(doc.ref);
            })
        );
    }


    async delete(id: string) {
        const docRef = doc(this.collectionRef, id);
        await deleteDoc(docRef);
        this.store.procurement.remove(id);
    }

    async update(data: IProcurement) {
        await setDoc(doc(this.collectionRef, data.id), data);
        return data;
    }
}





