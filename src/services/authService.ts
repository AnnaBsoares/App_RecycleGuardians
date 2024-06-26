import { LoginPayload, SignInResponse, SignUpForm, SignUpResponse } from "../@types/apis/auth";
import { ApiService } from "./apiServices";

class AuthService extends ApiService {
    // public async login(payload: LoginPayload): Promise<SignInResponse> {
    //     return {
    //         nome_user: "John Doe",
    //         pontos_user: 100,
    //         id_user: 1,
    //         email_user: 'john.doe@me.com',
    //         senha_user: '123456',
    //     };
    // };

    // public async register(payload: SignUpForm): Promise<SignUpResponse> {

    //     return {
    //         nome_user: "John Doe",
    //         email_user: 'john.doe@me.com',
    //         senha_user: '123456',


    //     }
    // }
    public async login(payload: LoginPayload): Promise<SignInResponse> {
        const email = payload.email_user.replace(/\D/g, '');
        return this.get<SignInResponse>(`user/login?email=${email}&senha=${payload.senha_user}`);
    }

    public async register(payload:SignUpForm): Promise<SignUpResponse> {
        payload.email_user = payload.email_user.replace(/\D/g, '');
        return this.post<SignUpResponse, SignUpForm>(`user`, payload);
    }
}

export const authService = new AuthService();

