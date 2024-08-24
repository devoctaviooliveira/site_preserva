import { API } from "./stacks/MyStack";
export default {
    config(_input) {
        return {
            name: "site",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.stack(API);
    }
};
//# sourceMappingURL=sst.config.js.map