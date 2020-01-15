import React from 'react';
import { Setup, TInternationalization } from '../../config/setup';
import { Localization } from '../../config/localization/localization';
import { toast, ToastOptions, ToastContainerProps } from 'react-toastify';
//
import moment from 'moment';
import moment_jalaali from "moment-jalaali";
import 'moment/locale/fa';
import 'moment/locale/ar';
import { Utility } from '../../asset/script/utility';
import { IPerson } from '../../model/model.person';
import { Store2 } from '../../redux/store';
import { History } from "history";
import { action_user_logged_out } from '../../redux/action/user';
import { action_remove_token } from '../../redux/action/token';
import { BaseService } from '../../service/service.base';
import { action_remove_authentication } from '../../redux/action/authentication';
// import { appLocalStorage } from '../../service/appLocalStorage';

interface IHandleError {
    error?: any;
    notify?: boolean;
    type?: 'ui' | 'back';
    body?: string;
    timeout?: number;
    toastOptions?: ToastOptions;
}
export interface IHandleErrorResolve {
    body: string;
}

interface IBaseProps {
    internationalization: TInternationalization;
}

export abstract class BaseComponent<p extends IBaseProps, S = {}, SS = any> extends React.Component<p, S, SS> {

    /* async  */
    handleError(handleErrorObj: IHandleError): IHandleErrorResolve { // Promise<IHandleErrorResolve>
        // return new Promise<IHandleErrorResolve>(resolve => {
        const defaults: IHandleError = {
            // error: {},
            notify: true,
            type: 'ui',
            // body: '', // Localization.msg.ui.msg2,
            timeout: Setup.notify.timeout.error
        };
        let obj = Object.assign({}, defaults, handleErrorObj);

        const status = (obj.error || {}).status;

        if (!obj.body) {
            if (obj.error) {
                if (obj.error.data) {
                    if (obj.error.data.msg) {
                        obj.body = this.translateErrorMsg(obj.error.data) || Localization.msg.ui.msg2;
                    } else {
                        obj.body = Localization.msg.ui.msg2;
                    }
                } else {
                    obj.body = Localization.msg.ui.msg2;
                }
            } else {
                obj.body = Localization.msg.ui.no_network_connection;
            }
        }


        if (status === 401) {

        } else if (status === 403) {
            //

        } else if (status === 406) {
            //

        } else if (status === 409) {
            //

        } else if (status === 486) {
            //

        } else if (status === 502) {
            //"msg6": "خطا در برقراری ارتباط با سرور رخ داد.",

        } else if (status === 504) {

        } else if (status >= 500) {

        } else {
            //
        }

        if (obj.notify) {
            // toast.configure(this.getNotifyContainerConfig());
            const toastOptions = Object.assign((obj.toastOptions || {}), { autoClose: obj.timeout, render: obj.body });
            if (toastOptions.toastId && toast.isActive(toastOptions.toastId)) {
                toast.update(toastOptions.toastId, this.getNotifyConfig(toastOptions));
            } else {
                toast.error(obj.body, this.getNotifyConfig(toastOptions));
            }
        }
        // resolve({ body: obj.body! });
        return { body: obj.body! };
        // });
    }

    translateErrorMsg(errorData: { [key: string]: any, msg: any }) {
        if (errorData.msg_ui) {
            return Localization.msg.ui[errorData.msg_ui];
        }
        if (errorData.msg === 'msg4') {
            return Localization.formatString(Localization.msg.back.already_has_valid_key, errorData.time);
        } else {
            return Localization.msg.back[errorData.msg];
        }
    }

    apiSuccessNotify(
        notifyBody: string = Localization.msg.ui.msg1,
        config: ToastOptions = { autoClose: Setup.notify.timeout.success },
    ) {
        toast.success(notifyBody, this.getNotifyConfig(config));
    }

    toastNotify(notifyBody: string, config: ToastOptions, toastType: 'info' | 'success' | 'error' | 'warn') {
        if (config.toastId && toast.isActive(config.toastId)) {
            toast.update(config.toastId, this.getNotifyConfig({ ...config, ...{ render: notifyBody } }));
        } else {
            toast[toastType](notifyBody, this.getNotifyConfig(config));
        }
    }

    getNotifyConfig(config?: ToastOptions): ToastOptions {
        const defaults: ToastOptions = {
            position: "top-center",
            autoClose: Setup.notify.timeout.error,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            pauseOnHover: true,
        };
        return Object.assign(defaults, config);
    }

    getNotifyContainerConfig(config?: ToastContainerProps): ToastContainerProps {
        const defaults: ToastContainerProps = {
            newestOnTop: true,
            rtl: this.props.internationalization.rtl,
            closeButton: false,
        };
        return Object.assign(defaults, config);
    }

    /**
     * @param timestamp: number in second
     */
    protected getFromNowDate(timestamp: number): string {
        moment.locale(this.props.internationalization.flag);
        return moment.unix(timestamp).fromNow();
    }

    /* jalaliDateToTimestamp(jDate: string): number {
        moment_jalaali.loadPersian({ usePersianDigits: false });
        let date = moment_jalaali(jDate, 'jYYYY/jM/jD');
        return +date.format('x');
    } */

    /**
     * @param timestamp: number in second
     */
    protected timestamp_to_fullFormat(timestamp: number): string {
        if (this.props.internationalization.flag === 'fa') {
            // moment_jalaali.locale('en');
            moment_jalaali.loadPersian({ usePersianDigits: false });
            return moment_jalaali(timestamp).format('jYYYY/jM/jD h:m A');

        } else {
            // moment_jalaali.locale('en');
            // moment_jalaali.loadPersian({ usePersianDigits: false });
            moment.locale('en');
            return moment(timestamp).format('YYYY/M/D h:m A');
        }
    }

    /**
     * @param timestamp: number in milisecond
     */
    protected timestamp_to_date(timestamp: number) {
        try {
            if (this.props.internationalization.flag === "fa") {
                return moment_jalaali(timestamp * 1000).locale("en").format('jYYYY/jM/jD');
            } else {
                return moment(timestamp * 1000).locale("en").format('YYYY/MM/DD');
            }
        } catch (e) { console.error('baseCMP method timestamp_to_date:', e) }
    }

    isDeviceMobileOrTablet(): boolean {
        return Utility.mobileAndTabletcheck();
    }

    getPersonFullName(person: IPerson): string {
        let name = person.name || '';
        let last_name = person.last_name || '';
        name = name ? name + ' ' : '';
        return (name + last_name).trim();
    }

    async onApplogout(history: History) {
        // debugger;

        Store2.dispatch(action_user_logged_out());
        Store2.dispatch(action_remove_token());
        BaseService.removeToken();
        Store2.dispatch(action_remove_authentication());

        // appLocalStorage.afterAppLogout();

        history.push('/login');

    }

}