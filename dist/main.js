"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    app.enableCors({
        origin: ['http://87.228.8.156:3000', 'http://localhost:3000'],
        credentials: true,
        exposedHeaders: 'set-cookie',
    });
    await app.listen(4200);
}
bootstrap();
//# sourceMappingURL=main.js.map