import { Routes } from '@angular/router'

import { HomeComponent } from '../home/home.component'
import { ResumeComponent } from '../resume/resume.component'

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]