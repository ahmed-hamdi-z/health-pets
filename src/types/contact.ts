export type Contact = {
  name: string;
  email: string;
  type: string;
  phone: string;
  message: string;
};

type ContactTypes = {
  label?: string;
  value: string;
}[];

export type { ContactTypes };
