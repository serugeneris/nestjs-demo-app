import { Controller, Get, Ip, Req } from '@nestjs/common';

@Controller('ip')
export class IpController {
  @Get()
  getIp(@Ip() ip: string): string {
    // Note: @Ip() decorator relies on req.ip, which might need 'trust proxy' settings
    return ip;
  }
}
