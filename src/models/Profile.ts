export type Profile = {
  email: string;
  username: string;
  profileImage: any;
  phoneNum: string;
  birthYear: number;
  gender: 'MALE' | 'FEMALE';
};

export type ProfileResponse = {
  error: any;
  message: boolean;
  status: any;
  data: Profile[];
};
