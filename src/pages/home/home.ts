import { Component } from '@angular/core';
import { NavController, normalizeURL } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [File, FileTransfer]
})
export class HomePage {

    public logText;
    public picturePath;

    constructor(
        public navCtrl: NavController,
        private file: File,
        private transfer: FileTransfer
    ) {

        this.picturePath = normalizeURL(this.file.cacheDirectory) + 'test.jpg';

    }

    download() {

        const fileTransfer: FileTransferObject = this.transfer.create();

        fileTransfer.download('https://passport4us.sjfood.us/Content/images/login_bg.jpg', this.file.dataDirectory  + 'test.jpg').then(
            _ => this.logText = 'DOWNLOAD YES'
        ).catch(
            err => this.logText = 'DOWNLOAD ERROR'
        );

    }

    show() {
        
        // this.file.checkDir(this.file.dataDirectory, 'mydir').then(
        //     _ => {
        //         console.log('Directory exists');
        //         this.logText = 'Directory exists';
        //     }
        // ).catch(
        //     err => {
        //         console.log('Directory doesn\'t exist')
        //         this.logText = 'Directory doesn\'t exist';
        //     }
        // );

        // cache： this.file.cacheDirectory
        
    }

}
