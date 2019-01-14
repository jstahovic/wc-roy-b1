import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { DarkRedComponent } from './dark-red/dark-red.component'
import { LightRedComponent } from './light-red/light-red.component'
import { MediumRedComponent } from './medium-red/medium-red.component'
import { RedRoutingModule } from './red-routing.module'

@NgModule({
  declarations: [LightRedComponent, MediumRedComponent, DarkRedComponent],
  imports: [CommonModule, RedRoutingModule],
})
export class RedModule {}
