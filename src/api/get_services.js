async function loadServices(query = '') {
    try {
        let url = 'https://jobsy-api.onrender.com/service/web';
        if (query) {
            url += `?query=${encodeURIComponent(query)}`;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        const container = document.getElementById('servicesContainer');
        container.innerHTML = ''; // Limpiar contenedor
        
        if (data.services && data.services.length > 0) {
            // Separar servicios promocionados y normales
            const promotedServices = data.services.filter(s => s.isPromoted);
            const normalServices = data.services.filter(s => !s.isPromoted);
            
            // Mostrar primero los promocionados, luego los normales
            [...promotedServices, ...normalServices].forEach(service => {
                const serviceCard = createServiceCard(service);
                container.appendChild(serviceCard);
            });
        } else {
            container.innerHTML = '<p class="text-center col-12">No hay servicios disponibles.</p>';
        }
    } catch (error) {
        console.error('Error al cargar servicios:', error);
        document.getElementById('servicesContainer').innerHTML = 
            '<p class="text-center col-12 text-danger">Error al cargar los servicios.</p>';
    }
}

function createServiceCard(service) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';
    
    const card = document.createElement('div');
    card.className = 'card service-card shadow rounded-4 h-100';
    if (service.isPromoted) {
        card.classList.add('promoted-card');
    }
    
    const profilePhoto = service.user.profilePhoto ? service.user.profilePhoto : 'https://imgs.search.brave.com/ENHpCq0zQrLkSyNy7K_iynGxlC8ZGwzHxbRhWI8MooA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXRk/cmF3aW5ncy5jb20v/ZnJlZS1pY29uLWJ3/L2RlZmF1bHQtdXNl/ci1pY29uLTEzLnBu/Zw';
    
    const promotedBadge = service.isPromoted ? `<span class="promoted-badge"><i class="bi bi-rocket-takeoff-fill"></i></span>` : '';
    
    card.innerHTML = `
        ${promotedBadge}
        <div class="service-header">
            <img src="${profilePhoto}" alt="${service.user.name}" class="service-profile-img">
            <div class="service-provider-info">
                <h5 class="fw-bold">${service.user.name}</h5>
                <p class="text-muted small">${service.category}</p>
            </div>
        </div>
        <div class="card-body">
            <h6 class="card-title fw-bold text-primary">${service.service_name}</h6>
            <p class="card-text text-muted small">${service.description.substring(0, 100)}...</p>
            <div class="service-details">
                <p><i class="bi bi-geo-alt-fill"></i> <small>${service.address}</small></p>
                <p><i class="bi bi-telephone-fill"></i> <small>${service.phone}</small></p>
                <p><i class="bi bi-envelope-fill"></i> <small>${service.email}</small></p>
            </div>
            <div class="service-types">
                ${service.tipo.map(t => `<span class="badge bg-info">${t}</span>`).join(' ')}
            </div>
        </div>
    `;
    
    col.appendChild(card);
    return col;
}