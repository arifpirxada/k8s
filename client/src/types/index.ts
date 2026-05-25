export interface Email {
  id: string | number;
  sender: string;
  subject: string;
  time: string;
}

export interface EmailFormState {
  sender: string;
  subject: string;
}
