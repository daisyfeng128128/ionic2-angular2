import { Injectable } from '@angular/core';
import { ToastController, Toast, LoadingController, Loading } from 'ionic-angular';
// import { Storage } from './store';

@Injectable()

export class MasterServise {
    public constructor(
        private toastCtrl: ToastController,
        private loadCtrl: LoadingController,
        // private store: Storage,
    ) { }

    /**
     * 显示提示信息
     * @param msg 提示信息
     * @param position 显示位置
     * @param duration 持续时间
     * @returns {Toast} 创建的Toast
     */
    public showToast(msg: string, position: string = 'top', duration = 1500,): Toast {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: duration,
            position: position
        });
        toast.present();
        return toast;
    }

    /**
   * 加载等待控制
   * @author pwc
   * @param duration 持续时间
   * @param spinner 微调器
   * @param content 内容
   * @returns {Loading}
   */
  public loading(duration: string='',spinner: string='', content: string=''): Loading {
    let options: any = {};
    if (duration != '') {
      options.duration = duration;
    }
    if (spinner != '') {
      options.spinner = spinner;
    }
    if (content != '') {
      options.content = content;
    }

    let load = this.loadCtrl.create(options);
    load.present();
    return load;
  }
}
