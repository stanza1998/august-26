import { observer } from "mobx-react-lite"
import react from "react"
import { Button } from "@mui/material"
import { ProcurementModel } from "../../../Shared/models/Procurement";
import { useAppContext } from "../../Context";
import { showModalId } from "../../Modal";
import { DIALOGNAMES } from "./procurement";
import { ProcurementCard } from "./procurementCard";


interface IProps {
    procurement: ProcurementModel[];
}


export const Procurements = observer((props: IProps) => {
    const { procurement } = props;


    return (
        <div className="procurement">
            <main className="container">
                {procurement.map((p) => (

                    <section className="card">
                        <img style={{height:"130px"}} src={p.imgUrl} alt="sample image" />
                        <div className="texts">
                            <h2>{p.title}</h2>
                            <p>{p.description} </p>
                            <button type="submit">pdf view</button>
                        </div>
                        <ProcurementCard key={p.id} procurement={p} />
                    </section>
                ))}
                {/* {procurement.map((p) => p.id.length === 0  <>No Tenders</>)} */}
            </main>
        </div>
    )
})