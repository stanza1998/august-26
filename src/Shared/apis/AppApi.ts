import { CollectionsOutlined } from "@mui/icons-material";
import { collection } from "firebase/firestore";
import React from "react"
import { UserAPI } from "./IndividualApis/UserAPI"
import AppStore from "../stores/AppStore";
import { db } from "../../firebaseConfig";
import ProcurementApi from "./IndividualApis/ProcurementAPI";

export class AppApi {

  private userDb = collection(db, "Users");
  private procurementDb = collection(db, "Procurement");

  auth: UserAPI;
  procurement: ProcurementApi;

  constructor(private store: AppStore) {

    this.auth = new UserAPI(this, this.store, this.userDb);
    this.procurement = new ProcurementApi(this, this.store, this.procurementDb)
  }



}

