/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

@Plugin({
  pluginName: 'KeyboardPlugin',
  plugin: 'cordova-plugin-ionic-keyboard', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.Keyboard', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/ionic-team/cordova-plugin-ionic-keyboard', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS', 'Windows'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class KeyboardPlugin extends IonicNativePlugin {
  /**
   * window.addEventListener('keyboardDidHide', () => {});
   * window.addEventListener('keyboardDidShow', (event) => {});
   * window.addEventListener('keyboardWillShow', (event) => {});
   * window.addEventListener('keyboardWillHide', () => {})
   */
  @CordovaProperty isVisible: boolean;

  @Cordova({ sync: true })
  hideFormAccessoryBar(status?: boolean, completeCallback?: Function): void { }

  @Cordova({ sync: true })
  hide() { }

  @Cordova({ sync: true })
  show() { }

  @Cordova({
    event: 'keyboardDidHide',
    element: window,
    eventObservable: true
  })
  keyboardDidHide(): Observable<void> { return; }


  @Cordova({
    event: 'keyboardDidShow',
    element: window,
    eventObservable: true
  })
  keyboardDidShow(): Observable<Event> { return; }

  @Cordova({
    event: 'keyboardWillShow',
    element: window,
    eventObservable: true
  })
  keyboardWillShow(): Observable<Event> { return; }

  @Cordova({
    event: 'keyboardWillHide',
    element: window,
    eventObservable: true
  })
  keyboardWillHide(): Observable<void> { return; }
}
