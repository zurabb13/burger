import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatMenuModule } from '@angular/material/menu'
import { MatInputModule } from '@angular/material/input'

@NgModule({
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatSelectModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatInputModule,
    ],
})
export class MaterialModule {}
