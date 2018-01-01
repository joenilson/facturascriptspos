import { NgModule } from '@angular/core';
import { CurrencyFormatterPipe } from './currency-formatter/currency-formatter';
@NgModule({
	declarations: [CurrencyFormatterPipe],
	imports: [],
	exports: [CurrencyFormatterPipe]
})
export class PipesModule {}
