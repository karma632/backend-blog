import { Controller, Get, Param, Patch, Body, ForbiddenException, Req} from '@nestjs/common';
import { UserService } from './user.service';
import { AllowAnonymous, Public, Roles } from '@thallesp/nestjs-better-auth';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('session')
  getSession(){
    return{};
  }


  @Roles(['ADMIN'])
  @Get("all-users")
  findAll(){
    return this.userService.findAll();
  }

  
  @Roles(["ADMIN"])
  @Patch(":id/role")
  updateRole(
    @Param("id") id: string,
    @Body() body: { role: "USER" | "EDITOR" | "ADMIN" },
  ) {

    return this.userService.updateRole(id, body.role);
  }

}
