import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LightRedComponent } from './light-red/light-red.component'

const routes: Routes = [{ path: '', component: LightRedComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedRoutingModule {}
