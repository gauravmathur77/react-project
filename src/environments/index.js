import Local from './local';
import Dev from './dev';
// import Test from './test';

const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_ENV === "dev" ? Dev : Local),
};

export default config;