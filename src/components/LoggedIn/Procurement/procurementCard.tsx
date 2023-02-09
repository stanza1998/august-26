import { observer } from "mobx-react-lite"
import react from "react"
import { ProcurementModel } from "../../../Shared/models/Procurement"
import { useAppContext } from "../../Context";
import { showModalId } from "../../Modal";
import { DIALOGNAMES } from "./procurement";
import { Button } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


interface IProps {
    procurement: ProcurementModel;
}

export const ProcurementCard = observer((props: IProps) => {
    const { procurement } = props
    const { store, api } = useAppContext();

    const onView = () => {
        store.procurement.select(procurement.asJson);
        showModalId(DIALOGNAMES.PROCUREMENT);
        console.log("Banner Id", procurement.id);
    };


    const onDelete = async (id: string) => {
        if (window.confirm("Delete")) {
            try {
                await api.procurement.delete(id)
                // store.banner.load();
            } catch (error) {
                console.log("Error creating", error)
            }
        }

    }
    return (
        <>
            <div style={{ display: 'flex', marginBottom: "1rem" }}>
                <Button onClick={onView} style={{ marginLeft: "2rem" }} variant="contained" ><EditIcon /> </Button>
                <Button onClick={() => onDelete(procurement.id)} style={{ marginLeft: "0.4rem", background: "red" }} variant="contained"><DeleteIcon /></Button>
            </div>
        </>
    )
})