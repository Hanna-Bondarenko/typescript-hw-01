type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Використовуємо Omit для виключення поля 'errors'
type Params = Omit<Form, "errors">;

const formParams: Params = {
  email: "example@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "+380123456789",
};

console.log(formParams);
