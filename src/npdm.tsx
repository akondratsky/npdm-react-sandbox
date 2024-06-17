import { connectModule, initNpdm } from '@npdm/module-federation';
import { checkboxModule, wonderfulButtonModule } from 'npdmjs-react-example';
import { lazy } from 'react';

declare global {
  interface Window {
    NPDM_VERSION: {
      button: string;
      checkbox: string;
    }
  }
}

const { loadDynamicModule } = initNpdm({
  name: 'npdmjs-demo',
  npdmUrl: 'http://localhost:3333/npdm/',
}, {
  checkbox: connectModule(checkboxModule, window.NPDM_VERSION.checkbox),
  button: connectModule(wonderfulButtonModule, window.NPDM_VERSION.button),
});


export const MyDynamicButton = lazy(() => loadDynamicModule('button'));
export const MyDynamicCheckbox = lazy(() => loadDynamicModule('checkbox'));
