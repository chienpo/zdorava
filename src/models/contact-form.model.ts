export enum ContactFormFields {
  Name = 'name',
  Email = 'email',
  Message = 'message',
}

export interface ContactFormModel {
  [ContactFormFields.Name]: string;
  [ContactFormFields.Email]: string;
  [ContactFormFields.Message]: string;
}
