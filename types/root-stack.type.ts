export type RootStackParam = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Chat: {
    name: string;
    photo_url: any;
    message: string;
    id: number | string;
  };
};
