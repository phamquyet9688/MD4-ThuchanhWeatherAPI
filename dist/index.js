"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const axios_1 = __importDefault(require("axios"));
const PORT = 3000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.get('/', async (req, res) => {
    try {
        const url = 'http://api.openweathermap.org/data/2.5/weather?id=1581130&appid=72ac02221377e1141a1a6aa90a230cfd&lang=vi';
        const response = await axios_1.default.get(url);
        const data = response.data;
        console.log(data);
        if (data) {
            res.render('weather', { data });
        }
        else {
            res.end('<h1>Error</h1>');
        }
    }
    catch (err) {
        res.end('<h1>Error</h1>');
    }
});
app.listen(PORT, () => {
    console.log("App running with port: " + PORT);
});
//# sourceMappingURL=index.js.map