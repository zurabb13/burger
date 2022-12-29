const endpoint = 'http://localhost:3000/'

export const environment = {
    production: false,
    api: {
        food: `${endpoint}`,
        tag: `${endpoint}tag`,
        food_search: `${endpoint}search/`,
        food_id: `${endpoint}food/`,
        tag_name: `${endpoint}tag/`,
    },
}
