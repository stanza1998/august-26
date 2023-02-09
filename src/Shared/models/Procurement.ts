import react from "react"
import { makeAutoObservable } from "mobx"
import AppStore from "../stores/AppStore"
import { IProcurement } from "../interface/IProcurement"


export class ProcurementModel implements IProcurement {

    id: string;
    title: string;
    description: string;
    pdfUrl: string;
    imgUrl: string;


    constructor(private store: AppStore, procurement: IProcurement) {
        makeAutoObservable(this);
        this.id = procurement.id;
        this.title = procurement.title;
        this.description = procurement.description;
        this.pdfUrl = procurement.pdfUrl;
        this.imgUrl = procurement.imgUrl
    }


    get asJson(): IProcurement {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            pdfUrl: this.pdfUrl,
            imgUrl: this.imgUrl
        }

    }

}