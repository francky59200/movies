const regex = {
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,
}

export const rules = {
  email: {
    required: { value: true, message: 'Ce champ est obligatoire' },
    minLength: { value: 6, message: 'L\'email que vous aviez renseignez est trop court' },
  },
  password: {
    required: { value: true, message: 'Ce champ est obligatoire' },
    minLength: { value: 4, message: 'Votre mot de passe est trop court' },
    pattern: {
      value: regex.password,
      message: 'Votre mot de passe n\'est pas correcte',
    },
  },
  name: {
    required: { value: true, message: 'Ce champ est obligatoire' },
    minLength: { value: 2, message: 'Votre nom est trop court' },
  },
}
