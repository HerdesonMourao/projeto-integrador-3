import * as yup from 'yup';

export interface CreateCategoryDTO {
  user_id: number;
  name: string;
}

export interface UpdateCategoryDTO {
  name: string;
}

export const createCategoryRequestSchema = yup.object({
  user_id: yup.number().required(),
  name: yup.string().required()
})

export const updateCategoryRequestSchema = yup.object({
  name: yup.string().required()
})