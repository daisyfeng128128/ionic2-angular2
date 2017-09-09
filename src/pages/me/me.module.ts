import { MePage } from './me.component';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
@NgModule({
    declarations:[
        MePage
    ],
    imports:[
        IonicPageModule.forChild(MePage),
    ]
    
})
export class MeModule {}