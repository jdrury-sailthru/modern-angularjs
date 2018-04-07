import * as angular from 'angular';
import { componentConfig as widgetListComponent } from './components/widgetList.component';

angular
    .module('app', [])
    .component('widgetList', widgetListComponent);
