export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData extends ILoginData {
    name?: string;
}

export interface IRegisterDataInForm extends Omit<IRegisterData, 'name'> {
    firstName: string;
}