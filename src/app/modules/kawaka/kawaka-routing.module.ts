import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const kawakaRoutes:Routes=[
]
@NgModule({
    imports: [
        RouterModule.forChild(kawakaRoutes)
    ],
    exports: [
        RouterModule
    ]

})

export class KawakaRoutingModule{

}