import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { ProfileService } from './profile/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [ProfileService],
})
export class AdminModule {}
