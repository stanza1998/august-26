import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Dispatch, SetStateAction, FormEvent, useEffect, ChangeEvent, useState } from "react";
import { IProcurement } from "../../../Shared/interface/IProcurement";
import { useAppContext } from "../../Context";

interface IFormProps {
    procurement: IProcurement;
    setProcurement: Dispatch<SetStateAction<IProcurement>>
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    src: string;
    setSrc: Dispatch<SetStateAction<string>>
    setSelectedFile: Dispatch<SetStateAction<File | null>>
}

export const ProcurementForm = observer((props: IFormProps) => {
    const { store } = useAppContext()
    const { onSubmit, procurement, setProcurement, loading, setSelectedFile, src, setSrc } = props;

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file =
            e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
        if (!file) return;
        setSelectedFile(file);
        const reader = new FileReader();
        reader.addEventListener(
            "load",
            () => {
                const $src = reader.result?.toString() || "";
                setSrc($src);
            },
            false
        );
        if (file) {
            reader.readAsDataURL(file);
        }
        e.target.value = "";
    };


    return (
        <form onSubmit={onSubmit}>
            <legend className="uk-legend">Add Tender</legend>

            <label className="thumbnail uk-margin">
                Select Image
                <img style={{ height: "100px" }} src={src} alt="" />
                <div className={`tools`}>
                    <input className="d-none" type="file" accept="image/*" onChange={onFileChange} />
                </div>
            </label>

            <div className="">
                <label>Title</label>
                <br />
                <input className="uk-input uk-form-width-large "
                    type="text" placeholder="Black Friday e.g"
                    value={procurement.title}
                    onChange={(e) =>
                        setProcurement({ ...procurement, title: (e.target.value) })
                    }

                />
            </div>
            <div className="uk-margin">
                <label>Description</label>
                <br />
                <textarea className="uk-textarea uk-form-width-large" placeholder="Description of the procurement"
                    value={procurement.description}
                    onChange={(e) =>
                        setProcurement({ ...procurement, description: (e.target.value) })
                    }
                ></textarea>
            </div>
        
            <Button style={{ color: "white", backgroundColor: "#2F80ED", padding: "5px", borderRadius: "5px", width: "100px" }} type="submit">
                Submit
                {loading && <div data-uk-spinner></div>}
            </Button>
        </form>

    )
})