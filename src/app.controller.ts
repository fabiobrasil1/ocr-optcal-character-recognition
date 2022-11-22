import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { OcrService } from './ocr/ocr.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ocrService: OcrService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.ocrService.parseImage(file.buffer);
  }
}
