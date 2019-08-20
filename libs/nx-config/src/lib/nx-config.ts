import { Module, DynamicModule } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvConfig {
    [key: string]: string;
}

export class NxConfigService {
    private readonly envConfig: EnvConfig;

    constructor(filePath: string) {
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = config;
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}

@Module({})
export class NxConfigModule {
    static forRoot(filePath: string): DynamicModule {
        return {
            module: NxConfigModule,
            providers: [
                {
                    provide: NxConfigService,
                    useValue: new NxConfigService(filePath),
                }
            ],
            exports: [NxConfigService]
        }
    }
}