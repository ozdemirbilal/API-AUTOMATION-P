import { test, expect, request } from '@playwright/test';
import data from '../tastData/data.json';

const baseURL = data.urls.baseURL;

test.describe('Site API Tests', () => {

  test('Import a new site', async ({ request }) => {
    const response = await request.post(`${baseURL}/sites`, {
      data: { id: "5", 
              name: "Pointr Bilişim Kampüsü", 
              location: "Ankara", 
              buildings: [1,2] }
    });
    // Verify the response status and body
    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toBe('application/json');
    const body = await response.json();
    expect(body.name).toBe("Pointr Bilişim Kampüsü");
  });

  test('Retrieve existing site', async ({ request }) => {
    const response = await request.get(`${baseURL}/sites/5`);

    // Verify the response status and body
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');
    const body = await response.json();
    expect(body.name).toBe("Pointr Bilişim Kampüsü");
  });

  test('Delete existing site', async ({ request }) => {
    const response = await request.delete(`${baseURL}/sites/5`);
    
    // Verify the response status and body
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('application/json');
  });

});


