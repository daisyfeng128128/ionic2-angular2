import { MessagePage } from './message.component';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
@NgModule({
    declarations:[
        MessagePage
    ],
    imports:[
        IonicPageModule.forChild(MessagePage),
    ]
    
})
export class MessageModule {}