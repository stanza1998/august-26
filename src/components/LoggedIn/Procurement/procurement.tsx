
import { Button } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import react, { useEffect, useState } from "react"
import "./procurement.scss"
import { useAppContext } from "../../Context";
import { Modal, showModalId } from "../../Modal";
import { observer } from "mobx-react-lite";
import { Procurements } from "./procurements";
import { ProcurementDialog } from "../../dialogs/procurementDialog/proucurementDialog";
import { Loader } from "../../loader/loader";



export const DIALOGNAMES = {
    PROCUREMENT: "create-procurement-dialog",
    DELETE: "delete-procurement-dialog"
}


export const Procurement = observer(() => {
    const { store, api } = useAppContext();
    const banners = store.procurement.all.map(procurement => procurement.asJson);
    const [loading, setLoading] = useState(false);


    const onCreate = () => {
        showModalId(DIALOGNAMES.PROCUREMENT);
    }

    const getProcurement = async () => {
        setLoading(true);
        await api.procurement.getAll();
        setLoading(false);
    }



    useEffect(() => {
        getProcurement()
    }, [])

    return (
        <div className="procurement">
            {loading ? <div style={{ marginTop: "10rem" }} ><Loader /></div> :

                <>
                    <div className="addbtn">
                        <Button variant="contained" style={{ background: "green" }} onClick={onCreate}> <AddCircleOutlineIcon /> Add Tender</Button>
                    </div>

                    <Procurements procurement={store.procurement.all} />

                    <Modal modalId={DIALOGNAMES.PROCUREMENT}>
                        <ProcurementDialog />
                    </Modal>
                </>}

        </div>
    )
})