import * as yup from 'yup';

enum CardTypes {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT"
}

export interface CreateCardsDTO {
  user_id: number;
  card_number: string;
  type: CardTypes;
  flags: string;
  limit: number;
  current_value: number;
  closing_day: number;
}

export const createCardsRequestSchema = yup.object({
  user_id: yup.number().required(),
  card_number: yup.string().required(),
  type: yup
    .string()
    .oneOf([CardTypes.CREDIT, CardTypes.DEBIT])
    .required(),
  flags: yup.string().required(),
  limit: yup.number().required(),
  current_value: yup.number().required(),
  closing_day: yup.number().required()
})