import { IUserResponse } from "~/Types";

export async function fetchCountries(): Promise<string[]> {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch countries');
    }
}



export async function getUserCountry(): Promise<IUserResponse> {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error('Failed to fetch user country');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch user country details');
    }
}
