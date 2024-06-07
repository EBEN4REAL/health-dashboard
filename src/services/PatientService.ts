import { IPatient } from "~/Types";

const username = import.meta.env.VITE_USERNAME;
const password = import.meta.env.VITE_PASSWORD;

if (!username || !password) {
    throw new Error("Missing username or password in environment variables");
}

let auth = btoa(`${username}:${password}`);

export async function getAllPatients(): Promise<IPatient[]> {
    try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch patients');
        }

        const data: IPatient[] = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch patient details');
    }
}
