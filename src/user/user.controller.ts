import { Controller, Get, Param, Patch, Body, ForbiddenException, Req} from '@nestjs/common';
import { UserService } from './user.service';
import { Public, Roles } from '@thallesp/nestjs-better-auth';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('session')
  getSession(){
    return{};
  }

  @Public()
  @Get("all-users")
  // @Roles(['ADMIN'])
  findAll(){
    return this.userService.findAll();
  }

  // @Public()
  @Roles(["ADMIN"])
  @Patch(":id/role")
  updateRole(
    @Param("id") id: string,
    @Body() body: { role: "USER" | "EDITOR" | "ADMIN" },
  ) {

    return this.userService.updateRole(id, body.role);
  }

}
