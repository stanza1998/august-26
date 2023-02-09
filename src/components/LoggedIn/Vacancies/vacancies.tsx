import react from "react"
import "./vacancies.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Vacancies = () => {
    return (
        <div className="vacancies">

            <div className="addbtn">
                <Button variant="contained" style={{ background: "green" }}> <AddCircleOutlineIcon /> Add Vacancy</Button>
            </div>
            <main className="container">
                <section className="card">
                    <img src="https://farm1.staticflickr.com/505/31980127730_ea81689413_m.jpg" alt="sample image" />
                    <div className="texts">
                        <h2>Title</h2>
                        <p>small description </p>
                        <button type="submit">pdf view</button>
                    </div>
                    <div style={{ display: 'flex', marginBottom: "1rem" }}>
                        <Button style={{ marginLeft: "2rem" }} variant="contained" ><EditIcon /> </Button>
                        <Button style={{ marginLeft: "0.4rem", background: "red" }} variant="contained"><DeleteIcon /></Button>
                    </div>
                </section>
                <section className="card">
                    <img src="https://farm2.staticflickr.com/1871/30499973808_68ddd5960b_m.jpg" alt="sample image" />
                    <div className="texts">
                        <h2>Title</h2>
                        <p>small description </p>
                        <button type="submit">pdf view</button>
                    </div>
                    <div style={{ display: 'flex', marginBottom: "1rem" }}>
                        <Button style={{ marginLeft: "2rem" }} variant="contained" ><EditIcon /> </Button>
                        <Button style={{ marginLeft: "0.4rem", background: "red" }} variant="contained"><DeleteIcon /></Button>
                    </div>
                </section>
                <section className="card">
                    <img src="https://farm6.staticflickr.com/5730/22609622376_93c3560c8b_m.jpg" alt="sample image" />
                    <div className="texts">
                        <h2>Title</h2>
                        <p>small description </p>
                        <button type="submit">pdf view</button>
                    </div>
                    <div style={{ display: 'flex', marginBottom: "1rem" }}>
                        <Button style={{ marginLeft: "2rem" }} variant="contained" ><EditIcon /> </Button>
                        <Button style={{ marginLeft: "0.4rem", background: "red" }} variant="contained"><DeleteIcon /></Button>
                    </div>
                </section>
                <section className="card">
                    <img src="https://farm5.static.flickr.com/4094/4923591327_151f96ea71_m.jpg" alt="sample image" />
                    <div className="texts">
                        <h2>Title</h2>
                        <p>small description </p>
                        <button type="submit">pdf view</button>
                    </div>
                    <div style={{ display: 'flex', marginBottom: "1rem" }}>
                        <Button style={{ marginLeft: "2rem" }} variant="contained" ><EditIcon /> </Button>
                        <Button style={{ marginLeft: "0.4rem", background: "red" }} variant="contained"><DeleteIcon /></Button>
                    </div>
                </section>
            </main>
        </div>
    )
}