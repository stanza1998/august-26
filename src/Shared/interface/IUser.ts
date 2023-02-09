

export interface IUserRole {
    tole: {
        admin: boolean
    }
}


export interface IUser {
    uid: string
    fullName: string;
    email: string;
    password?: string;
    role: IUserRole | any
}

export const defaultUser: IUser = {
    uid: "",
    fullName: "",
    email: "",
    role: {
        admin: true
    }
}