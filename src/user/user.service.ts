import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}
    // findAll(){
        
    //     return this.prisma.user.findMany();
    // }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async updateRole( userId: string, role: "USER" | "EDITOR" | "ADMIN", ) {
    return this.prisma.user.update({
        where: {
        id: userId,
        },
        data: {
        role: role,
        },
    });
    }
    
}
