import { IUser } from '../model/model.user';
import { BaseService, IAPI_Response } from './service.base';
import { IToken } from '../model/model.token';
import { AxiosResponse } from 'axios';

export class LoginService extends BaseService {

    static generalId_profile = 'user-profile-id';

    login(data: { username: string, password: string }): Promise<IAPI_Response<IToken>> {
        return this.getTokenfromServer(data);
    }

    profile(): Promise<IAPI_Response<IUser>> {
        const mock: any = {
            data: {
                name: 'a',
                username: 'b',
                id: '1',
                creation_date: 5,
                version: 1,
                person: { name: 'a' }
            }
        };
        return Promise.resolve(mock);
        // return this.axiosTokenInstance.get('/users/profile');
    }
    profile_check(): Promise<AxiosResponse<{}>> {
        return this.axiosTokenInstance.head('/users/profile');
    }

    forgotPassword(mobile: { username: string } | { cell_no: string }): Promise<string> {
        return this.axiosInstance.post('/forget-password/send-code', mobile);
    }

    resetPassword(data: {
        cell_no: string;
        code: string;
        password: string;
    }): Promise<string> {

        return this.axiosInstance.post('/users/reset-password', data);
    }

}
