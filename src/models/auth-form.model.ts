export enum AuthFormFields {
  Email = 'email',
  Password = 'password',
}

export interface AuthFormModel {
  [AuthFormFields.Email]: string;
  [AuthFormFields.Password]: string;
}
