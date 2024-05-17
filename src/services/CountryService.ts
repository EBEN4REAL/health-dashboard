
export async function fetchCountries(): Promise<string[]> {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        const countryNames = data.map((country: { name: { common: string; }; }) => country.name.common);
        return countryNames;
    } catch (error) {
        throw new Error('Failed to fetch countries');
    }
}
