export interface Email {
  id: number;
  sender: string;
  subject: string;
  time: string;
}

export interface EmailFormState {
  sender: string;
  subject: string;
}
