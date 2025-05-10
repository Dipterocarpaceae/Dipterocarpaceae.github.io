// Function to fetch projects from data.json
async function fetchProjects() {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch projects data');
        }
        const data = await response.json();
        return data.projects;
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
}

// Function to create a project card element
function createProjectCard(project, delay) {
    const projectCard = document.createElement('div');
    projectCard.className = `project-card bg-white rounded-lg overflow-hidden shadow-md animate-fade-in delay-${delay}`;

    // Create the HTML structure for the project card
    projectCard.innerHTML = `
        <div class="h-48 overflow-hidden">
            <img src="/img/projects/${project.image}" alt="${project.title}"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>

            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech =>
                    `<span class="tech-tag bg-${tech.color}-100 text-${tech.color}-800 px-3 py-1 rounded-full text-sm">${tech.name}</span>`
                ).join('')}
            </div>

            <div class="flex space-x-3">
                ${project.liveLink ?
                    `<a href="${project.liveLink}" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition">
                        <i class="fas fa-external-link-alt"></i> Live
                    </a>` : ''}
                ${project.sourceLink ?
                    `<a href="${project.sourceLink}" class="text-gray-600 hover:text-indigo-600 transition">
                        <i class="fab fa-github"></i> Source Code
                    </a>` : ''}
            </div>
        </div>
    `;

    return projectCard;
}

// Function to render projects in the projects section
async function renderProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    if (!projectsContainer) {
        console.error('Projects container not found');
        return;
    }

    // Show loading indicator
    const loadingElement = document.getElementById('projects-loading');

    try {
        // Fetch projects from data.json
        const projects = await fetchProjects();

        // Remove loading indicator
        if (loadingElement) {
            loadingElement.remove();
        }

        // If no projects found, show a message
        if (projects.length === 0) {
            const noProjectsMessage = document.createElement('div');
            noProjectsMessage.className = 'col-span-3 text-center py-12';
            noProjectsMessage.innerHTML = '<p class="text-gray-600">No projects found.</p>';
            projectsContainer.appendChild(noProjectsMessage);
            return;
        }

        // Create and append project cards
        projects.forEach((project, index) => {
            const delay = (index % 3) * 100 + 100; // Calculate delay based on index
            const projectCard = createProjectCard(project, delay);
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error rendering projects:', error);

        // Remove loading indicator and show error message
        if (loadingElement) {
            loadingElement.remove();
        }

        const errorMessage = document.createElement('div');
        errorMessage.className = 'col-span-3 text-center py-12';
        errorMessage.innerHTML = '<p class="text-red-600">Failed to load projects. Please try again later.</p>';
        projectsContainer.appendChild(errorMessage);
    }
}

// Initialize projects when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);
