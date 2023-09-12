import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { S3 } from "aws-sdk";
import { v4 as uuid } from "uuid";

@Injectable()
export class ImagesService {
  constructor(private readonly configService: ConfigService) {}

  async upload(file: Express.Multer.File) {
    const s3 = new S3();

    const uploadParams = {
      Bucket: this.configService.get("aws.s3BucketName"),
      Body: file,
      Key: uuid(),
    };

    const data = await s3.upload(uploadParams).promise();

    if (data) {
      console.log("Success.");
    }
  }
}
