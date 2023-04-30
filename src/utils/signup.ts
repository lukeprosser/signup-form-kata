type SignupInfo = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

export const signup = (data: SignupInfo) => console.log(data);
