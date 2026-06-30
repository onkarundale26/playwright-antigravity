import { test, expect } from '@playwright/test';

let TOKEN = process.env.API_Token;
let AUTH_TOKEN = { Authorization: `Bearer ${TOKEN}` };

test.beforeEach(async () => {
    test.skip(!TOKEN, 'Skipping GoRest API tests because API_Token is not configured');
});

test('get user test', async ({ request }) => {
    let response = await request.get('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN
    });
    let jsonBody = await response.json();
    console.log(jsonBody);
    expect(response.status()).toBe(200);
});

test('create a user test', async ({ request }) => {
    let userData = {
        name: 'uday',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'
    };

    let response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data: userData
    });

    let jsonBody = await response.json();
    console.log(jsonBody);
    expect(response.status()).toBe(201);
});

test('Update a user test', async ({ request }) => {
    // Dynamically get a user ID to update, rather than hardcoding one
    let getUsers = await request.get('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN
    });
    let users = await getUsers.json();
    let userId = users[0]?.id;
    
    expect(userId).toBeDefined();

    let userData = {
        name: 'uday101',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'inactive'
    };

    let response = await request.put(`https://gorest.co.in/public/v2/users/${userId}`, {
        headers: AUTH_TOKEN,
        data: userData
    });

    let jsonBody = await response.json();
    console.log(jsonBody);
    expect(response.status()).toBe(200);
});

test('Delete a user test', async ({ request }) => {
    // Dynamically get a user ID to delete, rather than hardcoding one
    let getUsers = await request.get('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN
    });
    let users = await getUsers.json();
    let userId = users[0]?.id;

    expect(userId).toBeDefined();

    let response = await request.delete(`https://gorest.co.in/public/v2/users/${userId}`, {
        headers: AUTH_TOKEN,
    });

    expect(response.status()).toBe(204);
});