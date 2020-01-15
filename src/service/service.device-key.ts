import { BaseService, IAPI_Response, IAPI_ResponseList } from './service.base';
// import { any } from '../model/model.device-key';
import { IUser } from '../model/model.user';

export class DeviceKeyService extends BaseService {

    /** doesn't need any access */
    generate(name: string): Promise<IAPI_Response<any>> {
        return this.axiosTokenInstance.post('/device-keys', { name });
    }

    search(user_id: IUser["id"]) {
        return this.axiosTokenInstance.post('/device-keys/_search', { filter: { user_id } });
    }

    getById(id: any["id"]): Promise<IAPI_Response<any>> {
        return this.axiosTokenInstance.get(`/device-keys/${id}`);
    }

    /** doesn't need any access */
    getAllByUserId(user_id: IUser["id"]): Promise<IAPI_ResponseList<any>> {
        return this.axiosTokenInstance.get(`/device-keys/user/${user_id}`);
    }

    remove(deviceKey_id: any['id']) {
        return this.axiosTokenInstance.delete(`/device-keys/${deviceKey_id}`);
    }

}
