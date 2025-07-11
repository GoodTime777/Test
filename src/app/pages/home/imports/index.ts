import { Type } from '@angular/core';

import { AdvantageComponent } from "../components/advantage/advantage.component";
import { BenefitComponent } from "../components/benefit/benefit.component";
import { CooperationComponent } from "../components/cooperation/cooperation.component";
import { SliderComponent } from "../components/slider/slider.component";
import { TechnologiesComponent } from "../components/technologies/technologies.component";
import { BackgroundComponent } from '../../../core/ui/background/background.component';


export const HomeImports: Type<unknown>[] = [AdvantageComponent,
    BenefitComponent,
    CooperationComponent,
    SliderComponent,
    TechnologiesComponent,
    BackgroundComponent];