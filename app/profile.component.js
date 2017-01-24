"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProfileComponent = (function () {
    function ProfileComponent() {
        this.ppic_path = '/public/images/profile_pic.jpg';
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            template: "<div class=\"profile\">\n      \t\t\t\t<img class=\"ppic\" src=\"{{ppic_path}}\"/>\n      \t\t\t\t<br/>\n      \t\t\t\t<div>Karan Singh</div>\n      \t\t\t\t<br/>\n      \t\t\t\t<div>Front-End Developer</div>\n      \t\t\t\t<br/>\n      \t\t\t\t<div>University of Waterloo</div>\n      \t\t\t</div>",
            host: {
                '[@routeAnimation]': 'true',
                'style': 'display: block;'
            },
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.transition(":enter", [
                        core_1.style({ opacity: 0 }),
                        core_1.animate('2s', core_1.style({ opacity: 1 }))
                    ]),
                    core_1.transition(":leave", [
                        core_1.animate('1s', core_1.style({ opacity: 0 }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map