import { Controller, Get, Post, Body } from 'giuseppe';
import { User } from '../model/User';

@Controller('services/user')
class UserService {
    @Get('getuser')
    public getUser(): User {
        let userData = new User(1,"Sunil");
        return userData;
    }
}