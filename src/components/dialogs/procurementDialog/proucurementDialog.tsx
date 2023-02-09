import { observer } from "mobx-react-lite";
import { Dispatch, SetStateAction, FormEvent, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useUploadToStorage from "../../../Shared/FUNCTION/uploadtToStorage";
import { defaultProcurement, IProcurement } from "../../../Shared/interface/IProcurement";
import { useAppContext } from "../../Context";
import { DIALOGNAMES } from "../../LoggedIn/Procurement/procurement";
import { hideModalId } from "../../Modal";
import { ProcurementForm } from "./procurementForm";

export const ProcurementDialog = observer(() => {
    const { store, api } = useAppContext()
    const [loading, setLoading] = useState(false)


    const { uploadFile } = useUploadToStorage();
    const [procurement, setProcurement] = useState<IProcurement>({ ...defaultProcurement })
    const [src, setSrc] = useState("");
    const [srcPdf, setSrcPdf] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const $procurement: IProcurement = {
            ...procurement
        };
        if (selectedFile) {
            const downloadURL = await uploadFile(selectedFile, `/procurements`);
            $procurement.imgUrl = downloadURL;
        } else {
            $procurement.imgUrl = "";
        }

        if (store.procurement.selected) {
            try {
                setLoading(true)
                const updated = await api.procurement.update($procurement);
                if (updated) store.procurement.load([updated])

            } catch (error) {
                console.log("Error updating", error)
            }
        } else {
            try {
                setLoading(true)
                const created = await api.procurement.create($procurement);
                if (created) store.procurement.load([created])


            } catch (error) {
                console.log("Error creating", error)
            }
        }
        setLoading(false)
        setProcurement({ ...defaultProcurement })
        store.procurement.clearSelected()
        setSrc("");
        hideModalId(DIALOGNAMES.PROCUREMENT)
    }

    const clearprocurement = () => {
        store.procurement.clearSelected();
        setSrc("");
    }



    useEffect(() => {
        if (store.procurement.selected) {
            setProcurement(store.procurement.selected)
            setSrc(store.procurement.selected.imgUrl)
        }
        else setProcurement({ ...defaultProcurement })
        console.log("Selected procurement", procurement);
        return () => { }
    }, [store.procurement.selected])


    return (
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical w-25">
            <button className="uk-modal-close-default" type="button" data-uk-close onClick={clearprocurement}></button>
            <ProcurementForm procurement={procurement} setProcurement={setProcurement} onSubmit={onSubmit} loading={loading}
                src={src}
                setSrc={setSrc}
                setSelectedFile={setSelectedFile} 
                />
        </div>
    )
});