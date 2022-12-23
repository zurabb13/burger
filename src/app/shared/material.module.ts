import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
    exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule],
})
export class MaterialModule {}
