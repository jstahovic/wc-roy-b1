import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LightRedComponent } from './light-red/light-red.component'
import { RedRoutingModule } from './red-routing.module'

@NgModule({
  declarations: [LightRedComponent],
  imports: [CommonModule, RedRoutingModule],
})
export class RedModule {}
