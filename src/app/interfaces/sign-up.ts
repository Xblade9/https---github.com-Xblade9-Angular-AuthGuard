export interface signUpForm {
  status: string;
  response: {
    id: number;
    name: string;
    avatar: string | null;
    email: string;
    password: string;
    countryCode: string | null;
    phone: string;
    resetPasswordToken: string | null;
    resetPasswordAt: string | null;
    resetPasswordTokenVerified: boolean;
    otp: string;
    isOtpVerified: boolean;
    cin: string | null;
    officeAddress: string | null;
    companyName: string | null;
    status: number;
    userType: number;
    createdBy: string | null;
    lastLogin: string | null;
    tokens: {
      token: string;
      access: string;
    }[];
    createdAt: string;
    updatedAt: string;
  };
}
