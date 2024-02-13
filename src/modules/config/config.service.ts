import { Injectable, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    try {
      this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    } catch (error) {
      Logger.error(`File ${filePath} not found, app will use process.env`);
    }
  }

  get(key: string): string {
    if (this.envConfig) return this.envConfig[key];
    return this.envConfig[key];
  }

  getInt(key: string): number {
    if (this.envConfig) return parseInt(this.envConfig[key], 10);
    return parseInt(this.get[key], 10);
  }

  getBoolean(key: string): boolean {
    if (this.envConfig) return this.envConfig[key] === 'true';
    return this.get[key] === 'true';
  }
}
