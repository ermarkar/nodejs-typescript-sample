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
Object.defineProperty(exports, "__esModule", { value: true });
const giuseppe_1 = require("giuseppe");
const User_1 = require("../model/User");
let UserService = class UserService {
    getUser() {
        let userData = new User_1.User(1, "Sunil");
        return userData;
    }
};
__decorate([
    giuseppe_1.Get('getuser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", User_1.User)
], UserService.prototype, "getUser", null);
UserService = __decorate([
    giuseppe_1.Controller('services/user')
], UserService);
//# sourceMappingURL=UserService.js.map