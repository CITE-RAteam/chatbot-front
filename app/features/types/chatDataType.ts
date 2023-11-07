interface ButtonValue {
  choice_id: number;
  choice_text: string
}

interface ChatValue {
  client: { chat: string; button: ButtonValue[] | undefined };
  user: string | undefined;
}
