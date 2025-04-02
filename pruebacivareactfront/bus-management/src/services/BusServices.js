const tryMultipleUrls = async (urls, params = '') => {
    for (const url of urls) {
        try {
            console.log(`Intentando con URL: ${url}${params}`);
            // Agregar credenciales básicas
            const response = await fetch(`${url}${params}`, {
                headers: {
                    'Authorization': 'Basic ' + btoa('user:user123')
                }
            });
            if (response.ok) {
                console.log(`¡URL exitosa!: ${url}${params}`);
                const data = await response.json();
                return { url, data };
            }
        } catch (error) {
            console.log(`Error con URL ${url}${params}:`, error.message);
        }
    }
    throw new Error('No se pudo encontrar una URL válida');
};

export const getBuses = async (page = 0, size = 5) => {
    const params = `?page=${page}&size=${size}`;
    const urlsToTry = [
        '/bus',
        '/buses',
        '/api/bus',
        '/api/buses'
    ];
    
    try {
        const result = await tryMultipleUrls(urlsToTry, params);
        console.log("URL correcta encontrada:", result.url);
        return result.data;
    } catch (error) {
        console.error("Error fetching buses:", error);
        throw error;
    }
};

export const getBusById = async (id) => {
    const urlsToTry = [
        `/bus/${id}`,
        `/buses/${id}`,
        `/api/bus/${id}`,
        `/api/buses/${id}`
    ];
    
    try {
        const result = await tryMultipleUrls(urlsToTry);
        console.log("URL correcta encontrada:", result.url);
        return result.data;
    } catch (error) {
        console.error(`Error fetching bus with id ${id}:`, error);
        throw error;
    }
};