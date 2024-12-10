// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close');

    window.openProjectDetails = function(projectId) {
        const projectDetails = {
            'project1': `
                <h2>Project 1 Details</h2>
                <p>Detailed information about Project 1, its purpose, technologies, and outcomes.</p>
            `,
            'project2': `
                <h2>Project 2 Details</h2>
                <p>Comprehensive overview of Project 2, highlighting key features and technical challenges.</p>
            `
        };

        modalContent.innerHTML = projectDetails[projectId];
        modal.style.display = 'block';
    }

    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});