const endpoint = 'http://localhost:3000/'

export const environment = {
    production: false,
    api: {
        food: `${endpoint}food`,
        tag: `${endpoint}tag`,
        food_search: `${endpoint}search/`,
        food_id: `${endpoint}food/`,
        tag_name: `${endpoint}tag/`,
        user_login: `${endpoint}login`,
        user_register: `${endpoint}register`,
        user_order: `${endpoint}order/create`,
    },
}
