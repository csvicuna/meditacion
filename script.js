// Script interactivo para la Landing Page de Mercedes Llorente

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // Toggle para Menú Móvil
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Función para el acordeón FAQ
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('[data-lucide="chevron-down"]');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

// Selección de botones de aportación
function selectContribution(btn, amount) {
    const buttons = document.querySelectorAll('.contrib-btn');
    buttons.forEach(b => {
        b.classList.remove('border-brand-500', 'bg-brand-50', 'text-brand-800', 'font-bold');
        b.classList.add('border-stone-200');
    });
    btn.classList.remove('border-stone-200');
    btn.classList.add('border-brand-500', 'bg-brand-50', 'text-brand-800', 'font-bold');
}

// Funciones para el Modal de Reserva / Formulario
function openBookingModal(title, price) {
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalBadge = document.getElementById('modalBadge');
    const contributionSection = document.getElementById('contributionSection');
    const submitBookingBtn = document.getElementById('submitBookingBtn');

    if (modal && modalTitle && modalPrice) {
        modalTitle.textContent = title;
        modalPrice.textContent = `Modalidad: ${price}`;

        const isFree = price.includes('Gratis') || price.includes('Aportación');
        
        if (isFree) {
            modalBadge.textContent = 'Encuentro Gratuito / Aportación Libre';
            contributionSection.classList.remove('hidden');
            submitBookingBtn.textContent = 'Confirmar Reserva de Plaza';
        } else {
            modalBadge.textContent = 'Reserva e Inscripción';
            contributionSection.classList.add('hidden');
            submitBookingBtn.textContent = `Pagar y Confirmar Reserva (${price})`;
        }

        modal.classList.remove('hidden');
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}
