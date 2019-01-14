import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LightRedComponent } from './light-red/light-red.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'light-red' },
  { path: 'light-red', component: LightRedComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedRoutingModule {}
