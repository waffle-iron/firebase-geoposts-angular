import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule( {
  imports: [],
  declarations: [],
  exports: [],
  providers: []
} )
export class CoreModule {
  // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if ( parentModule ) {
      const msg = 'CoreModule has already been loaded. Import CoreModule once, only, in the root AppModule.';
      throw new Error( msg );
    }
  }
}