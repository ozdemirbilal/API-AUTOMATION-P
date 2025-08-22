import { test, expect, request } from '@playwright/test';
import data from '../tastData/data.json';

const baseURL = data.urls.baseURL;

test.describe('Levels API Tests', () => {

  test('Import a new level', async ({ request }) => {
    const response = await request.post(`${baseURL}/levels`, {
      data: { id: "6", 
              name: "3. Kat", 
              buildingId: "1" }
    });
    // Verify the response status and body
    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toBe('application/json');
    const body = await response.json();
    expect(body.name).toBe("3. Kat");
  });

  test('Retrieve existing level', async ({ request }) => {
    const response = await request.get(`${baseURL}/levels/6`);

    // Verify the response status and body
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');
    const body = await response.json();
    expect(body.name).toBe("3. Kat");
  });

  test('Delete existing level', async ({ request }) => {
    const response = await request.delete(`${baseURL}/levels/6`);

    // Verify the response status and body
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');
  });

});
