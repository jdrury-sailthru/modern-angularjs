import * as _ from 'lodash';

class HelloWorld {
    widgets:string[];

    $onInit() {
        this.widgets = this.getWidgets();

        const foundIt = _.find(this.widgets, w => w === 'hello');
        console.warn('i found hello', foundIt);
    }

    private getWidgets():string[] {

        return [
            'hello',
            'world',
        ];
    }
}

export const componentConfig = {
    controller: HelloWorld,
    template: `
        <h1>It is April 7</h1>
        <div ng-repeat="widget in $ctrl.widgets">
            <h2>{{widget}}</h2>
        </div>
    `
};
