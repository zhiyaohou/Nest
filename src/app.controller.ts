import { Controller, Get, Post, Delete, Patch, Param} from '@nestjs/common';
import { AppService } from './app.service';

let blog: string = "offers come.";
let secblog: string = "this is a blog.";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  listBlog(@Param() params): string {
    return "";
  }

  @Post()
  createBlog(): string{
    return this.appService.createBlog();
  }

  @Delete()
  delteBlog(): string{
    return this.appService.deleteBlog();
  }

  @Patch()
  updateBlog(): string{
    return this.appService.updateBlog();
  }

}
