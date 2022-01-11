import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Good!';
  }

  listBlog(): string{
    return 'list blog';
  }

  createBlog(): string {
    return 'new blog';
  }

  deleteBlog(): string {
    return 'new blog';
  }

  updateBlog(): string{
    return 'new blog';
  }
}
