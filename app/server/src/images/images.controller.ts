import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import type { Express } from "express";
import { ImagesService } from "./images.service";

@Controller("images")
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @UseInterceptors(FileInterceptor("file"))
  @Post("upload")
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    //   await this.imagesService.upload(file);
    console.log("file", file);
    return file.buffer;
  }
}
