import { test, expect, request } from '@playwright/test';
import data from '../tastData/data.json';

const baseURL = data.urls.baseURL;

test.describe('Building API Tests', () => {

  test('Import a new building', async ({ request }) => {
    const response = await request.post(`${baseURL}/buildings`, {
      data: { id: "3", 
              name: "C Blok", 
              siteId: "1", 
              levels: [1,2] }
    });
    // Verify the response status and body
    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toBe('application/json');
    const body = await response.json();
    expect(body.name).toBe("C Blok");
  });

  test('Retrieve existing building', async ({ request }) => {
    const response = await request.get(`${baseURL}/buildings/3`);

    // Verify the response status and body
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');
    const body = await response.json();
    expect(body.name).toBe("C Blok");
  });

  test('Delete existing building', async ({ request }) => {
    const response = await request.delete(`${baseURL}/buildings/3`);

    // Verify the response status and body
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');
  });

});

